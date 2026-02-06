"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { MdLiveTv } from "react-icons/md";
import Authentication from "./Authentication";
import { useAuthContext } from "../provider";
import Image from "next/image";
import Link from "next/link";
import { useTheme } from "next-themes";
import { Sun, Moon } from "lucide-react";

export default function Header() {
  const { user } = useAuthContext();
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <header className="sticky top-0 z-50 backdrop-blur-3xl">
      <div className="max-w-6xl mx-auto px-4">
        <div className="p-2 flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <MdLiveTv size={40} />
            <h2 className="text-2xl font-bold whitespace-nowrap">VidNova</h2>
          </div>

          {/* Right section */}
          <div className="flex items-center space-x-4">
            {!user ? (
              <Authentication>
                <Button>Get Started</Button>
              </Authentication>
            ) : (
              <div className="flex items-center gap-3">
                <Link href="/dashboard">
                  <Button>Dashboard</Button>
                </Link>

                {user.photoURL && (
                  <Image
                    src={user.photoURL}
                    alt="user-image"
                    width={40}
                    height={40}
                    className="rounded-full"
                  />
                )}
              </div>
            )}

            {/* Theme toggle (render only after mount) */}
            {mounted && (
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              >
                {theme === "dark" ? (
                  <Sun className="h-5 w-5" />
                ) : (
                  <Moon className="h-5 w-5" />
                )}
              </Button>
            )}
          </div>
        </div>
      </div>

      <Separator className="w-full" />
    </header>
  );
}
