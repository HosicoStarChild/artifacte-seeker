import type { Metadata } from "next";
import "./globals.css";
import { WalletProviderWrapper } from "@/components/WalletProvider";
import MobileNav from "@/components/MobileNav";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Artifacte — RWA Tokenization on Solana",
  description: "Institutional-grade real world asset tokenization platform on Solana",
  viewport: "width=device-width, initial-scale=1.0, viewport-fit=cover, user-scalable=no",
  appleWebApp: {
    capable: true,
    statusBarStyle: "black-translucent",
  },
  formatDetection: {
    telephone: false,
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <meta name="theme-color" content="#0f172a" />
        <link rel="manifest" href="/manifest.json" />
      </head>
      <body className="font-sans antialiased bg-slate-950 text-slate-100">
        <WalletProviderWrapper>
          <main className="min-h-screen pb-20 md:pb-0">{children}</main>
          <MobileNav />
          <Footer />
        </WalletProviderWrapper>
      </body>
    </html>
  );
}
