/* eslint-disable @typescript-eslint/no-explicit-any */
"use server";

import { serverFetch } from "@/lib/server-fetch";
import { zodValidator } from "@/lib/zodValidator";
import { z } from "zod";

export const createEventZodSchema = z.object({
    name: z.string().min(1, "Event name is required"),
    type: z.string().min(1, "Event type is required"),
    description: z.string().min(1, "Description is required"),
    date: z.string().min(1, "Date is required"),
    location: z.string().min(1, "Location is required"),

    minParticipants: z
        .string()
        .optional()
        .transform((val) => (val ? Number(val) : undefined)),

    maxParticipants: z
        .string()
        .optional()
        .transform((val) => (val ? Number(val) : undefined)),

    joiningFee: z
        .string()
        .optional()
        .transform((val) => (val ? Number(val) : 0)),
    isFeatured: z.boolean().optional(),
});

export const updateEventZodSchema = z.object({
    name: z.string().nonempty("Event name cannot be empty").optional(),
    type: z.string().nonempty("Event type cannot be empty").optional(),
    description: z.string().nonempty("Description cannot be empty").optional(),
    image: z.string().nonempty("Event image cannot be empty").optional(),
    date: z.string().optional(),
    location: z.string().nonempty("Location cannot be empty").optional(),
    minParticipants: z
        .string()
        .optional()
        .transform((val) => (val === "" || val === undefined ? undefined : Number(val)))
        .pipe(z.number().min(1, "Minimum participants must be at least 1").optional()),
    maxParticipants: z
        .string()
        .optional()
        .transform((val) => (val === "" || val === undefined ? undefined : Number(val)))
        .pipe(z.number().min(1, "Maximum participants must be at least 1").optional()),
    joiningFee: z
        .string()
        .optional()
        .transform((val) => (val === "" || val === undefined ? undefined : Number(val)))
        .pipe(z.number().min(0, "Joining fee cannot be negative").optional()),

    isFeatured: z.boolean().optional(),
    host: z.string().nonempty("Host ID cannot be empty").optional(),
});

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

        if (zodValidator(payload, createEventZodSchema).success === false) {
            return zodValidator(payload, createEventZodSchema);
        }

        const validatedPayload = zodValidator(payload, createEventZodSchema).data;

        const newFormData = new FormData();

        newFormData.append("data", JSON.stringify(validatedPayload));

        if (formData.get("file")) {
            newFormData.append("file", formData.get("file") as Blob);
        }

        const response = await serverFetch.post("/event/create", {
            body: newFormData,
        });

        const result = await response.json();

        return result;
    } catch (error: any) {
        console.log(error);
        return {
            success: false,
            message: `${
                process.env.NODE_ENV === "development" ? error.message : "Something went wrong"
            }`,
        };
    }
};

export const getAllEvents = async () => {
    try {
        const response = await serverFetch.get("/event/all-events");

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
        const response = await serverFetch.patch(`/event/${id}`);

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
