import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { SimpleHeader } from "@/components/layout/SimpleHeader";
import { SimpleFooter } from "@/components/layout/SimpleFooter";

const inter = Inter({
  subsets: ["latin"],
  display: 'swap',
});

export const metadata: Metadata = {
  title: "Arthoscenter - Expert Orthopaedic Care | Dr. Gurudeo Kumar",
  description: "Leading orthopaedic hospital offering joint replacement, spine surgery, sports medicine, and trauma care in Bihar. Online consultations available.",
};

export default async function RootLayout({
  children,
  params
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  return (
    <html lang={locale}>
      <body className={inter.className}>
        <SimpleHeader />
        <main>
          {children}
        </main>
        <SimpleFooter />
      </body>
    </html>
  );
}
