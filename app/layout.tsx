import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "ElSäker AB – Auktoriserade elektriker i Stockholm",
  description:
    "ElSäker AB – Auktoriserade elektriker i Stockholm. Elinstallationer, felsökning, laddboxar och mer. Snabb, trygg och certifierad service.",
  robots: "index, follow",
  openGraph: {
    title: "ElSäker AB – Auktoriserade elektriker i Stockholm",
    description:
      "Professionella elektriker med 15+ års erfarenhet. Vi utför alla typer av elinstallationer, laddboxar och felsökning.",
    type: "website",
    locale: "sv_SE",
  },
};

export const viewport: Viewport = {
  themeColor: "#1a1a2e",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="sv">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
