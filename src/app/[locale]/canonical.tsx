"use client";

import "react-toastify/dist/ReactToastify.css";
import { usePathname } from "next/navigation";

export default function Cannonical() {
  const baseUrl = "https://www.fushionai.com"; 
  const pathname = usePathname();
  const filteredPathname = pathname?.replace("en/", "").replace("nl/", "").replace("/nl", "").replace("/en", "");

  return <link rel="canonical" href={baseUrl + filteredPathname} />;
}
