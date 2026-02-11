"use client";
import React, { useContext, useEffect, useState } from "react";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { onAuthStateChanged, User } from "firebase/auth";
import { auth } from "@/config/firebase";
import { AuthContext, AuthContextType } from "@/_context/AuthContext";
import { useMutation, useQuery } from "convex/react";
import { api } from "@/convex/_generated/api";
const Provider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const createUser = useMutation(api.users.createNewUser);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (!user) {
        setUser(null);
        return;
      }
      console.log("User logged in:", user);

      if(user){
        const result = await createUser({
          name: user?.displayName || "",
          email: user?.email || "",
          pictureUrl: user?.photoURL || "",
        });
        console.log(result);
        setUser(result);
      }
    });
    return () => unsubscribe();
  }, []);
  const value: AuthContextType = { user };

  return (
    <AuthContext.Provider value={value}>
      {" "}
      <NextThemesProvider
        attribute="class"
        defaultTheme="light"
        enableSystem={false}
        disableTransitionOnChange
      >
        {" "}
        {children}{" "}
      </NextThemesProvider>{" "}
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
