/* eslint-disable @typescript-eslint/no-explicit-any */
"use server";

import { serverFetch } from "@/lib/server-fetch";
import { revalidateTag } from "next/cache";

export const updateProfile = async (formData: FormData) => {
    try {
        const response = await serverFetch.patch(`/profile/update-profile`, {
            body: formData,
        });
        const result = await response.json();

        revalidateTag("my-user-info", "max");

        return result;
    } catch (error: any) {
        return {
            success: false,
            message:
                process.env.NODE_ENV === "development" ? error.message : "Something went wrong",
        };
    }
};

export const getUserProfile = async (userId: string) => {
    try {
        const response = await serverFetch.get(`/profile/${userId}`);

        const result = await response.json();

        return result;
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
        return {
            success: false,
            message: `${
                process.env.NODE_ENV === "development" ? error.message : "Something went wrong"
            }`,
        };
    }
};
