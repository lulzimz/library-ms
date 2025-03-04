import { Collapsible, CollapsibleTrigger } from "@/components/ui/collapsible";
import {
  SidebarGroup,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { usePathname } from "@/hooks/usePathname";
import { useNavigate } from "react-router-dom";

export function NavMain({ items }) {
  const navigate = useNavigate();
  const { routeId: routeIdPath } = usePathname();

  return (
    <SidebarGroup>
      <SidebarMenu>
        {items.map(({ routeId, title, url, icon: Icon }) => {
          const isActive = routeIdPath === routeId;

          return (
            <Collapsible key={title} defaultOpen={isActive}>
              <SidebarMenuItem>
                <CollapsibleTrigger asChild>
                  <SidebarMenuButton
                    tooltip={title}
                    onClick={() => navigate(url)}
                    style={
                      isActive
                        ? { backgroundColor: "var(--sidebar-accent)" }
                        : {}
                    }
                  >
                    {Icon && <Icon />}
                    <span>{title}</span>
                  </SidebarMenuButton>
                </CollapsibleTrigger>
              </SidebarMenuItem>
            </Collapsible>
          );
        })}
      </SidebarMenu>
    </SidebarGroup>
  );
}
