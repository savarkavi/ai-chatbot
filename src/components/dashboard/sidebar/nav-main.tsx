"use client";

import {
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import Image from "next/image";
import { usePathname } from "next/navigation";

interface NavMainProps {
  items: {
    title: string;
    url: string;
    isActive: boolean;
    icon: string;
  }[];
}

export function NavMain({ items }: NavMainProps) {
  const pathname = usePathname();

  return (
    <SidebarGroup>
      <SidebarGroupLabel>Main</SidebarGroupLabel>
      <SidebarGroupContent>
        <SidebarMenu>
          {items.map((item) => {
            return (
              <SidebarMenuItem key={item.title}>
                <SidebarMenuButton
                  asChild
                  isActive={
                    item.url === "/dashboard"
                      ? pathname === item.url
                      : pathname === item.url ||
                        pathname.startsWith(item.url + "/")
                  }
                  className="data-active:bg-sidebar-primary/10 data-active:hover:bg-sidebar-primary/10 data-active:hover:text-sidebar-primary data-active:text-sidebar-primary data-active:border-sidebar-primary py-5 data-active:border"
                >
                  <a href={item.url}>
                    <Image
                      src={item.icon}
                      alt="Icon by Freepik - Flaticon"
                      width={18}
                      height={18}
                      className="mr-2"
                    />
                    {item.title}
                  </a>
                </SidebarMenuButton>
              </SidebarMenuItem>
            );
          })}
        </SidebarMenu>
      </SidebarGroupContent>
    </SidebarGroup>
  );
}
