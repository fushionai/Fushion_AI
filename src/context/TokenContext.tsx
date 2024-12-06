// context/TokenContext.tsx
import {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from "react";

// Define the types for your context
interface TokenContextType {
  token: string | null;
  saveToken: (newToken: string) => void;
  removeToken: () => void;
}

// Create the context with a default value of 'undefined'
const TokenContext = createContext<TokenContextType | undefined>(undefined);

// Custom hook to consume the context
export const useToken = () => {
  const context = useContext(TokenContext);
  if (!context) {
    throw new Error("useToken must be used within a TokenProvider");
  }
  return context;
};

// TokenProvider component to wrap your app and provide context values
export const TokenProvider = ({ children }: { children: ReactNode }) => {
  const [token, setToken] = useState<string | null>(null);

  // Load token from localStorage if available
  useEffect(() => {
    const storedToken = localStorage.getItem("authToken");
    if (storedToken) {
      setToken(storedToken);
    }
  }, []);

  // Function to set the token and store it in localStorage
  const saveToken = (newToken: string) => {
    setToken(newToken);
    localStorage.setItem("authToken", newToken);
  };

  // Function to remove the token and clear localStorage
  const removeToken = () => {
    setToken(null);
    localStorage.removeItem("authToken");
  };

  return (
    <TokenContext.Provider value={{ token, saveToken, removeToken }}>
      {children}
    </TokenContext.Provider>
  );
};
