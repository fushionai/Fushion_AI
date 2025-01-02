"use client";

import { NextUIProvider } from "@nextui-org/react";
import { Provider } from "react-redux";
import { store } from "@/redux/store";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { CookieConsent } from "@/components/cookie-consent";

export default function AppProviders({ children }: { children: React.ReactNode }) {
  return (
    <NextUIProvider>
      <Provider store={store}>
        <ToastContainer />
        <div className="w-full min-h-[100vh] h-auto">
          {children}
          <CookieConsent />
        </div>
      </Provider>
    </NextUIProvider>
  );
}
