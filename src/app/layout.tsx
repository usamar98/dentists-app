import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Inter } from "next/font/google";
import "./globals.css";

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "SmileCraft Dental Fiji | Dentist in Fiji",
  description:
    "SmileCraft Dental Fiji demo for Suva, Nadi, Lautoka, and nearby communities with WhatsApp enquiries, call buttons, Google Maps, opening hours, and address.",
  keywords:
    "Dentist in Fiji, Dental clinic in Suva, Emergency dentist in Fiji, Family dental care in Fiji, Suva dentist, Nadi dentist, Lautoka dentist",
  openGraph: {
    title: "SmileCraft Dental Fiji | Dentist in Fiji",
    description:
      "Dental care in Suva, Nadi, Lautoka, and across Fiji with WhatsApp enquiries and Google Maps contact details.",
    type: "website",
    locale: "en_FJ",
    url: "https://smilecraftfiji.com",
  },
  robots: "index, follow",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-FJ">
      <body
        className={`${jakarta.variable} ${inter.variable} antialiased`}
        style={{ fontFamily: "var(--font-inter)" }}
      >
        {children}
      </body>
    </html>
  );
}
