"use client";
import { Button } from "@/components/ui/button";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import {
  Gem,
  HomeIcon,
  LucideFileVideo,
  Search,
  WalletCards,
} from "lucide-react";
import { MdLiveTv } from "react-icons/md";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useAuthContext } from "@/app/provider";
export function AppSidebar() {
  const MenuItems = [
    { title: "Home", url: "/", icon: HomeIcon },
    {
      title: "Create New Video",
      url: "/create-new-video",
      icon: LucideFileVideo,
    },
    { title: "Explore", url: "/explore", icon: Search },
    { title: "Billing", url: "/billing", icon: WalletCards },
  ];

  const path = usePathname();
  const { user } = useAuthContext();
  return (
    <Sidebar>
      <SidebarHeader>
        <div className="">
          <div className="flex justify-center items-center gap-2 w-full mt-2">
            <MdLiveTv className="w-8 h-8" />
            <h2 className="text-2xl font-bold">VidNova</h2>
          </div>
          <h2 className="text-lg text-foreground/50 text-center mt-3">
            AI Short Video Generator
          </h2>
        </div>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup></SidebarGroup>
        <SidebarGroup>
          <SidebarGroupContent>
            <div className="mx-2 mb-10">
              <Button className="w-full">+ Create new Video</Button>
            </div>{" "}
            <SidebarMenu className="space-y-1">
              {MenuItems.map((item, i) => (
                <SidebarMenuItem key={i} className="mx-2">
                  <SidebarMenuButton
                    isActive={path == item.url}
                    variant={"outline"}
                    className="w-full py-5 border"
                  >
                    <Link
                      href={item.url}
                      className="flex items-center gap-4 p-3"
                    >
                      <item.icon /> <span>{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter>
        <div className="p-5 border rounded-lg bg-foreground/5">
          <div className="flex items-center justify-between">
            <Gem /> <h2>{user?.credits} Credits Left</h2>
          </div>
          <Button className="w-full mt-3">Buy More Credits</Button>
        </div>
      </SidebarFooter>
    </Sidebar>
  );
}
