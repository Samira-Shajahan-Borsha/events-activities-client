"use server";

import { deleteCookie } from "./tokenHandlers";
import { redirect } from "next/navigation";

export const logout = async () => {
    await deleteCookie("accessToken");
    await deleteCookie("refreshToken");

    redirect("/login");
};
