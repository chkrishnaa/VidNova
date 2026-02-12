import { createContext } from "react";
import { Doc } from "@/convex/_generated/dataModel";

export type AuthContextType = {
  user: Doc<"users"> | null;
};

export const AuthContext = createContext<AuthContextType | null>(null);
