"use client";

import { useState, useEffect } from "react";
import { Button } from "@nextui-org/button";
import { Link } from "@nextui-org/link";
import { setCookie, getCookie } from "cookies-next";
import { useLocale } from "next-intl";

export function CookieConsent() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Check if user has already accepted cookies
    const hasAccepted = getCookie("cookie-consent");
    if (!hasAccepted) {
      setIsVisible(true);
    }
  }, []);

  const handleAccept = (type: "all") => {
    setCookie("cookie-consent", type, {
      maxAge: 60 * 60 * 24 * 365, // 1 year
      path: "/",
    });
    setIsVisible(false);
  };

  if (!isVisible) return null;

  const locale = useLocale();

  const downloadPdf = (filename: string) => {
    const pdfUrl = `/${filename}-${locale}.pdf`;
    const link = document.createElement("a");
    link.href = pdfUrl;
    link.download = `${filename}-${locale}.pdf`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="fixed bottom-0 left-0 right-0 p-4  z-50">
      <div className="bg-white max-w-7xl mx-auto rounded-2xl border md:p-6 p-4 py-7 bg-background">
        <div className="space-y-4">
          <h2 className="text-2xl font-bold">Cookies</h2>
          <p className="text-default-500 md:pr-20 text-lg">
            We use cookies to enhance your experience, personalize content,
            analyze site traffic, and provide social media features. Cookies
            help us understand how you interact with our website, allowing us to
            improve its functionality. All cookies are accepted by default.
          </p>
          <div className="flex items-center justify-between">
            <div className="flex flex-wrap gap-2">
              {/* <Link
                href={downloadPdf("Privacy-Policy")}
                color="secondary"
                className="text-sm font-medium" */}
              {/* > */}
              <button
                onClick={() => downloadPdf("Privacy-Policy")}
                className="text-sm font-medium text-secondary"
              >
                Privacy policy
              </button>

              {/* </Link> */}
              {/* <Link
                href={downloadPdf("Cookie-Policy")}
                color="secondary" */}
              <button
                onClick={() => downloadPdf("Cookie-Policy")}
                className="text-sm font-medium text-secondary"
              >
                Terms of use
                {/* </Link> */}
              </button>
            </div>
            <div className="flex flex-wrap gap-2 items-center justify-end">
              <Button
                className="text-base rounded-full text-white font-medium px-10"
                color="secondary"
                onPress={() => handleAccept("all")}
              >
                Accept
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
