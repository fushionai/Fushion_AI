"use client";
// import type { Metadata } from "next";
import "./globals.css";
import { NextUIProvider } from "@nextui-org/react";

// export const metadata: Metadata = {
//   title: "Fushion AI",
//   description: "Transform real estate with the power of data",
// };

import Footer from "@/components/layouts/Footer";
import { TokenProvider } from "@/context/TokenContext";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`antialiased`}>
        <NextUIProvider>
          <TokenProvider>
            {children}
            <Footer />
          </TokenProvider>
        </NextUIProvider>
      </body>
    </html>
  );
}
