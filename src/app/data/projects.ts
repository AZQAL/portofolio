export type Project = {
  id: string,
  title: string;
  description: string;
  image: string;
  technologies: string[];
  features: string[]
};

export const projects: Project[] = [
  {
    id: "E-commers",
    title: "E-commers",
    description:
      "APK Web E-commers dengan interface modern dan responsive.",
    image: "/project-1.JPG",
    technologies: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Supabase",
    ],
    features: [
    "Katalog produk",
    "Pencarian produk",
    "Keranjang belanja",
    "Manajemen produk",
    "Responsive design",
  ],
    
  },
  {
    id: "CenFlow",
    title: "CenFlow",
    description:
      "Aplikasi manajemen keuangan yang membantu pengguna mencatat pemasukan, pengeluaran, dan memantau kondisi keuangan.",
    image: "/project-2.JPG",
    technologies: [
      "Next.js",
      "React",
      "Tailwind CSS",
      "Supabase",
    ],
    features: [
    "Katalog produk",
    "Pencarian produk",
    "Keranjang belanja",
    "Manajemen produk",
    "Responsive design",
  ],
  },
  {
    id: "Manajemen-Magang",
    title: "Manajemen Magang",
    description:
      "Dashboard modern dengan visualisasi data, statistik, tabel interaktif, dan responsive design.",
    image: "/project-3.JPG",
    technologies: [
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Recharts",
    ],
    features: [
    "Katalog produk",
    "Pencarian produk",
    "Keranjang belanja",
    "Manajemen produk",
    "Responsive design",
  ],
  },
  {
    id: "Hppy-Birthday",
    title: "Hppy Birthday",
    description:
      "Tampilan modern dengan visualisasi menarik, statistik, dan responsive design.",
    image: "/project-4.JPG",
    technologies: [
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Recharts",
    ],
    features: [
    "Katalog produk",
    "Pencarian produk",
    "Keranjang belanja",
    "Manajemen produk",
    "Responsive design",
  ],
  },
  {
    id: "Amore-Coffe",
    title: "AMORE COFFE",
    description:
      "Dashboard modern dengan visualisasi data, statistik, tabel interaktif, dan responsive design.",
    image: "/project-5.JPG",
    technologies: [
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Recharts",
    ],
    features: [
    "Katalog produk",
    "Pencarian produk",
    "Keranjang belanja",
    "Manajemen produk",
    "Responsive design",
  ],
  },
];