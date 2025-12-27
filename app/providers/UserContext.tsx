"use client";

import React, {
  createContext,
  useContext,
  useEffect,
  useState,
  ReactNode,
} from "react";
import { useRouter } from "next/navigation";

interface UserContextType {
  username?: string;
  setUsername: (username: string) => void;
  logout: () => void;
}

const UserContext = createContext<UserContextType | undefined>(undefined);

export const UserProvider = ({ children }: { children: ReactNode }) => {
  const router = useRouter();

  const getUsernameFromLocalStorage = (() => {
    if (typeof window !== "undefined") {
      return localStorage.getItem("username") || "";
    }
  })();

  const [username, setUsernameState] = useState(() => {
    return getUsernameFromLocalStorage;
  });

  const setUsername = (newUsername: string) => {
    setUsernameState(newUsername);

    if (typeof window !== "undefined") {
      if (newUsername) {
        localStorage.setItem("username", newUsername);
      } else {
        localStorage.removeItem("username");
      }

      window.dispatchEvent(
        new CustomEvent("localStorageUpdate", {
          detail: { key: "username", value: newUsername },
        })
      );
    }
  };

  const logout = () => {
    setUsername("");
    if (typeof window !== "undefined") {
      localStorage.removeItem("username");
      router.push("/signup");
    }
  };

  useEffect(() => {
    setUsernameState(getUsernameFromLocalStorage);
  }, [getUsernameFromLocalStorage]);

  return (
    <UserContext.Provider value={{ username, setUsername, logout }}>
      {children}
    </UserContext.Provider>
  );
};

// Custom hook to use the UserContext
export const useUser = () => {
  const context = useContext(UserContext);
  if (context === undefined) {
    throw new Error("useUser must be used within a UserProvider");
  }
  return context;
};
