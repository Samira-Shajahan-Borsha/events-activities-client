export type UserRole = "ADMIN" | "USER" | "HOST";

// exact: ["/my-profile", "/settings"] // Routes exactly matching /my-profile and /settings
// patterns : [/^\/dashboard/, /^\/patient/] // Routes starting with /dashboard/*

export type RouteConfig = {
    exact: string[];
    patterns: RegExp[];
};

export const authRoutes = ["/login", "/register", "forgot-password", "/reset-password"];

export const commonProtectedRoutes: RouteConfig = {
    exact: ["/my-profile", "/change-password"],
    patterns: [], //  ["/password/change-password", "/password/forgot-password", "/password/reset-password"]
};

export const adminProtectedRoutes: RouteConfig = {
    patterns: [/^\/admin/], // Routes starting with /admin/*
    exact: [], // Routes exactly matching /my-events
};

export const hostProtectedRoutes: RouteConfig = {
    patterns: [/^\/host/], // Routes starting with /host/*
    exact: [], // Routes exactly matching /my-events
};

export const userProtectedRoutes: RouteConfig = {
    patterns: [/^\/dashboard/, /^\/payment/], // Routes starting with /dashboard/* and starting with /payment/*
    exact: [], // Routes exactly matching /payment/success
};

export const isAuthRoute = (pathname: string) => {
    return authRoutes.some((route: string) => route === pathname);
};

export const isRouteMatches = (pathname: string, routes: RouteConfig): boolean => {
    if (routes.exact.includes(pathname)) {
        return true;
    }
    return routes.patterns.some((pattern: RegExp) => pattern.test(pathname));
};

export const getRouteOwner = (pathname: string): "ADMIN" | "HOST" | "USER" | "COMMON" | null => {
    if (isRouteMatches(pathname, adminProtectedRoutes)) {
        return "ADMIN";
    }
    if (isRouteMatches(pathname, hostProtectedRoutes)) {
        return "HOST";
    }
    if (isRouteMatches(pathname, userProtectedRoutes)) {
        return "USER";
    }
    if (isRouteMatches(pathname, commonProtectedRoutes)) {
        return "COMMON";
    }
    return null;
};

/* export const getDefaultDashboardRoute = (role: UserRole): string => {
    switch (role) {
        case "ADMIN":
            return "/admin/dashboard";
        case "HOST":
            return "/host/dashboard";
        case "USER":
            return "/dashboard";
        default:
            return "/";
    }
}; */
export const getDefaultDashboardRoute = (role: UserRole): string => {
    switch (role) {
        case "ADMIN":
            return "/my-profile";
        case "HOST":
            return "/my-profile";
        case "USER":
            return "/my-profile";
        default:
            return "/";
    }
};

export const isValidRedirectForRole = (redirectPath: string, role: UserRole): boolean => {
    const routeOwner = getRouteOwner(redirectPath);

    if (routeOwner === null || routeOwner === "COMMON") {
        return true;
    }

    if (routeOwner === role) {
        return true;
    }

    return false;
};
