import type { Metadata } from "next";
import { Libre_Baskerville } from "next/font/google";
import Image from "next/image";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

const libreBaskerville = Libre_Baskerville({
  variable: "--font-libre-baskerville",
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "ManoArohan | Clinical Psychology & Therapy",
  description: "Ascent of the Mind. Professional clinical psychology services for mental growth and well-being.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${libreBaskerville.variable} font-serif antialiased min-h-screen relative`}
      >
        {/* Desktop Watermark */}
        <div className="fixed inset-0 z-0 hidden md:flex items-center justify-center pointer-events-none opacity-[0.05]">
          <div className="relative w-[500px] h-[500px] xl:w-[600px] xl:h-[600px]">
            <Image
              src="/full-logo.png"
              alt=""
              fill
              className="object-contain"
              priority
            />
          </div>
        </div>

        <div className="relative z-10 flex flex-col min-h-screen">
          <Navbar />
          <main className="flex-1">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
