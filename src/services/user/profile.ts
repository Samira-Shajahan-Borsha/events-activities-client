/* eslint-disable @typescript-eslint/no-explicit-any */
"use server";

import { serverFetch } from "@/lib/server-fetch";

export const updateProfile = async (formData: FormData) => {
    try {
        const response = await serverFetch.patch(`/profile/update-profile`, {
            body: formData,
        });
        const result = await response.json();

        return result;
    } catch (error: any) {
        return {
            success: false,
            message:
                process.env.NODE_ENV === "development" ? error.message : "Something went wrong",
        };
    }
};


