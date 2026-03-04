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
  title: "SmileCraft Dental | Premium Dental Care Sydney | Award-Winning Dentists",
  description:
    "Experience award-winning dental care in Sydney. SmileCraft Dental offers AI-powered diagnostics, cosmetic dentistry, implants, and emergency care. Book online today.",
  keywords:
    "dentist Sydney, dental clinic Sydney, cosmetic dentistry, dental implants, Invisalign Sydney, emergency dentist, AI dental, SmileCraft Dental",
  openGraph: {
    title: "SmileCraft Dental | Premium Dental Care in Sydney",
    description:
      "Award-winning dental care powered by AI technology. Trusted by 15,000+ Australians.",
    type: "website",
    locale: "en_AU",
    url: "https://smilecraftdental.com.au",
  },
  robots: "index, follow",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-AU">
      <body
        className={`${jakarta.variable} ${inter.variable} antialiased`}
        style={{ fontFamily: "var(--font-inter)" }}
      >
        {children}
      </body>
    </html>
  );
}
