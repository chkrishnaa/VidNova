"use client";
import React, { useContext, useEffect, useState } from "react";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "@/config/firebase";
import { AuthContext, AuthContextType } from "@/_context/AuthContext";
import { useMutation } from "convex/react";
import { api } from "@/convex/_generated/api";
import { Doc } from "@/convex/_generated/dataModel";

const Provider = ({ children }: { children: React.ReactNode }) => {
  // ✅ State must be Convex user
  const [user, setUser] = useState<Doc<"users"> | null>(null);

  const createUser = useMutation(api.users.createNewUser);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (firebaseUser) => {
      if (!firebaseUser) {
        setUser(null);
        return;
      }

      const result = await createUser({
        name: firebaseUser.displayName || "",
        email: firebaseUser.email || "",
        pictureUrl: firebaseUser.photoURL || "",
      });

      // ✅ Save Convex user
      setUser(result);
    });

    return () => unsubscribe();
  }, []);

  const value: AuthContextType = {
    user,
  };

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
