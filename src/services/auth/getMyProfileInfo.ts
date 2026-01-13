/* eslint-disable @typescript-eslint/no-explicit-any */
"use server";

import { serverFetch } from "@/lib/server-fetch";
import { getUserInfo } from "./getUserInfo";

export const getMyProfileInfo = async () => {
    try {
        const authUserInfo = await getUserInfo();

        const response = await serverFetch.get(`/auth/me`);
        const result = await response.json();

        const user = result.data?.user;
        if (!user) return null;

        if (authUserInfo?.userId !== user._id) {
            return null;
        }

        return result.data;
    } catch (error: any) {
        console.log(error);
        throw new Error("Failed to get user info: " + error.message);
    }
};
