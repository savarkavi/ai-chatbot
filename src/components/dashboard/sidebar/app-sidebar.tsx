"use client";

import * as React from "react";

import { NavMain } from "@/components/dashboard/sidebar/nav-main";
import { NavConfigure } from "@/components/dashboard/sidebar/nav-configure";
import { NavUser } from "@/components/dashboard/sidebar/nav-user";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from "@/components/ui/sidebar";

import Image from "next/image";
import { Separator } from "@/components/ui/separator";
import { dashboardSidebarData } from "@/lib/constants";

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <div className="flex items-center gap-2 p-3">
          <div className="relative h-5 w-5">
            <Image src="/logo.svg" alt="logo" fill className="object-cover" />
          </div>
          <p className="text-xl">
            Smart<span className="text-primary font-bold">Voxly</span>
          </p>
        </div>
      </SidebarHeader>
      <Separator />
      <SidebarContent>
        <NavMain items={dashboardSidebarData.navMain} />
        <NavConfigure items={dashboardSidebarData.navConfigure} />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={dashboardSidebarData.user} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
}
