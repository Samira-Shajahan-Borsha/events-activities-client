/* eslint-disable @typescript-eslint/no-explicit-any */
"use server";

import { serverFetch } from "@/lib/server-fetch";

export const getAllHosts = async () => {
    try {
        const response = await serverFetch.get(`/user/all-hosts`);

        const result = await response.json();

        return result;
    } catch (error: any) {
        return {
            success: false,
            message: `${
                process.env.NODE_ENV === "development" ? error.message : "Something went wrong"
            }`,
        };
    }
};

export const getAllUsers = async () => {
    try {
        const response = await serverFetch.get(`/user/all-users`);

        const result = await response.json();

        return result;
    } catch (error: any) {
        return {
            success: false,
            message: `${
                process.env.NODE_ENV === "development" ? error.message : "Something went wrong"
            }`,
        };
    }
};
