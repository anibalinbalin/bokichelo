import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "FilmProduction for BKCH",
  description: "Film Production Company",
  keywords: ["film production", "video production", "BKCH"],
  viewport: "width=device-width, initial-scale=1, minimum-scale=1",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
