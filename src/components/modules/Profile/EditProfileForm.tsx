"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { toast } from "sonner";

import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

import SingleImageUploader from "@/components/shared/SingleImageUploader";
import { updateProfile } from "@/services/user/profile";
import { useTransition } from "react";
import { IProfile } from "@/types/user.interface";
import { Loader2 } from "lucide-react";
import { useRouter } from "next/navigation";

const updateProfileSchema = z.object({
    fullName: z.string().max(100).optional(),
    email: z.email().optional(),
    location: z.string().max(100).optional(),
    bio: z.string().max(500).optional(),
    interests: z.string().optional(),
    profilePhoto: z.any().optional(),
});

type FormValues = z.infer<typeof updateProfileSchema>;

interface EditProfileFormProps {
    initialData: IProfile;
    imageUrl?: string;
}

export default function EditProfileForm({ initialData, imageUrl }: EditProfileFormProps) {
    const [isPending, startTransition] = useTransition();

    const router = useRouter();

    const form = useForm<FormValues>({
        resolver: zodResolver(updateProfileSchema),
        defaultValues: {
            fullName: initialData.user.fullName || "",
            email: initialData.user.email || "",
            location: initialData.location || "",
            bio: initialData.bio || "",
            interests: Array.isArray(initialData.interests)
                ? initialData.interests.join(", ")
                : initialData.interests || "",
            profilePhoto: undefined,
        },
    });


    const onSubmit = (values: FormValues) => {
        startTransition(async () => {
            try {
                const formData = new FormData();
                Object.entries(values).forEach(([key, value]) => {
                    if (value === undefined || value === null) return;

                    if (key === "profilePhoto") {
                        if (value instanceof File) {
                            formData.append("file", value);
                        } else if (imageUrl) {
                            formData.append("fileUrl", imageUrl);
                        }
                        return;
                    }

                    formData.append(key, String(value));
                });

                const result = await updateProfile(formData);

                if (result.success) {
                    toast.success("Profile updated successfully!");
                    form.reset(values);
                    router.refresh();
                } else {
                    toast.error(result.message || "Failed to update profile.");
                }
                // eslint-disable-next-line @typescript-eslint/no-explicit-any
            } catch (err: any) {
                toast.error(err?.message || "Something went wrong");
            }
        });
    };


    return (
        <div className="bg-background px-0 py-6 sm:px-6">
            <div className="mx-auto max-w-3xl">
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)}>
                        <div className="rounded-xl border bg-card shadow-sm overflow-hidden">

                            {/* Profile Image Section */}
                            <div className="border-b bg-muted/30 p-4 sm:p-6 flex flex-col items-center gap-2">
                                <FormField
                                    control={form.control}
                                    name="profilePhoto"
                                    render={({ field }) => (
                                        <FormItem className="flex flex-col items-center gap-2">
                                            <FormLabel>Profile Image</FormLabel>
                                            <div className="w-40 h-40 rounded-lg overflow-hidden border ">
                                                <SingleImageUploader
                                                    initialImageUrl={imageUrl}
                                                    onChange={field.onChange}
                                                />
                                            </div>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                            </div>

                            {/* Name & Email Section */}
                            <div className="space-y-8 p-4 sm:p-6">
                                <section className="space-y-4">
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 align-items-center">
                                        {/* Email */}
                                        <FormField
                                            control={form.control}
                                            name="email"
                                            disabled
                                            render={() => (
                                                <FormItem>
                                                    <FormLabel>Email</FormLabel>
                                                    <FormControl>
                                                        <Input
                                                            value={initialData.user.email || ""}
                                                            readOnly
                                                        />
                                                    </FormControl>
                                                </FormItem>
                                            )}
                                        />

                                        {/* Full Name */}
                                        <FormField
                                            control={form.control}
                                            name="fullName"
                                            disabled
                                            render={() => (
                                                <FormItem>
                                                    <FormLabel>Name</FormLabel>
                                                    <FormControl>
                                                        <Input
                                                            value={initialData.user.fullName || ""}
                                                            readOnly
                                                        />
                                                    </FormControl>
                                                </FormItem>
                                            )}
                                        />
                                    </div>

                                    {/* Location */}
                                    <FormField
                                        control={form.control}
                                        name="location"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel>Location</FormLabel>
                                                <FormControl>
                                                    <Input placeholder="Your location" {...field} />
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />

                                    {/* Bio */}
                                    <FormField
                                        control={form.control}
                                        name="bio"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel>Bio</FormLabel>
                                                <FormControl>
                                                    <Textarea placeholder="Tell us about yourself" {...field} />
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />

                                    {/* Interests */}
                                    <FormField
                                        control={form.control}
                                        name="interests"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel>Interests (comma separated)</FormLabel>
                                                <FormControl>
                                                    <Input
                                                        placeholder="technology, startups, meetups"
                                                        value={field.value} // ensure value comes from react-hook-form
                                                        onChange={field.onChange} // react-hook-form handles changes
                                                    />
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />
                                </section>
                            </div>

                            {/* Actions */}
                            <div className="flex flex-col gap-3 bg-muted/30 p-4 sm:flex-row sm:justify-end sm:p-6">
                                <Button
                                    type="submit"
                                    className="w-full sm:w-auto md:min-w-40 shadow-sm"
                                    disabled={isPending || !form.formState.isDirty}
                                >
                                    {isPending && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                                    {isPending ? "Updating..." : "Update Profile"}
                                </Button>
                            </div>
                        </div>
                    </form>
                </Form>
            </div>
        </div>
    );
}