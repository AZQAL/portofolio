import type { Metadata } from "next";
import "./globals.css";
import { Geist } from "next/font/google";
import { cn } from "@/lib/utils";
import { cookies } from "next/headers";
import { createClient } from "@/lib/supabase/server";
import Navbar from "@/components/layout/Navbar";

const geist = Geist({subsets:['latin'],variable:'--font-sans'});

export const metadata: Metadata = {
  title: "Azqal — Full Stack Developer",
  description:
    "Portfolio website of Azqal, a Full Stack Developer who builds modern web applications.",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  const cookieStore = await cookies();

const hasDoorAccess =
  cookieStore.get("admin-door")?.value === "granted";

  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  const isLoggedIn = !!user;
  
  return (
    <html lang="en" className={cn("font-sans", geist.variable)}>
      <body className="min-h-full flex flex-col">
        <Navbar hasDoorAccess={hasDoorAccess} isLoggedIn={isLoggedIn} />
        

        {children}
      </body>
    </html>
  );
}