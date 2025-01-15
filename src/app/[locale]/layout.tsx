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
import Favicon from "./favicon.ico";
import { getMessages } from "next-intl/server";
import { NextIntlClientProvider } from "next-intl";
import AppProviders from "./AppProviders";
import Cannonical from "./canonical";

export const metadata: Metadata = {
  title: "Fushion AI - Innovating Real Estate with AI Precision",
  description: "Transform real estate with the power of data",
  keywords: [
    "Fushion",
    "AI",
    "FushionAI",
    "fushion ai",
    "ai real estate",
    "fushion ai real estate",
    "real estate",
  ],
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
  const messages = await getMessages();
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
        {/* <title>Fushion AI</title>
        <meta
          name="description"
          content="Transform real estate with the power of data"
        /> */}
        <link rel="icon" href="/favicon.ico" type="image/x-icon"></link>
        <Cannonical /> 
      </head>
      <meta name="google" content="notranslate"></meta>
      <body className={`antialiased`}>
        {/* <NextUIProvider>
          <Provider store={store}>
            <LanguageProvider>
              <ToastContainer />
              <div className="w-full min-h-[100vh] h-auto">
                {children}
                <CookieConsent />
              </div>
              <Footer />
            </LanguageProvider>
          </Provider>
        </NextUIProvider> */}
        <NextIntlClientProvider messages={messages}>
          <AppProviders>
            {children}
            <Footer />
          </AppProviders>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
