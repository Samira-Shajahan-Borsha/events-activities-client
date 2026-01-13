"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useTransition } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { format, startOfToday } from "date-fns";
import { toast } from "sonner";
import { CalendarIcon, Loader2, Tag, Users, FileText, Image as ImageIcon } from "lucide-react";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import SingleImageUploader from "@/components/shared/SingleImageUploader";

import { createEventZodSchema, updateEventZodSchema } from "@/zod/event.validation";
import { createEvent, updateEvent } from "@/services/event/eventManagement";
import { cn } from "@/lib/utils";
import z from "zod";
import { useRouter } from "next/navigation";

export type EventFormValues = z.infer<typeof createEventZodSchema>;

interface EventFormProps {
  defaultValues?: Partial<EventFormValues>;
  onCancel?: () => void;
  eventId?: string;
  imageUrl?: string;
}

export type CreateEventFormValues = z.infer<typeof createEventZodSchema>;
export type UpdateEventFormValues = z.infer<typeof updateEventZodSchema>;

export default function EventForm({ defaultValues, onCancel, eventId, imageUrl }: EventFormProps) {
  const [isPending, startTransition] = useTransition();
  const today = startOfToday();
  const router = useRouter();
  const isEditMode = !!eventId;

  const form = useForm<CreateEventFormValues | UpdateEventFormValues>({
    resolver: zodResolver(isEditMode ? updateEventZodSchema : createEventZodSchema),
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

  const onSubmit: SubmitHandler<CreateEventFormValues | UpdateEventFormValues> = (values) => {
    startTransition(async () => {
      try {

        const formData = new FormData();
        Object.entries(values).forEach(([key, value]) => {
          if (value === undefined || value === null) return;

          if (key === "file") {
            if (value instanceof File) formData.append("file", value);
            return;
          }

          formData.append(key, String(value));
        });

        let result;
        if (isEditMode && eventId) {
          result = await updateEvent(eventId, formData);
        } else {
          result = await createEvent(formData);
        }

        if (result?.success) {
          toast.success(result.message);
          if (!isEditMode) form.reset();
          router.push("/host/dashboard/event-management");
        } else {
          toast.error(result?.message || "Check the form for errors");
        }
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
      } catch (error: any) {
        toast.error(
          process.env.NODE_ENV === "development"
            ? error.message
            : "Something went wrong"
        );
      }
    });
  };


  return (
    <div className="min-h-screen bg-background px-0 py-6 sm:px-6">
      <div className="mx-auto max-w-3xl">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)}>
            <div className="rounded-xl border md:bg-card md:shadow-sm overflow-hidden">
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
                        <SingleImageUploader
                          initialImageUrl={imageUrl}
                          onChange={field.onChange}
                        />
                      </FormControl>
                      {!eventId && <FormMessage />}
                    </FormItem>
                  )}
                />
              </div>

              {/* Event Identity */}
              <div className="space-y-8 p-4 sm:p-8">
                <section className="space-y-4">
                  <div className="flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-primary">
                    <FileText className="h-4 w-4" /> Event Identity
                  </div>

                  <FormField control={form.control} name="name" render={({ field }) => (
                    <FormItem>
                      <FormLabel>Event Name</FormLabel>
                      <FormControl>
                        <Input placeholder="e.g. Annual Global Tech Summit 2026" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )} />

                  <FormField control={form.control} name="location" render={({ field }) => (
                    <FormItem>
                      <FormLabel>Location</FormLabel>
                      <FormControl>
                        <Input placeholder="e.g. Grand Ballroom, Hilton Hotel or Zoom Link" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )} />

                  <FormField control={form.control} name="description" render={({ field }) => (
                    <FormItem>
                      <FormLabel>Description</FormLabel>
                      <FormControl>
                        <Textarea rows={4} placeholder="Provide detailed overview..." {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )} />
                </section>

                {/* Date & Fee */}
                <section className="space-y-4 border-t pt-6">
                  <div className="flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-primary">
                    <Tag className="h-4 w-4" /> Date & Pricing
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <FormField control={form.control} name="type" render={({ field }) => (
                      <FormItem>
                        <FormLabel>Event Category</FormLabel>
                        <FormControl>
                          <Input placeholder="Workshop, Webinar..." {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )} />

                    <FormField control={form.control} name="date" render={({ field }) => (
                      <FormItem>
                        <FormLabel>Scheduled Date</FormLabel>
                        <Popover>
                          <PopoverTrigger asChild>
                            <Button variant="outline" className={cn("w-full justify-start font-normal", !field.value && "text-muted-foreground")}>
                              <CalendarIcon className="mr-2 h-4 w-4" />
                              {field.value ? format(new Date(field.value), "PPP") : "Pick a date"}
                            </Button>
                          </PopoverTrigger>
                          <PopoverContent className="p-0" align="start">
                            <Calendar
                              mode="single"
                              selected={field.value ? new Date(field.value) : undefined}
                              onSelect={(d) => field.onChange(d ? d.toISOString() : "")}
                              disabled={(d) => d < today}
                            />
                          </PopoverContent>
                        </Popover>
                        <FormMessage />
                      </FormItem>
                    )} />

                    <FormField control={form.control} name="joiningFee" render={({ field }) => (
                      <FormItem>
                        <FormLabel>Joining Fee (USD)</FormLabel>
                        <FormControl>
                          <Input type="number" min={0} placeholder="0.00" {...field} value={field.value ?? ""} onChange={(e) => field.onChange(e.target.value === "" ? 0 : Number(e.target.value))} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )} />

                    {isEditMode && (
                      <FormField
                        control={form.control}
                        name="status"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Status</FormLabel>
                            <FormControl>
                              <Select {...field} onValueChange={field.onChange}>
                                <SelectTrigger className="w-full">
                                  <SelectValue placeholder="Select status" />
                                </SelectTrigger>
                                <SelectContent>
                                  <SelectItem value="OPEN">Open</SelectItem>
                                  <SelectItem value="FULL">Full</SelectItem>
                                  <SelectItem value="CANCELLED">Cancelled</SelectItem>
                                  <SelectItem value="COMPLETED">Completed</SelectItem>
                                </SelectContent>
                              </Select>
                            </FormControl>
                          </FormItem>
                        )}
                      />
                    )}
                  </div>
                </section>

                {/* Attendance */}
                <section className="space-y-4 border-t pt-6">
                  <div className="flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-primary">
                    <Users className="h-4 w-4" /> Attendance Capacity
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <FormField control={form.control} name="minParticipants" render={({ field }) => (
                      <FormItem>
                        <FormLabel>Min Participants</FormLabel>
                        <FormControl>
                          <Input type="number" placeholder="Minimum required" value={field.value} onChange={(e) => field.onChange(Number(e.target.value))} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )} />

                    <FormField control={form.control} name="maxParticipants" render={({ field }) => (
                      <FormItem>
                        <FormLabel>Max Capacity</FormLabel>
                        <FormControl>
                          <Input type="number" placeholder="Maximum allowed" value={field.value} onChange={(e) => field.onChange(Number(e.target.value))} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )} />
                  </div>
                </section>
              </div>

              {/* Actions */}
              <div className="flex flex-col gap-3 bg-muted/30 p-4 sm:flex-row sm:justify-end sm:p-6">
                {onCancel && (
                  <Button type="button" variant="ghost" onClick={onCancel} className="w-full sm:w-auto">
                    Cancel
                  </Button>
                )}
                <Button type="submit" disabled={isPending} className="w-full sm:w-auto md:min-w-40 shadow-sm">
                  {isPending ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      {isEditMode ? "Updating Event..." : "Publishing Event..."}
                    </>
                  ) : isEditMode ? "Update Event" : "Publish Event"}
                </Button>
              </div>
            </div>
          </form>
        </Form>
      </div>
    </div>
  );
}
