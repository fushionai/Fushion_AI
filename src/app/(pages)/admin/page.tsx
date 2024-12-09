"use client";

import LoadingScreen from "@/components/LoadingScreen";
import { isTokenExpired } from "@/utils/checkToken";
import { redirect } from "next/navigation";
import { useLayoutEffect } from "react";
import LoginPage from "./login/page";

const Admin = () => {
  // If the admin is not logged in, redirect to the login page
  // otherwise, render the contact data page

  useLayoutEffect(() => {
    const token = localStorage.getItem("token");
    if (token && !isTokenExpired) {
      redirect("/admin/contacts-data");
    }
  });

  return <LoginPage />;
};

export default Admin;
