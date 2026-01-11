"use client";

import {
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { getIconComponent } from "@/lib/icon-mapper";
import { cn } from "@/lib/utils";
import { NavSection } from "@/types/dashboard.interface";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface NavMainProps {
  sections: NavSection[];
}

export function NavMain({ sections }: NavMainProps) {
  const pathname = usePathname();

  const isActive = (href: string) =>
    href === "/dashboard" ? pathname === href : pathname.startsWith(href);

  return (
    <div className="flex flex-col">
      {sections.map((section, i) => (
        <SidebarGroup key={i}>
          {/* Section title */}
          {section.title && (
            <div className="px-4 py-2 text-sm font-medium text-muted-foreground">
              {section.title.toUpperCase()}
            </div>
          )}

          <SidebarGroupContent className="flex flex-col gap-1">
            <SidebarMenu>
              {section.items.map((item) => {
                const active = isActive(item.href);
                const Icon = getIconComponent(item.icon);

                return (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton
                      asChild
                      tooltip={item.title}
                      className={cn(
                        "relative transition-all duration-200",
                        "hover:bg-sidebar-accent hover:text-sidebar-accent-foreground",
                        active &&
                        "bg-sidebar-accent text-primary font-medium before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:h-6 before:w-1 before:rounded-r before:bg-primary"
                      )}
                    >
                      <Link
                        href={item.href}
                        className="flex items-center gap-3 px-4 py-2"
                      >
                        {Icon && <Icon className="h-4 w-4" />}
                        <span className="font-medium text-sm">{item.title}</span>
                        {item.badge && (
                          <span className="ml-auto rounded-full bg-red-500 px-2 py-0.5 text-xs text-white">
                            {item.badge}
                          </span>
                        )}
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                );
              })}
            </SidebarMenu>
          </SidebarGroupContent>

          {/* Simple separator between sections */}
          {i !== sections.length - 1 && (
            <hr className="mx-4 my-2 border-t border-muted-foreground/30" />
          )}
        </SidebarGroup>
      ))}
    </div>
  );
}
