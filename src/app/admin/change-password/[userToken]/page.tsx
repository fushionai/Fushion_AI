"use client";

import { useState } from "react";
import { Button, Link, Card, CardBody, CardHeader } from "@nextui-org/react";
import { changePassword } from "@/lib/api";
import { toast } from "react-toastify";

export default function ChangePassword({ params }: any) {
  const [formState, setFormState] = useState({
    newPassword: "",
    confirmPassword: "",
  });
  const [isLoading, setIsLoading] = useState(false);

  const [errorMessages, setErrorMessages] = useState({
    newPassword: "",
    confirmPassword: "",
  });

  const validateForm = () => {
    let isValid = true;
    const errors = {
      newPassword: "",
      confirmPassword: "",
    };
    if (!formState.newPassword) {
      errors.newPassword = "Password is required";
      isValid = false;
    }

    if (
      formState?.newPassword?.length < 6 ||
      formState?.newPassword?.length > 12
    ) {
      errors.newPassword = "Password must be between 6 and 12 characters long";
      isValid = false;
    }

    if (!formState.confirmPassword) {
      errors.confirmPassword = "Password is required";
      isValid = false;
    }

    if (formState.confirmPassword != formState?.newPassword) {
      errors.confirmPassword = "Password didnt match";
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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (validateForm()) {
      try {
        setIsLoading(true);
        const response = await changePassword({
          token: params?.userToken,
          password: formState.newPassword,
        });
        setFormState({
          newPassword: "",
          confirmPassword: "",
        });
        toast.success(response?.message);
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
      } catch (error) {
        toast.error("something went wrong, please try again");
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
            Change Password
          </h1>
        </CardHeader>
        <CardBody>
          <form onSubmit={handleSubmit} className="flex flex-col gap-3">
            <div className="flex flex-col gap-2">
              <input
                className="border-1 border-gray-300 rounded-md p-2 text-black"
                type="text"
                placeholder="New password"
                name="newPassword"
                value={formState?.newPassword}
                onChange={handleInputChange}
                required
              />
              {errorMessages?.newPassword && (
                <div className="text-sm text-red-500">
                  {errorMessages?.newPassword}
                </div>
              )}
            </div>

            <div className="flex flex-col gap-2">
              <input
                className="border-1 border-gray-300 rounded-md p-2 text-black"
                type="text"
                placeholder="Confirm password"
                name="confirmPassword"
                value={formState?.confirmPassword}
                onChange={handleInputChange}
              />

              {errorMessages?.confirmPassword && (
                <div className="text-sm text-red-500">
                  {errorMessages?.confirmPassword}
                </div>
              )}
            </div>

            <Button
              disabled={isLoading}
              type="submit"
              color="primary"
              className={`w-full ${isLoading ? "opacity-50" : ""}`}
            >
              {isLoading ? "reseting" : " Reset Password"}
            </Button>
          </form>

          <div className="mt-4 text-center">
            <Link href="/admin/login" color="primary">
              Back to Login
            </Link>
          </div>
        </CardBody>
      </Card>
    </div>
  );
}
