"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

import { createClient } from "@/lib/supabase/server";


// =====================================================
// CREATE PROJECT
// =====================================================

export async function createProject(formData: FormData) {
  const title = formData.get("title")?.toString().trim();
  const description = formData.get("description")?.toString().trim();
  const technologies = formData.get("technologies")?.toString().trim();
  const features = formData.get("features")?.toString().trim();

  const imageFile = formData.get("image");


  // Validasi field
  if (!title) {
    throw new Error("Judul project wajib diisi.");
  }

  if (!description) {
    throw new Error("Deskripsi wajib diisi.");
  }

  if (!technologies) {
    throw new Error("Technologies wajib diisi.");
  }

  if (!features) {
    throw new Error("Features wajib diisi.");
  }

  if (!(imageFile instanceof File)) {
    throw new Error("Gambar belum dipilih.");
  }

  if (imageFile.size === 0) {
    throw new Error("File gambar kosong.");
  }


  const supabase = await createClient();


  // =====================================================
  // UPLOAD GAMBAR KE SUPABASE STORAGE
  // =====================================================

  const fileExtension = imageFile.name.split(".").pop();

  const fileName = `${Date.now()}-${crypto.randomUUID()}.${fileExtension}`;

  const filePath = `projects/${fileName}`;


  const { error: uploadError } = await supabase.storage
    .from("project-images")
    .upload(filePath, imageFile, {
      contentType: imageFile.type,
      upsert: false,
    });


  if (uploadError) {
    throw new Error(uploadError.message);
  }


  // =====================================================
  // MENGAMBIL PUBLIC URL GAMBAR
  // =====================================================

  const { data: publicUrlData } = supabase.storage
    .from("project-images")
    .getPublicUrl(filePath);

  const imageUrl = publicUrlData.publicUrl;


  // =====================================================
  // SIMPAN DATA PROJECT KE DATABASE
  // =====================================================

  const { error: insertError } = await supabase
    .from("project")
    .insert({
      title,
      description,
      image: imageUrl,
      technologies,
      features,
    });


  // Jika insert database gagal,
  // hapus gambar yang sudah ter-upload
  if (insertError) {
    await supabase.storage
      .from("project-images")
      .remove([filePath]);

    throw new Error(insertError.message);
  }


  // =====================================================
  // REFRESH CACHE
  // =====================================================

  revalidatePath("/");
  revalidatePath("/admin");


  // Kembali ke dashboard admin
  redirect("/admin");
}


// =====================================================
// UPDATE PROJECT
// =====================================================

export async function updateProject(
  id: number,
  formData: FormData
) {
  const title = formData.get("title")?.toString().trim();
  const description = formData.get("description")?.toString().trim();
  const technologies = formData.get("technologies")?.toString().trim();
  const features = formData.get("features")?.toString().trim();

  const currentImage =
    formData.get("currentImage")?.toString().trim();

  const imageFile = formData.get("image");


  // ==========================================
  // VALIDASI
  // ==========================================

  if (!title) {
    throw new Error("Judul project wajib diisi.");
  }

  if (!description) {
    throw new Error("Deskripsi wajib diisi.");
  }

  if (!technologies) {
    throw new Error("Technologies wajib diisi.");
  }

  if (!features) {
    throw new Error("Features wajib diisi.");
  }

  if (!currentImage) {
    throw new Error("Gambar project sebelumnya tidak ditemukan.");
  }


  const supabase = await createClient();


  // ==========================================
  // GAMBAR YANG AKAN DISIMPAN
  // ==========================================

  let imageUrl = currentImage;

  let newFilePath: string | null = null;


  // ==========================================
  // JIKA USER MEMILIH GAMBAR BARU
  // ==========================================

  if (
    imageFile instanceof File &&
    imageFile.size > 0
  ) {
    const fileExtension =
      imageFile.name.split(".").pop();

    const fileName =
      `${Date.now()}-${crypto.randomUUID()}.${fileExtension}`;

    newFilePath = `projects/${fileName}`;


    // Upload gambar baru
    const { error: uploadError } =
      await supabase.storage
        .from("project-images")
        .upload(newFilePath, imageFile, {
          contentType: imageFile.type,
          upsert: false,
        });


    if (uploadError) {
      throw new Error(uploadError.message);
    }


    // Ambil URL gambar baru
    const { data: publicUrlData } =
      supabase.storage
        .from("project-images")
        .getPublicUrl(newFilePath);

    imageUrl = publicUrlData.publicUrl;
  }


  // ==========================================
  // UPDATE DATABASE
  // ==========================================

  const { error: updateError } =
    await supabase
      .from("project")
      .update({
        title,
        description,
        image: imageUrl,
        technologies,
        features,
      })
      .eq("id", id);


  // Jika database gagal
  if (updateError) {

    // Hapus gambar baru yang sudah ter-upload
    if (newFilePath) {
      await supabase.storage
        .from("project-images")
        .remove([newFilePath]);
    }

    throw new Error(updateError.message);
  }


  // ==========================================
  // HAPUS GAMBAR LAMA
  // ==========================================

  if (
    newFilePath &&
    currentImage.includes(
      "/storage/v1/object/public/project-images/"
    )
  ) {
    const oldFilePath =
      currentImage.split(
        "/storage/v1/object/public/project-images/"
      )[1];

    if (oldFilePath) {
      await supabase.storage
        .from("project-images")
        .remove([oldFilePath]);
    }
  }


  // ==========================================
  // REFRESH CACHE
  // ==========================================

  revalidatePath("/");
  revalidatePath("/admin");
  revalidatePath(`/projects/${id}`);


  // Kembali ke dashboard
  redirect("/admin");
}


// =====================================================
// DELETE PROJECT
// =====================================================

export async function deleteProject(id: number) {
  const supabase = await createClient();

  // ==========================================
  // 1. CEK USER YANG SEDANG LOGIN
  // ==========================================

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    throw new Error("Kamu harus login sebagai admin.");
  }

  // ==========================================
  // 2. AMBIL DATA PROJECT
  // ==========================================

  const { data: project, error: fetchError } = await supabase
    .from("project")
    .select("image")
    .eq("id", id)
    .single();

  if (fetchError) {
    throw new Error(fetchError.message);
  }

  if (!project) {
    throw new Error("Project tidak ditemukan.");
  }

  // ==========================================
  // 3. HAPUS GAMBAR DARI STORAGE
  // ==========================================

  if (project.image) {
    const storageMarker =
      "/storage/v1/object/public/project-images/";

    if (project.image.includes(storageMarker)) {
      const filePath = decodeURIComponent(
        project.image.split(storageMarker)[1]
      );

      if (filePath) {
        const { error: storageError } = await supabase.storage
          .from("project-images")
          .remove([filePath]);

        if (storageError) {
          throw new Error(
            `Gagal menghapus gambar dari Storage: ${storageError.message}`
          );
        }
      }
    }
  }

  // ==========================================
  // 4. HAPUS DATA PROJECT DARI DATABASE
  // ==========================================

  const { error: deleteError } = await supabase
    .from("project")
    .delete()
    .eq("id", id);

  if (deleteError) {
    throw new Error(deleteError.message);
  }

  // ==========================================
  // 5. REFRESH CACHE
  // ==========================================

  revalidatePath("/");
  revalidatePath("/admin");

  // Kembali ke dashboard
  redirect("/admin");
}