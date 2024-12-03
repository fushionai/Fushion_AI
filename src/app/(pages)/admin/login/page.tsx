"use client";

import { useState } from "react";
import {
  Input,
  Button,
  Link,
  Card,
  CardBody,
  CardHeader,
} from "@nextui-org/react";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Sumeya will add the logic here
    console.log("Login attempt with:", email, password);
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 p-4">
      <Link href="/" className="absolute left-5 top-5">
        <Button> Back To Home</Button>
      </Link>
      <Card className="w-full max-w-md">
        <CardHeader className="flex flex-col items-center pb-0 pt-6">
          <h1 className="text-3xl font-bold text-primaryBlack">admin Login</h1>
        </CardHeader>
        <CardBody>
          <form onSubmit={handleLogin} className="space-y-4">
            <Input
              type="email"
              label="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <Input
              type="password"
              label="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <Button type="submit" color="primary" className="w-full">
              Log in
            </Button>
          </form>
          <div className="mt-4 text-center">
            <Link href="/forgot-password" color="primary">
              Forgot password?
            </Link>
          </div>
        </CardBody>
      </Card>
    </div>
  );
}
