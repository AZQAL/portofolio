"use client";

import { useTransition } from "react";
import { deleteProject } from "@/features/projects/services/projectActions";

type DeleteProjectButtonProps = {
  projectId: number;
};

export default function DeleteProjectButton({
  projectId,
}: DeleteProjectButtonProps) {
  const [isPending, startTransition] = useTransition();

  function handleDelete() {
    const confirmed = window.confirm(
      "Yakin ingin menghapus project ini?"
    );

    if (!confirmed) {
      return;
    }

    startTransition(async () => {
      await deleteProject(projectId);
    });
  }

  return (
    <button
      type="button"
      onClick={handleDelete}
      disabled={isPending}
      className="rounded-lg border border-red-500/20 bg-red-500/10 px-4 py-2 text-sm text-red-400 transition hover:bg-red-500/20 disabled:cursor-not-allowed disabled:opacity-50"
    >
      {isPending ? "Menghapus..." : "Hapus"}
    </button>
  );
}