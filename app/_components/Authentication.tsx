"use client";

import React from "react";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "@/config/firebase";

interface AuthenticationProps {
  children: React.ReactNode;
}

function Authentication({ children }: AuthenticationProps) {
  const provider = new GoogleAuthProvider();

  const onSignIn = async () => {
    try {
      const result = await signInWithPopup(auth, provider);

      const credential = GoogleAuthProvider.credentialFromResult(result);

      const token = credential?.accessToken;
      const user = result.user;

      console.log("User:", user);
      console.log("Token:", token);
     } catch (error: unknown) {
  if (
    error instanceof Error &&
    "code" in error &&
    error.code === "auth/popup-closed-by-user"
  ) {
    console.log("User closed the login popup");
    return;
  }

  console.error("Auth error:", error);
}

  };

  return (
    <div onClick={onSignIn} className="cursor-pointer">
      {children}
    </div>
  );
}

export default Authentication;
