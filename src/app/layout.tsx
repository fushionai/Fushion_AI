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
import Script from "next/script";

import { CookieConsent } from "@/components/cookie-consent";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Fushion AI",
  description:
    "",
  themeColor: "#2B00FF",

  openGraph: {
    type: "website",
    url: "https://fushionai.com/",
    title: "Fushion AI",
    description:
      "",
    images: [
      {
        url: "https://firebasestorage.googleapis.com/v0/b/huwaa-app.appspot.com/o/656c3ab56c327de48fab9093%2FEDit-Logo.png?alt=media&token=cc2debed-9bdd-4a2e-b14e-5bc0c9ea5711",
        width: 800,
        height: 630,
        alt: "FushionAI Logo",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-890ZT6SCEL"
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-890ZT6SCEL');
        `}
      </Script>
      <head>
        <title>Fushion AI</title>
        <meta
          name="description"
          content="Transform real estate with the power of data"
        />
      </head>
      <body className={`antialiased`}>
        <NextUIProvider>
          <Provider store={store}>
            <ToastContainer />
            <div className="w-full min-h-[100vh] h-auto">
              {children}
              <CookieConsent />
            </div>
            <Footer />
          </Provider>
        </NextUIProvider>
      </body>
    </html>
  );
}
