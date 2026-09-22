import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Azqal — Full Stack Developer",
  description:
    "Portfolio website of Azqal, a Full Stack Developer who builds modern web applications.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}