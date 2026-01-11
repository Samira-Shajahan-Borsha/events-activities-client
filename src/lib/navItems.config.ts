// lib/nav-config.ts
import { NavSection } from "@/types/dashboard.interface";
import { getDefaultDashboardRoute, UserRole } from "./auth-utils";

export const getCommonNavItems = (role: UserRole): NavSection[] => {
    const defaultDashboard = getDefaultDashboardRoute(role);

    return [
        {
            items: [
                {
                    title: "Dashboard",
                    href: defaultDashboard,
                    icon: "LayoutDashboard",
                    roles: ["ADMIN", "HOST", "USER"],
                },
                {
                    title: "My Profile",
                    href: "/my-profile",
                    icon: "UserCircle",
                    roles: ["ADMIN", "HOST", "USER"],
                },
                {
                    title: "Edit Profile",
                    href: "/edit-profile",
                    icon: "UserPen",
                    roles: ["ADMIN", "HOST", "USER"],
                },
            ],
        },
        {
            title: "Settings",
            items: [
                {
                    title: "Change Password",
                    href: "/change-password",
                    icon: "KeyRound",
                    roles: ["ADMIN", "HOST", "USER"],
                },
            ],
        },
    ];
};

export const adminNavItems: NavSection[] = [
    {
        title: "User Management",
        items: [
            {
                title: "Users",
                href: "/admin/dashboard/user-management",
                icon: "Users",
                roles: ["ADMIN"],
            },
            {
                title: "Hosts",
                href: "/admin/dashboard/host-management",
                icon: "UserCog",
                roles: ["ADMIN"],
            },
        ],
    },
    {
        title: "Event Management",
        items: [
            {
                title: "Events",
                href: "/admin/dashboard/event-management",
                icon: "CalendarCog",
                roles: ["ADMIN"],
            },
        ],
    },
];

export const hostNavItems: NavSection[] = [
    {
        title: "Events",
        items: [
            {
                title: "Create Event",
                href: "/create-event",
                icon: "CalendarPlus",
                roles: ["HOST"],
            },
            {
                title: "My Events",
                href: "/my-events",
                icon: "CalendarDays",
                roles: ["HOST"],
            },
        ],
    },
];

export const userNavItems: NavSection[] = [
    {
        title: "My Activities",
        items: [
            {
                title: "My Events",
                href: "/my-events",
                icon: "CalendarDays",
                roles: ["USER"],
            },
            {
                title: "My Tickets",
                href: "/my-tickets",
                icon: "Ticket",
                roles: ["USER"],
            },
        ],
    },
];

export const getNavItemsByRole = (role: UserRole): NavSection[] => {
    const commonNavItems = getCommonNavItems(role);

    switch (role) {
        case "ADMIN":
            return [...commonNavItems, ...adminNavItems];
        case "HOST":
            return [...commonNavItems, ...hostNavItems];
        case "USER":
            return [...commonNavItems, ...userNavItems];
        default:
            return [];
    }
};
