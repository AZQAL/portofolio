"use server";

import { createClient } from "@/lib/supabase/server";

export async function updateProfilePhoto(
  type: "foto_1" | "foto_2",
  url: string
) {
  const supabase = await createClient();

  const { error } = await supabase
    .from("profile")
    .update({
      [type]: url,
    })
    .eq("id", 1);

  if (error) {
    throw new Error(error.message);
  }

  return {
    success: true,
  };
}