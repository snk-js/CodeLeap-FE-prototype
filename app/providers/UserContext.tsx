"use client";

import React, {
  createContext,
  useContext,
  useState,
  ReactNode,
  useEffect,
  useEffectEvent,
} from "react";
import { useRouter } from "next/navigation";

interface UserContextType {
  username: string;
  setUsername: (username: string) => void;
  logout: () => void;
  login: (username: string) => void;
  error: string;
  isHydrated: boolean;
}

const UserContext = createContext<UserContextType | undefined>(undefined);

export const UserProvider = ({ children }: { children: ReactNode }) => {
  const router = useRouter();
  const [username, setUsernameState] = useState("");
  const [error, setError] = useState("");
  const [isHydrated, setIsHydrated] = useState(false);

  // won't trigger the Effect to re-run
  const onInitialize = useEffectEvent((storedUsername: string | null) => {
    if (storedUsername) {
      setUsernameState(storedUsername);
    } else {
      router.push("/signup");
    }
    setIsHydrated(true);
  });

  const setUsername = (newUsername: string) => {
    setUsernameState(newUsername);
    if (typeof window !== "undefined") {
      if (newUsername) {
        localStorage.setItem("username", newUsername);
      } else {
        localStorage.removeItem("username");
      }
    }
  };

  const logout = () => {
    setUsername("");
    router.push("/signup");
  };

  const login = (username: string) => {
    if (!username.trim()) {
      setError("Username is required");
      return;
    }
    setUsername(username.trim());
    setError("");
    router.push("/");
  };

  useEffect(() => {
    // 2. Access the latest values inside the Effect Event
    const storedUsername = localStorage.getItem("username");
    onInitialize(storedUsername);

    // 3. Dependency array is now empty (or strictly reactive values only)
    // We don't need 'router' here because 'onInitialize' is non-reactive
  }, []);

  return (
    <UserContext.Provider
      value={{ username, setUsername, logout, login, error, isHydrated }}
    >
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => {
  const context = useContext(UserContext);
  if (context === undefined) {
    throw new Error("useUser must be used within a UserProvider");
  }
  return context;
};
