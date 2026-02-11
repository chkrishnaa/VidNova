"use client";
import { useAuthContext } from "@/app/provider";
import { SidebarTrigger } from "@/components/ui/sidebar";
import Image from "next/image";
import { useTheme } from "next-themes";
import React, { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Moon, Sun } from "lucide-react";

function AppHeader() {
  const { user } = useAuthContext();
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className="p-3 flex justify-between items-center">
      <SidebarTrigger className="scale-150" />

      <div className="flex items-center gap-3">
        {user?.pictureUrl && (
          <Image
            src={user?.pictureUrl}
            alt="user"
            width={40}
            height={40}
            className="rounded-full"
          />
        )}

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
  );
}

export default AppHeader;
