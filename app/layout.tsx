import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  metadataBase: new URL("https://yeldendigital.co.uk"),
  title: {
    default: "Yelden Digital Marketing Ltd | Expert Digital Marketing Services",
    template: "%s | Yelden Digital Marketing Ltd",
  },
  description:
    "Yelden Digital Marketing Ltd provides website design, maintenance, SEO, Google Ads, PPC, social media management, branding, content marketing and promotional materials.",
  icons: {
    icon: "/icon.svg",
  },
  openGraph: {
    title: "Yelden Digital Marketing Ltd",
    description:
      "Professional website design, SEO, advertising, social media and digital marketing services.",
    url: "https://yeldendigital.co.uk",
    siteName: "Yelden Digital Marketing Ltd",
    type: "website",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
