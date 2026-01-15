"use client"

import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar"
import {
  DropdownMenu,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"
import { capitalize } from "@/lib/capitalize"
import { getInitials } from "@/lib/formatters"
import { IProfile } from "@/types/user.interface"

interface NavUserProps {
  userInfo: IProfile;
}

export function NavUser({
  userInfo,
}: NavUserProps) {

  return (
    <SidebarMenu>
      <SidebarMenuItem>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <SidebarMenuButton
              size="lg"
              className="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground"
            >
              <Avatar className="h-8 w-8 rounded-lg">
                <AvatarImage src={userInfo?.profilePhoto} alt={userInfo?.user.fullName} className="object-cover" />
                <AvatarFallback className="rounded-lg font-semibold">{getInitials(userInfo?.user.fullName)}</AvatarFallback>
              </Avatar>
              <div className="grid flex-1 text-left text-sm leading-tight">
                <span className="truncate font-medium">{userInfo?.user.fullName}</span>
                <span className="text-muted-foreground truncate text-xs">
                  {capitalize(userInfo?.user.role)}
                </span>
              </div>
            </SidebarMenuButton>
          </DropdownMenuTrigger>
        </DropdownMenu>
      </SidebarMenuItem>
    </SidebarMenu>
  )
}
