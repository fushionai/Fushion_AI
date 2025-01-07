"use client";

import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { Button, Link, Card, CardBody, CardHeader } from "@nextui-org/react";
import { authSelector } from "@/redux/store";
import { login } from "@/redux/auth/authSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { toast } from "react-toastify";
import { isTokenExpired } from "@/utils/checkToken";
import { redirect } from "next/navigation";
import { Eye, EyeOff } from "lucide-react";

const LoginPage = () => {
  React.useLayoutEffect(() => {
    const token = localStorage.getItem("token");
    if (token && !isTokenExpired()) {
      redirect("/en/admin/contacts-data");
    }
  }, []);

  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const { isLoading } = useAppSelector(authSelector);
  const dispatch = useAppDispatch();

  const router = useRouter();
  const [responseError, setResponseError] = useState(false);
  const [responseErrorMessage, setResponseErrorMessage] = useState("");

  const [formState, setFormState] = useState({
    email: "",
    password: "",
  });

  const [errorMessages, setErrorMessages] = useState({
    email: "",
    password: "",
  });

  React.useEffect(() => {
    const timerId = setTimeout(() => {
      setResponseError(false);
    }, 2000);
    return () => clearTimeout(timerId);
  }, [responseError]);

  const validateForm = () => {
    let isValid = true;
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const errors = {
      email: "",
      password: "",
    };
    if (!formState.email) {
      errors.email = "Email is required";
      isValid = false;
    } else if (!emailPattern.test(formState.email)) {
      errors.email = "Please enter a valid email address";
      isValid = false;
    }

    if (!formState.password) {
      errors.password = "Password is required";
      isValid = false;
    }

    setErrorMessages(errors);
    return isValid;
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();

    if (validateForm()) {
      try {
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const response = await dispatch(login(formState));
        if (response.meta.requestStatus === "rejected") {
          throw new Error("Invalid credentials");
        }
        router.push("/en/admin/contacts-data");
        toast.success("user have successfully logged in");
        setFormState({
          email: "",
          password: "",
        });
      } catch (error: any) {
        setResponseError(true);
        const errorMessage =
          error?.response?.data?.error ||
          error?.message ||
          "An error occurred during login.";
        setResponseError(true);
        setResponseErrorMessage(errorMessage);
        toast.error("Invalid email or password");
      }
    }
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 p-4">
      <Link href="/" className="absolute left-5 top-5">
        <Button> Back To Home</Button>
      </Link>
      <Card className="w-full max-w-md">
        <CardHeader className="flex flex-col items-center pb-0 pt-6 gap-3">
          {responseError && (
            <span className="text-red-600">{responseErrorMessage}</span>
          )}
          <h1 className="text-3xl font-bold text-primaryBlack">admin Login</h1>
        </CardHeader>
        <CardBody>
          <form onSubmit={handleLogin} className="space-y-4">
            <div className="flex flex-col gap-2">
              <input
                // type="email"
                placeholder="Email"
                value={formState?.email}
                name="email"
                onChange={handleInputChange}
                className="w-full text-black px-3 py-2 border border-gray-300 rounded-[3px] shadow-sm focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 placeholder:font-roboto placeholder:text-[#77818A] placeholder:text-[18px]"
              />

              {errorMessages.email && (
                <div className="text-sm text-red-500">
                  {errorMessages.email}
                </div>
              )}
            </div>
            <div className="flex flex-col gap-2">
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Password"
                  name="password"
                  value={formState?.password}
                  onChange={handleInputChange}
                  className="w-full text-black px-3 py-2 border border-gray-300 rounded-[3px] shadow-sm focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 placeholder:font-roboto placeholder:text-[#77818A] placeholder:text-[18px] pr-10"
                />
                <button
                  type="button"
                  onClick={togglePasswordVisibility}
                  className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400 hover:text-gray-600"
                >
                  {showPassword ? (
                    <EyeOff className="h-5 w-5" aria-hidden="true" />
                  ) : (
                    <Eye className="h-5 w-5" aria-hidden="true" />
                  )}
                  <span className="sr-only">
                    {showPassword ? "Hide password" : "Show password"}
                  </span>
                </button>
              </div>
              {errorMessages.password && (
                <div className="text-sm text-red-500">
                  {errorMessages.password}
                </div>
              )}
            </div>
            <Button
              type="submit"
              color="primary"
              disabled={isLoading}
              className={`w-full ${isLoading ? "opacity-50" : ""}`}
            >
              {isLoading ? "Logging In..." : "Login"}
            </Button>
          </form>
          <div className="mt-4 text-center">
            <Link href="/en/admin/forgot-password" color="primary">
              Forgot password?
            </Link>
          </div>
        </CardBody>
      </Card>
    </div>
  );
};

export default LoginPage;
