import { AppSidebar } from "@/components/dashboard/sidebar/app-sidebar";
import { SidebarProvider } from "@/components/ui/sidebar";
import { TooltipProvider } from "@/components/ui/tooltip";
import { ReactNode } from "react";

const DashboardLayout = ({ children }: { children: ReactNode }) => {
  return (
    <main>
      <SidebarProvider>
        <TooltipProvider>
          <AppSidebar />
          {children}
        </TooltipProvider>
      </SidebarProvider>
    </main>
  );
};

export default DashboardLayout;
