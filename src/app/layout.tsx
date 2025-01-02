// "use client";
// import type { Metadata } from "next";
import "./globals.css";
// import { NextUIProvider } from "@nextui-org/react";

// export const metadata: Metadata = {
//   title: "Fushion AI",
//   description: "Transform real estate with the power of data",
// };

import Footer from "@/components/layouts/Footer";
// import { Provider } from "react-redux";
// import { store } from "@/redux/store";
// import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Script from "next/script";

// import { CookieConsent } from "@/components/cookie-consent";
import { Metadata } from "next";
import AppProviders from "./AppProviders";
import Favicon from "./favicon.ico";

export const metadata: Metadata = {
  title: "Fushion AI",
  description: "Fushion AI - Transform real estate with the power of data",
  themeColor: "#2B00FF",
  icons: [{ rel: "icon", url: Favicon.src }],
  keywords: ["Fushion", "AI", "FushionAI", "real estate", "AI real estate"],
  openGraph: {
    type: "website",
    url: "https://fushionai.com",
    siteName: "Fushion AI",
    title: "Fushion AI",
    description: "Fushion AI - Transform real estate with the power of data",
    locale: "en_US",
    alternateLocale: "nl_NL",
    images: [
      {
        url: "/Logo.png",
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
        {/* <NextUIProvider>
          <Provider store={store}>
            <ToastContainer />
            <div className="w-full min-h-[100vh] h-auto">
              {children}
              <CookieConsent />
            </div>
            <Footer />
          </Provider>
        </NextUIProvider> */}
        <AppProviders>
          {children}
          <Footer />
        </AppProviders>
      </body>
    </html>
  );
}
