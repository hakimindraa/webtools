import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "AlatDev - Developer Tools Indonesia",
  description: "Koleksi tools gratis untuk developer: JSON Formatter, Base64, UUID Generator, Color Picker, Password Generator, dan banyak lagi. Semua berjalan di browser.",
  keywords: "developer tools, web tools, JSON formatter, Base64, UUID generator, color picker, password generator, Indonesia",
  verification: {
    google: "8G7U4siDE0YByEniKgVxsQOM0_wFFZpmPeIoXSnsJTM",
  },
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
