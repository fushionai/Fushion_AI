import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Fushion AI",
  description: "Transform real estate with the power of data",
};

import { NextUIProvider } from "@nextui-org/react";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`antialiased`}>
        <NextUIProvider>{children}</NextUIProvider>
      </body>
    </html>
  );
}
