import type { Metadata } from "next";
import "./globals.css";
import { site } from "@/config/site";

export const metadata: Metadata = {
  title: site.name,
  description: site.description,
  metadataBase: new URL("https://" + site.domain),
  openGraph: {
    title: site.name,
    description: site.description,
    url: "https://" + site.domain,
    siteName: site.name
  },
  robots: { index: true, follow: true }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-white text-neutral-900 antialiased">
        {children}
      </body>
    </html>
  );
}
