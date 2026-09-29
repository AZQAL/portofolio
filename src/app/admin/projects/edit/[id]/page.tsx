import Link from "next/link";
import { notFound } from "next/navigation";
import { createClient } from "@/lib/supabase/server";
import { updateProject } from "@/features/projects/services/projectActions";

export default async function EditProjectPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const projectId = Number(id);

  if (!Number.isInteger(projectId)) {
    notFound();
  }

  const supabase = await createClient();

  const { data: project, error } = await supabase
    .from("project")
    .select("*")
    .eq("id", projectId)
    .single();

  if (error || !project) {
    notFound();
  }

  const updateAction = updateProject.bind(null, projectId);

  return (
    <main className="min-h-screen bg-[#05070b] px-4 py-10 text-white sm:px-6 lg:px-8">
      <div className="mx-auto max-w-3xl">
        <div className="mb-8">
          <Link
            href="/admin/projects"
            className="text-sm text-gray-500 transition hover:text-white"
          >
            ← Kembali ke Project Management
          </Link>

          <p className="mt-6 text-sm text-blue-400">
            Admin
          </p>

          <h1 className="mt-1 text-3xl font-bold">
            Edit Project
          </h1>

          <p className="mt-2 text-sm text-gray-500">
            Ubah informasi project portfolio.
          </p>
        </div>

        <form
          action={updateAction}
          className="space-y-6 rounded-2xl border border-white/10 bg-white/[0.03] p-6"
        >
          <div>
            <label
              htmlFor="title"
              className="mb-2 block text-sm font-medium text-gray-300"
            >
              Judul Project
            </label>

            <input
              id="title"
              name="title"
              type="text"
              required
              defaultValue={project.title}
              className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-sm text-white outline-none transition focus:border-blue-500"
            />
          </div>

          <div>
            <label
              htmlFor="description"
              className="mb-2 block text-sm font-medium text-gray-300"
            >
              Deskripsi
            </label>

            <textarea
              id="description"
              name="description"
              required
              rows={5}
              defaultValue={project.description}
              className="w-full resize-none rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-sm text-white outline-none transition focus:border-blue-500"
            />
          </div>

          <div>
            <p className="mb-2 text-sm font-medium text-gray-300">
              Gambar Saat Ini
            </p>

            <img
              src={project.image}
              alt={project.title}
              className="h-48 w-full rounded-xl border border-white/10 object-cover"
            />
          </div>

          <div>
            <label
              htmlFor="image"
              className="mb-2 block text-sm font-medium text-gray-300"
            >
              Ganti Gambar
            </label>

            <input
              id="image"
              name="image"
              type="file"
              accept="image/png,image/jpeg,image/webp"
              className="block w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white file:mr-4 file:rounded-lg file:border-0 file:bg-blue-600 file:px-4 file:py-2 file:text-sm file:font-medium file:text-white hover:file:bg-blue-500"
            />

            <p className="mt-2 text-xs text-gray-500">
              Kosongkan jika tidak ingin mengganti gambar.
            </p>
          </div>

          <input
            type="hidden"
            name="currentImage"
            value={project.image}
          />

          <div>
            <label
              htmlFor="technologies"
              className="mb-2 block text-sm font-medium text-gray-300"
            >
              Technologies
            </label>

            <input
              id="technologies"
              name="technologies"
              type="text"
              required
              defaultValue={project.technologies}
              className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-sm text-white outline-none transition focus:border-blue-500"
            />

            <p className="mt-2 text-xs text-gray-600">
              Pisahkan dengan koma.
            </p>
          </div>

          <div>
            <label
              htmlFor="features"
              className="mb-2 block text-sm font-medium text-gray-300"
            >
              Features
            </label>

            <textarea
              id="features"
              name="features"
              required
              rows={4}
              defaultValue={project.features}
              className="w-full resize-none rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-sm text-white outline-none transition focus:border-blue-500"
            />

            <p className="mt-2 text-xs text-gray-600">
              Pisahkan dengan koma.
            </p>
          </div>

          <div className="flex justify-end gap-3 border-t border-white/10 pt-6">
            <Link
              href="/admin"
              className="rounded-lg border border-white/10 bg-white/5 px-5 py-2.5 text-sm text-gray-300 transition hover:bg-white/10 hover:text-white"
            >
              Batal
            </Link>

            <button
              type="submit"
              className="rounded-lg bg-blue-600 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-blue-500"
            >
              Simpan Perubahan
            </button>
          </div>
        </form>
      </div>
    </main>
  );
}