"use client";
// import type { Metadata } from "next";
import "./globals.css";
import { NextUIProvider } from "@nextui-org/react";

// export const metadata: Metadata = {
//   title: "Fushion AI",
//   description: "Transform real estate with the power of data",
// };

import Footer from "@/components/layouts/Footer";
import { Provider } from "react-redux";
import { store } from "@/redux/store";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`antialiased`}>
        <NextUIProvider>
          <Provider store={store}>
            <ToastContainer />
            <div className="w-full min-h-[100vh] h-auto">{children}</div>
            <Footer />
          </Provider>
        </NextUIProvider>
      </body>
    </html>
  );
}
