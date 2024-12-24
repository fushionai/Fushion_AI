// hooks/useAuth.js

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useToken } from "@/context/TokenContext";

const useAuth = () => {
  const router = useRouter();
  const { token } = useToken();

  useEffect(() => {
    if (!token || isTokenExpired(token)) {
      router.push("/admin/login"); // Redirect to login page if no token or token expired
    }
  }, [router, token]);

  const isTokenExpired = (token: string) => {
    try {
      const decoded = JSON.parse(atob(token.split(".")[1])); // Decode JWT token
      const expirationTime = decoded.exp * 1000; // Expiry is in seconds, convert to milliseconds
      return Date.now() > expirationTime; // Check if token has expired
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (error) {
      return true; // If the token is invalid, consider it expired
    }
  };
};

export default useAuth;
