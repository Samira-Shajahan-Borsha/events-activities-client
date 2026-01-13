import z from "zod";

export const createEventZodSchema = z
    .object({
        name: z.string().min(1, "Event name is required"),
        type: z.string().min(1, "Event type is required"),
        location: z.string().min(1, "Location is required"),
        description: z.string().min(1, "Description is required"),
        date: z
            .string()
            .min(1, "Please select a date for your event")
            .refine(
                (val) => {
                    const selectedDate = new Date(val);
                    const today = new Date();
                    today.setHours(0, 0, 0, 0);
                    return selectedDate >= today;
                },
                {
                    message: "Event date cannot be in the past",
                }
            ),
        joiningFee: z.number().min(0, "Joining fee cannot be negative"),
        minParticipants: z.number().min(1, "Minimum 1 participant required"),
        maxParticipants: z.number().min(1, "Maximum 1 participant required"),
        file: z.instanceof(File, {
            message: "Please upload an event image",
        }),
    })
    .refine((data) => data.maxParticipants >= data.minParticipants, {
        path: ["maxParticipants"],
        message: "Max participants cannot be less than min participants",
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
