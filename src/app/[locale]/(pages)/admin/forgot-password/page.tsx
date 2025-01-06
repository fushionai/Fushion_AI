"use client";

import { useState } from "react";
import { Button, Link, Card, CardBody, CardHeader } from "@nextui-org/react";
import { ForgetPassword } from "@/lib/api";
import { toast } from "react-toastify";

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState("");
  const [errorMessages, setErrorMessages] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const validateForm = () => {
    let isValid = true;
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    let error;
    if (!email) {
      error = "Email is required";
      isValid = false;
    } else if (!emailPattern.test(email)) {
      error = "Please enter a valid email address";
      isValid = false;
    }
    setErrorMessages(error || "");
    return isValid;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      setIsLoading(true);
      try {
        setIsLoading(true);
        const response = await ForgetPassword(email);
        setEmail("");
        toast.success(response.message);
        setIsLoading(false);
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
      } catch (error) {
        setIsLoading(false);
        toast.error("Email not found, please try again");
      }
    }
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 p-4">
      <Link href="/" className="absolute left-5 top-5">
        <Button> Back To Home</Button>
      </Link>
      <Card className="w-full max-w-md">
        <CardHeader className="flex flex-col items-center pb-0 pt-6">
          <h1 className="text-3xl font-bold text-primaryBlack">
            Forgot Password
          </h1>
        </CardHeader>
        <CardBody>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="flex flex-col gap-2">
              <input
                type="email"
                placeholder="Email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="border-1 border-gray-300 rounded-md p-2 text-black"
              />
              {errorMessages && (
                <div className="text-sm text-red-500">{errorMessages}</div>
              )}
            </div>
            <Button
              type="submit"
              disabled={isLoading}
              color="primary"
              className={`w-full ${isLoading ? "opacity-50" : ""}`}
            >
              {isLoading ? "Sending email" : "Reset Password"}
            </Button>
          </form>

          <div className="mt-4 text-center">
            <Link href="/en/admin/login" color="primary">
              Back to Login
            </Link>
          </div>
        </CardBody>
      </Card>
    </div>
  );
}
