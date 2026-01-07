import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "AlatDev - Developer Tools Indonesia",
  description: "Koleksi tools gratis untuk developer: JSON Formatter, Base64, UUID Generator, Color Picker, Password Generator, dan banyak lagi. Semua berjalan di browser.",
  keywords: "developer tools, web tools, JSON formatter, Base64, UUID generator, color picker, password generator, Indonesia",
  verification: {
    google: "8G7U4siDE0YByEniKgVxsQOM0_wFFZpmPeIoXSnsJTM",
  },
  manifest: "/manifest.json",
  appleWebApp: {
    capable: true,
    statusBarStyle: "black-translucent",
    title: "AlatDev",
  },
  icons: {
    icon: "/icons/icon-512x512.png",
    apple: "/icons/icon-192x192.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <head>
        <meta name="theme-color" content="#06b6d4" />
        <link rel="apple-touch-icon" href="/icons/icon-192x192.png" />
      </head>
      <body>
        {children}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              if ('serviceWorker' in navigator) {
                window.addEventListener('load', function() {
                  navigator.serviceWorker.register('/sw.js')
                    .then(function(registration) {
                      console.log('ServiceWorker registered:', registration.scope);
                    })
                    .catch(function(error) {
                      console.log('ServiceWorker registration failed:', error);
                    });
                });
              }
            `,
          }}
        />
      </body>
    </html>
  );
}
