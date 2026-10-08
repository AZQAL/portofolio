import { createClient } from "@/lib/supabase/client";

export async function uploadProfilePhoto(
  file: File,
  type: "foto_1" | "foto_2"
) {
  const supabase = createClient();

  const fileExt = file.name.split(".").pop();
  const fileName = `${type}-${Date.now()}.${fileExt}`;
  const filePath = `profile/${fileName}`;

  const { error } = await supabase.storage
    .from("profile")
    .upload(filePath, file, {
      cacheControl: "3600",
      upsert: false,
    });

  if (error) {
    throw new Error(error.message);
  }

  const { data } = supabase.storage
    .from("profile")
    .getPublicUrl(filePath);

  return data.publicUrl;
  
}