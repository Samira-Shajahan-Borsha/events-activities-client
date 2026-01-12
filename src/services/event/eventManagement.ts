/* eslint-disable @typescript-eslint/no-explicit-any */
"use server";

import { serverFetch } from "@/lib/server-fetch";
import { zodValidator } from "@/lib/zodValidator";
import { createEventZodSchema, updateEventZodSchema } from "@/zod/event.validation";

export const createEvent = async (_prevState: any, formData: FormData) => {
    try {
        const payload = {
            name: formData.get("name") as string,
            type: formData.get("type") as string,
            description: formData.get("description") as string,
            date: formData.get("date") as string,
            location: formData.get("location") as string,
            minParticipants: formData.get("minParticipants")
                ? Number(formData.get("minParticipants"))
                : undefined,
            maxParticipants: formData.get("maxParticipants")
                ? Number(formData.get("maxParticipants"))
                : undefined,
            joiningFee: formData.get("joiningFee") ? Number(formData.get("joiningFee")) : 0,
        };

        const validation = zodValidator(payload, createEventZodSchema);
        if (!validation.success) return validation;

        const validatedPayload = validation.data;

        const newFormData = new FormData();
        newFormData.append("data", JSON.stringify(validatedPayload));

        const file = formData.get("file") as File | null;
        if (file) newFormData.append("file", file);

        const response = await serverFetch.post("/event/create", {
            body: newFormData,
        });

        console.log(response);

        return await response.json();
    } catch (error: any) {
        return {
            success: false,
            message:
                process.env.NODE_ENV === "development" ? error.message : "Something went wrong",
        };
    }
};

export const getAllEvents = async () => {
    try {
        const response = await serverFetch.get(`/event/all-events`);

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

export const getMyEvents = async () => {
    try {
        const response = await serverFetch.get(`/event/my-events`);

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

export const getEvents = async (slug: string) => {
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

export const updateEvent = async (_prevState: any, formData: FormData, id: string) => {
    try {
        const payload = {
            name: formData.get("name") as string,
            type: formData.get("type") as string,
            description: formData.get("description") as string,
            date: formData.get("date") as string,
            location: formData.get("location") as string,
            minParticipants: formData.get("minParticipants")
                ? Number(formData.get("minParticipants"))
                : undefined,

            maxParticipants: formData.get("maxParticipants")
                ? Number(formData.get("maxParticipants"))
                : undefined,
            joiningFee: formData.get("joiningFee") ? Number(formData.get("joiningFee")) : 0,
        };

        if (zodValidator(payload, updateEventZodSchema).success === false) {
            return zodValidator(payload, updateEventZodSchema);
        }

        const validatedPayload = zodValidator(payload, updateEventZodSchema).data;

        const newFormData = new FormData();

        newFormData.append("data", JSON.stringify(validatedPayload));

        if (formData.get("file")) {
            newFormData.append("file", formData.get("file") as Blob);
        }
        const response = await serverFetch.patch(`/event/${id}`, {
            body: newFormData,
        });

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
