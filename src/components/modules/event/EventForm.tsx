"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useTransition } from "react";
import { useForm } from "react-hook-form";
import { format, startOfToday } from "date-fns";
import { toast } from "sonner";
import {
  CalendarIcon,
  Loader2,
  Tag,
  Users,
  FileText,
  Image as ImageIcon,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

import { createEvent } from "@/services/event/eventManagement";
import { cn } from "@/lib/utils";
import SingleImageUploader from "@/components/shared/SingleImageUploader";

import {
  createEventZodSchema,
} from "@/zod/event.validation";
import z from "zod";
import { useRouter } from "next/navigation";

export type EventFormValues = z.infer<typeof createEventZodSchema>;

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function EventForm({ defaultValues }: any) {
  const [isPending, startTransition] = useTransition();
  const today = startOfToday();

  const router = useRouter();

  const form = useForm<EventFormValues>({
    resolver: zodResolver(createEventZodSchema),
    defaultValues: {
      name: "",
      type: "",
      location: "",
      description: "",
      date: "",
      joiningFee: 0,
      minParticipants: 1,
      maxParticipants: 1,
      file: undefined,
      ...defaultValues,
    },
  });


  const onSubmit = (values: EventFormValues) => {
    startTransition(async () => {
      const formData = new FormData();

      for (const [key, value] of Object.entries(values)) {
        if (value == null) continue;

        formData.append(
          key,
          value instanceof File ? value : String(value)
        );
      }

      const result = await createEvent(formData);

      if (result?.success) {
        toast.success(result.message);
        form.reset();
        router.push(`/host/dashboard/event-management`);
      } else {
        toast.error(result?.message || "Check the form for errors");
      }
    });
  };


  return (
    <div className="min-h-screen bg-background px-4 py-6 sm:px-6">
      <div className="mx-auto max-w-3xl">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)}>
            <div className="rounded-xl border bg-card shadow-sm overflow-hidden">

              {/* Media */}
              <div className="border-b bg-muted/30 p-4 sm:p-6">
                <div className="mb-4 flex items-center gap-2 text-sm font-semibold uppercase text-primary">
                  <ImageIcon className="h-4 w-4" /> Media
                </div>

                <FormField
                  control={form.control}
                  name="file"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <SingleImageUploader onChange={field.onChange} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

              </div>

              {/* Content */}
              <div className="space-y-8 p-4 sm:p-8">

                {/* General */}
                <section className="space-y-4">
                  <div className="flex items-center gap-2 text-sm font-semibold uppercase text-primary">
                    <FileText className="h-4 w-4" /> General
                  </div>

                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Event Name</FormLabel>
                        <FormControl>
                          <Input {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="location"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Location</FormLabel>
                        <FormControl>
                          <Input {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="description"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Description</FormLabel>
                        <FormControl>
                          <Textarea rows={4} {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </section>

                {/* Logistics */}
                <section className="space-y-4 border-t pt-6">
                  <div className="flex items-center gap-2 text-sm font-semibold uppercase text-primary">
                    <Tag className="h-4 w-4" /> Logistics
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <FormField
                      control={form.control}
                      name="type"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Type</FormLabel>
                          <FormControl>
                            <Input {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="date"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Date</FormLabel>
                          <Popover>
                            <PopoverTrigger asChild>
                              <Button
                                variant="outline"
                                className={cn(
                                  "w-full justify-start",
                                  !field.value && "text-muted-foreground"
                                )}
                              >
                                <CalendarIcon className="mr-2 h-4 w-4" />
                                {field.value
                                  ? format(new Date(field.value), "PPP")
                                  : "Select date"}
                              </Button>
                            </PopoverTrigger>
                            <PopoverContent className="p-0">
                              <Calendar
                                mode="single"
                                selected={
                                  field.value
                                    ? new Date(field.value)
                                    : undefined
                                }
                                onSelect={(d) =>
                                  field.onChange(
                                    d ? d.toISOString() : ""
                                  )
                                }
                                disabled={(d) => d < today}
                              />
                            </PopoverContent>
                          </Popover>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="joiningFee"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>
                            Joining Fee{" "}
                            <span className="text-muted-foreground text-xs">(optional)</span>
                          </FormLabel>

                          <FormControl>
                            <Input
                              type="number"
                              min={0}
                              placeholder="0 = Free event"
                              {...field}
                              value={field.value ?? ""}
                              onChange={(e) =>
                                field.onChange(
                                  e.target.value === "" ? 0 : Number(e.target.value)
                                )
                              }
                            />
                          </FormControl>

                          <FormMessage />
                        </FormItem>
                      )}
                    />

                  </div>
                </section>

                {/* Capacity */}
                <section className="space-y-4 border-t pt-6">
                  <div className="flex items-center gap-2 text-sm font-semibold uppercase text-primary">
                    <Users className="h-4 w-4" /> Capacity
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <FormField
                      control={form.control}
                      name="minParticipants"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Min</FormLabel>
                          <FormControl>
                            <Input
                              type="number"
                              value={field.value}
                              onChange={(e) => field.onChange(Number(e.target.value))}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="maxParticipants"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Max</FormLabel>
                          <FormControl>
                            <Input
                              type="number"
                              value={field.value}
                              onChange={(e) => field.onChange(Number(e.target.value))}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                  </div>
                </section>
              </div>

              {/* Footer */}
              <div className="flex flex-col gap-3 bg-muted/30 p-4 sm:flex-row sm:justify-end sm:p-6">
                <Button
                  type="submit"
                  disabled={isPending}
                  className="w-full sm:w-auto w-full md:min-w-[140px]"
                >
                  {isPending ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Saving…
                    </>
                  ) : (
                    "Create Event"
                  )}
                </Button>
              </div>
            </div>
          </form>
        </Form>
      </div>
    </div>
  );
}
