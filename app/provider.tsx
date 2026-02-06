"use client";

import React, { useContext, useEffect, useState } from "react";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { onAuthStateChanged, User } from "firebase/auth";
import { auth } from "@/config/firebase";
import { AuthContext, AuthContextType } from "@/_context/AuthContext";

const Provider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (firebaseUser) => {
      setUser(firebaseUser);
      console.log("User:", firebaseUser);
    });

    return () => unsubscribe();
  }, []);

  const value: AuthContextType = { user };

  return (
    <AuthContext.Provider value={value}>
      <NextThemesProvider
        attribute="class"
        defaultTheme="light"
        enableSystem={false}
        disableTransitionOnChange
      >
        {children}
      </NextThemesProvider>
    </AuthContext.Provider>
  );
};

export const useAuthContext = (): AuthContextType => {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error("useAuthContext must be used inside Provider");
  }

  return context;
};

export default Provider;
