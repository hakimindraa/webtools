import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "HIMK TPI-B | Himpunan Mahasiswa Kundur Tanjungpinang-Bintan",
  description: "Himpunan Mahasiswa Kundur Tanjungpinang-Bintan (HIMK TPI-B) adalah wadah silaturahmi dan pengembangan potensi mahasiswa asal Kundur yang menempuh pendidikan di Tanjungpinang dan Bintan.",
  keywords: "HIMK, TPI-B, Kundur, Tanjungpinang, Bintan, Mahasiswa, Organisasi Daerah, Kepulauan Riau",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <body>
        {children}
      </body>
    </html>
  );
}
