"use client";
import { SidebarProvider } from "@/components/ui/sidebar";
import { AppSidebar } from "./_components/AppSidebar";
import AppHeader from "./_components/AppHeader";
import React, { useEffect } from "react";
import { useAuthContext } from "../provider";
import { useRouter } from "next/navigation";

function DashboardProvider({ children }: { children: React.ReactNode }) {
  const { user } = useAuthContext();
  const router = useRouter();

  useEffect(() => {
    user && ChecUserAuthenticated();
  }, [user]);

  const ChecUserAuthenticated = () => {
    if (!user) {
      router.replace("/");
    }
  };
  return (
    <SidebarProvider>
      <AppSidebar />

      <div className="w-full">
        <AppHeader />
        <div className="p-10">{children}</div>
      </div>
    </SidebarProvider>
  );
}

export default DashboardProvider;
