import { redirect } from "next/navigation";

const Admin = () => {
  // If the admin is not logged in, redirect to the login page
  // otherwise, render the contact data page
  redirect("/admin/login");
};

export default Admin;