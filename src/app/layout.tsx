// "use client";
// import type { Metadata } from "next";
import "./[locale]/globals.css";
// import { NextUIProvider } from "@nextui-org/react";

// export const metadata: Metadata = {
//   title: "Fushion AI",
//   description: "Transform real estate with the power of data",
// };

// import { Provider } from "react-redux";
// import { store } from "@/redux/store";
// import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Script from "next/script";

// import { CookieConsent } from "@/components/cookie-consent";
import { Metadata } from "next";
import Favicon from "./[locale]/favicon.ico";

export const metadata: Metadata = {
  title: "Fushion AI",
  description: "Fushion AI - Transform real estate with the power of data",
  icons: [{ rel: "icon", url: Favicon.src }],
  keywords: ["Fushion", "AI", "FushionAI", "real estate", "AI real estate"],
  openGraph: {
    type: "website",
    url: "https://www.fushionai.com",
    siteName: "Fushion AI",
    title: "Fushion AI",
    description: "Fushion AI - Transform real estate with the power of data",
    locale: "en_US",
    alternateLocale: "nl_NL",
    images: [
      {
        url: Favicon.src,
        width: 800,
        height: 630,
        alt: "FushionAI Logo",
      },
    ],
  },
};
const locales = ["en", "nl"];
export default async function RootLayout({
  children,
  params: { locale },
}: Readonly<{
  children: React.ReactNode;
  params: { locale: string };
}>) {
  // Ensure that the incoming `locale` is valid
  if (!locales.includes(locale)) {
    <></>;
  }

  return (
    <html lang={locale} translate="no">
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
      <meta name="google" content="notranslate"></meta>
      <body className={`antialiased`}>{children}</body>
    </html>
  );
}
