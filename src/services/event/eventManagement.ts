/* eslint-disable @typescript-eslint/no-explicit-any */
"use server";

import { serverFetch } from "@/lib/server-fetch";
import { revalidateTag } from "next/cache";

export const createEvent = async (formData: FormData) => {
    try {
        const response = await serverFetch.post("/event/create", {
            body: formData,
        });

        const result = await response.json();

        if (result.success) {
            revalidateTag("event-list", "max");
        }

        return result;
    } catch (error: any) {
        return {
            success: false,
            message:
                process.env.NODE_ENV === "development" ? error.message : "Something went wrong",
        };
    }
};

export const joinEvent = async (payload: { eventId: string }) => {
    try {
        const response = await serverFetch.post("/ticket/create-ticket", {
            body: JSON.stringify(payload),
            headers: { "Content-Type": "application/json" },
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

export const updateEvent = async (id: string, formData: FormData) => {
    try {
        const response = await serverFetch.patch(`/event/${id}`, {
            body: formData,
        });
        const result = await response.json();

        if (result.success) {
            revalidateTag("event-list", "max");
        }

        return result;
    } catch (error: any) {
        return {
            success: false,
            message:
                process.env.NODE_ENV === "development" ? error.message : "Something went wrong",
        };
    }
};

export const getAllEvents = async (queryString: string) => {
    try {
        const response = await serverFetch.get(
            `/event/all-events${queryString ? `?${queryString}` : ""}`
            /* {
                cache: "force-cache",
                next: { tags: ["event-list"] },
            } */
        );

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

export const getMyEvents = async (queryString: string) => {
    try {
        const response = await serverFetch.get(
            `/event/my-events${queryString ? `?${queryString}` : ""}`
        );

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

export const getEvent = async (slug: string) => {
    try {
        const response = await serverFetch.get(`/event/${slug}`);

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

export const deleteEvent = async (id: string) => {
    try {
        const response = await serverFetch.delete(`/event/${id}`);

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
