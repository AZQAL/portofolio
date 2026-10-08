"use client";

import { useState } from "react";
import { uploadProfilePhoto } from "@/features/profile/services/profilStorage";
import { updateProfilePhoto } from "@/features/profile/actions/ProfileActions";
import { supabase } from "@/lib/supabase";

type ProfileFormProps = {
    foto_1: string | null;
    foto_2: string | null;
};

export default function ProfileForm({
    foto_1,
    foto_2,
}: ProfileFormProps) {
    const [foto1, setFoto1] = useState(foto_1);
    const [foto2, setFoto2] = useState(foto_2);

    const [uploading1, setUploading1] = useState(false);
    const [uploading2, setUploading2] = useState(false);

    async function handleUpload(
        file: File,
        type: "foto_1" | "foto_2"
    ) {
        const { data: sessionData } = await supabase.auth.getSession();

console.log("UPLOAD SESSION:", sessionData.session);

        const { data } = await supabase.auth.getUser();

  console.log("USER:", data.user);
        try {
            if (type === "foto_1") {
                setUploading1(true);
            } else {
                setUploading2(true);
            }

            // 1. Upload ke Supabase Storage
            const url = await uploadProfilePhoto(file, type);

            // 2. Simpan URL ke tabel profile
            await updateProfilePhoto(type, url);

            // 3. Update tampilan
            if (type === "foto_1") {
                setFoto1(url);
            } else {
                setFoto2(url);
            }

            alert("Foto berhasil diperbarui!");
        } catch (error) {
            console.error("Upload foto gagal:", error);

            const message =
                error instanceof Error
                    ? error.message
                    : "Terjadi error yang tidak diketahui.";

            alert(`Gagal upload foto:\n${message}`);
        } finally {
            if (type === "foto_1") {
                setUploading1(false);
            } else {
                setUploading2(false);
            }
        }
    }

    return (
        <div className="grid gap-6 md:grid-cols-2">
            {/* FOTO 1 */}
            <div>
                <label className="mb-3 block text-sm font-medium text-white">
                    Foto Profil 1
                </label>

                {foto1 && (
                    <div className="mb-4 overflow-hidden rounded-2xl border border-white/10 bg-[#080b11]">
                        <img
                            src={foto1}
                            alt="Foto profil 1"
                            className="h-48 w-48 object-cover"
                            onError={(event) => {
                                event.currentTarget.style.display = "none";
                            }}
                        />
                    </div>
                )}

                <input
                    type="file"
                    accept="image/*"
                    disabled={uploading1}
                    onChange={(event) => {
                        const file = event.target.files?.[0];

                        if (file) {
                            handleUpload(file, "foto_1");
                        }
                    }}
                    className="block w-full text-sm text-gray-400 file:mr-4 file:rounded-lg file:border-0 file:bg-blue-500/10 file:px-4 file:py-2 file:text-sm file:font-semibold file:text-blue-400 hover:file:bg-blue-500/20"
                />

                {uploading1 && (
                    <p className="mt-2 text-sm text-blue-400">
                        Mengupload foto...
                    </p>
                )}
            </div>

            {/* FOTO 2 */}
            <div>
                <label className="mb-3 block text-sm font-medium text-white">
                    Foto Profil 2
                </label>

                {foto2 && (
                    <div className="mb-4 overflow-hidden rounded-2xl border border-white/10 bg-[#080b11]">
                        <img
                            src={foto2}
                            alt="Foto profil 2"
                            className="h-48 w-48 object-cover"
                            onError={(event) => {
                                event.currentTarget.style.display = "none";
                            }}
                        />
                    </div>
                )}

                <input
                    type="file"
                    accept="image/*"
                    disabled={uploading2}
                    onChange={(event) => {
                        const file = event.target.files?.[0];

                        if (file) {
                            handleUpload(file, "foto_2");
                        }
                    }}
                    className="block w-full text-sm text-gray-400 file:mr-4 file:rounded-lg file:border-0 file:bg-blue-500/10 file:px-4 file:py-2 file:text-sm file:font-semibold file:text-blue-400 hover:file:bg-blue-500/20"
                />

                {uploading2 && (
                    <p className="mt-2 text-sm text-blue-400">
                        Mengupload foto...
                    </p>
                )}
            </div>
        </div>
    );
}