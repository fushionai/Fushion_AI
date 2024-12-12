// check if token is expired or not
import jwt from "jsonwebtoken";

export function isTokenExpired() {
  const token: any = localStorage.getItem("token");

  // Decode the token without verifying the signature
  const decoded = jwt.decode(token);

  // Ensure that the token contains the 'exp' claim
  if (!decoded || typeof decoded === "string" || !decoded.exp) {
    throw new Error("Invalid token or missing expiration claim");
  }

  // Get current time in seconds
  const currentTime = Math.floor(Date.now() / 1000);

  // Compare the expiration time with the current time
  if (decoded.exp < currentTime) {
    return true; // Token is expired
  }
  return false; // Token is not expired
}
