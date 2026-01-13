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

import { createEventZodSchema } from "@/zod/event.validation";
import z from "zod";
import { useRouter } from "next/navigation";

export type EventFormValues = z.infer<typeof createEventZodSchema>;

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function EventForm({ defaultValues, onCancel }: any) {
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
    <div className="min-h-screen bg-background px-0 py-6 sm:px-6">
      <div className="mx-auto max-w-3xl">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)}>
            <div className="rounded-xl border md:bg-card md:shadow-sm overflow-hidden">

              {/* Media Section */}
              <div className="border-b bg-muted/30 p-4 sm:p-6">
                <div className="mb-4 flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-primary">
                  <ImageIcon className="h-4 w-4" /> Cover Image
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

              {/* Content Section */}
              <div className="space-y-8 p-4 sm:p-8">

                {/* Event Identity */}
                <section className="space-y-4">
                  <div className="flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-primary">
                    <FileText className="h-4 w-4" /> Event Identity
                  </div>

                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Event Name</FormLabel>
                        <FormControl>
                          <Input placeholder="e.g. Annual Global Tech Summit 2026" {...field} />
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
                          <Input placeholder="e.g. Grand Ballroom, Hilton Hotel or Zoom Link" {...field} />
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
                          <Textarea
                            rows={4}
                            placeholder="Provide a detailed overview of the event, including the agenda and what participants can expect..."
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </section>

                {/* Scheduling & Investment */}
                <section className="space-y-4 border-t pt-6">
                  <div className="flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-primary">
                    <Tag className="h-4 w-4" /> Date & Pricing
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <FormField
                      control={form.control}
                      name="type"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Event Category</FormLabel>
                          <FormControl>
                            <Input placeholder="e.g. Workshop, Conference, Webinar" {...field} />
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
                          <FormLabel>Scheduled Date</FormLabel>
                          <Popover>
                            <PopoverTrigger asChild>
                              <Button
                                variant="outline"
                                className={cn(
                                  "w-full justify-start font-normal",
                                  !field.value && "text-muted-foreground"
                                )}
                              >
                                <CalendarIcon className="mr-2 h-4 w-4" />
                                {field.value
                                  ? format(new Date(field.value), "PPP")
                                  : "Pick a date"}
                              </Button>
                            </PopoverTrigger>
                            <PopoverContent className="p-0" align="start">
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
                            <span className="text-muted-foreground text-xs font-normal">(USD)</span>
                          </FormLabel>

                          <FormControl>
                            <Input
                              type="number"
                              min={0}
                              placeholder="0.00 (Leave 0 for free events)"
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

                {/* Attendance Capacity */}
                <section className="space-y-4 border-t pt-6">
                  <div className="flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-primary">
                    <Users className="h-4 w-4" /> Attendance Capacity
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <FormField
                      control={form.control}
                      name="minParticipants"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Min Participants</FormLabel>
                          <FormControl>
                            <Input
                              type="number"
                              placeholder="Minimum required"
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
                          <FormLabel>Max Capacity</FormLabel>
                          <FormControl>
                            <Input
                              type="number"
                              placeholder="Maximum allowed"
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

              {/* Form Actions */}
              <div className="flex flex-col gap-3 bg-muted/30 p-4 sm:flex-row sm:justify-end sm:p-6">
                {onCancel && (
                  <Button type="button" variant="ghost" onClick={onCancel} className="w-full sm:w-auto">
                    Cancel
                  </Button>
                )}
                <Button
                  type="submit"
                  disabled={isPending}
                  className="w-full sm:w-auto md:min-w-[160px] shadow-sm"
                >
                  {isPending ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Publishing Event...
                    </>
                  ) : (
                    "Publish Event"
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