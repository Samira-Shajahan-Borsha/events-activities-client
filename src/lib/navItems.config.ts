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
                title: "Event Management",
                href: "/admin/dashboard/event-management",
                icon: "CalendarCog",
                roles: ["ADMIN"],
            },
            {
                title: "Create Event",
                href: "/admin/dashboard/create-event",
                icon: "CalendarPlus",
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
                title: "Event Management",
                href: "/host/dashboard/event-management",
                icon: "CalendarDays",
                roles: ["HOST"],
            },
            {
                title: "Create Event",
                href: "/host/dashboard/create-event",
                icon: "CalendarPlus",
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
                href: "/dashboard/my-events",
                icon: "CalendarDays",
                roles: ["USER"],
            },
            {
                title: "My Tickets",
                href: "/dashboard/my-tickets",
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
