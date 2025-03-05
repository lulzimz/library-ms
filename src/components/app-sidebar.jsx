import { NavMain } from "@/components/nav-main";
import { NavUser } from "@/components/nav-user";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from "@/components/ui/sidebar";
import { SidebarCard } from "@/customComponents";
import { ModeToggle } from "./mode-toggle";

export function AppSidebar({ menuItems, ...props }) {
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <ModeToggle />

        <NavUser />
      </SidebarHeader>

      <SidebarContent>
        <NavMain items={menuItems} />
      </SidebarContent>

      <SidebarFooter>
        <SidebarCard />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
}
