"use client";

import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Field, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { format, startOfToday } from "date-fns";
import { 
  CalendarIcon, 
  Loader2, 
  MapPin, 
  Tag, 
  Users, 
  DollarSign, 
  FileText,
  Image as ImageIcon 
} from "lucide-react";
import { useActionState, useEffect, useState } from "react";
import { toast } from "sonner";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";

import InputFieldError from "@/components/shared/InputFieldError";
import SingleImageUploader from "@/components/shared/SingleImageUploader";
import { createEvent } from "@/services/event/eventManagement";
import { cn } from "@/lib/utils";
import { IEvent } from "@/types/event.interface";

interface IEventFormPageProps {
  defaultValues?: Partial<IEvent>;
  onCancel?: () => void;
}

export default function EventForm({ defaultValues, onCancel }: IEventFormPageProps) {
  const [state, formAction, isPending] = useActionState(createEvent, null);
  const today = startOfToday();
  const [date, setDate] = useState<Date | undefined>(
    defaultValues?.date ? new Date(defaultValues.date) : undefined
  );

  useEffect(() => {
    if (state?.success) toast.success(state.message);
    else if (state && !state.success) {
      toast.error(state.message);
    };
  }, [state]);

  return (
    <div className="min-h-screen bg-background py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        {/* Header Section */}

        <form action={formAction} className="space-y-8">
          {/* Main Card */}
          <div className="bg-card rounded-xl border border-border shadow-sm overflow-hidden">
            
            {/* Image Upload Area */}
            <div className="p-6 border-b bg-muted/30">
              <div className="flex items-center gap-2 mb-4 text-sm font-semibold uppercase tracking-wider text-primary">
                <ImageIcon className="w-4 h-4" />
                Media Assets
              </div>
              <Field>
                <Input name="file" type="file" accept="image/*" id="event-file-input" className="hidden" />
                <SingleImageUploader onChange={() => { }} inputId="event-file-input" />
                <InputFieldError field="image" state={state} />
              </Field>
            </div>

            <div className="p-6 sm:p-8 space-y-10">
              {/* General Information */}
              <section className="space-y-6">
                <div className="flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-primary">
                  <FileText className="w-4 h-4" />
                  General Details
                </div>
                
                <div className="grid gap-6">
                  <Field>
                    <FieldLabel>Event Name</FieldLabel>
                    <Input 
                      name="name" 
                      className="h-11"
                      defaultValue={defaultValues?.name} 
                      placeholder="e.g. Modern Architecture Workshop" 
                    />
                    <InputFieldError field="name" state={state} />
                  </Field>

                  <Field>
                    <FieldLabel>Location</FieldLabel>
                    <div className="relative">
                      <MapPin className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                      <Input 
                        name="location" 
                        className="pl-9 h-11"
                        defaultValue={defaultValues?.location} 
                        placeholder="Street, City or Virtual Link" 
                      />
                    </div>
                    <InputFieldError field="location" state={state} />
                  </Field>

                  <Field>
                    <FieldLabel>Description</FieldLabel>
                    <Textarea 
                      name="description" 
                      rows={4} 
                      className="resize-none"
                      defaultValue={defaultValues?.description} 
                      placeholder="Describe what participants can expect..." 
                    />
                    <InputFieldError field="description" state={state} />
                  </Field>
                </div>
              </section>

              {/* Logistics & Pricing */}
              <section className="pt-6 border-t space-y-6">
                <div className="flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-primary">
                  <Tag className="w-4 h-4" />
                  Logistics & Pricing
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                  <Field>
                    <FieldLabel>Event Type</FieldLabel>
                    <Input name="type" className="h-11" defaultValue={defaultValues?.type} placeholder="Conference" />
                    <InputFieldError field="type" state={state} />
                  </Field>

                  <Field>
                    <FieldLabel>Date</FieldLabel>
                    <Popover>
                      <PopoverTrigger asChild>
                        <Button 
                          variant="outline" 
                          className={cn(
                            "w-full h-11 justify-start text-left font-normal px-3", 
                            !date && "text-muted-foreground"
                          )}
                        >
                          <CalendarIcon className="mr-2 h-4 w-4 opacity-70" />
                          {date ? format(date, "PPP") : <span>Select date</span>}
                        </Button>
                      </PopoverTrigger>
                      <PopoverContent className="w-auto p-0" align="start">
                        <Calendar 
                          mode="single" 
                          selected={date} 
                          onSelect={setDate} 
                          disabled={(d) => d < today} 
                          initialFocus 
                        />
                      </PopoverContent>
                    </Popover>
                    <input type="hidden" name="date" value={date?.toISOString() ?? ""} />
                    <InputFieldError field="date" state={state} />
                  </Field>

                  <Field className="sm:col-span-2 md:col-span-1">
                    <FieldLabel>Joining Fee</FieldLabel>
                    <div className="relative">
                      <DollarSign className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                      <Input 
                        name="joiningFee" 
                        type="number" 
                        className="pl-9 h-11"
                        step="any" 
                        defaultValue={defaultValues?.joiningFee || 0} 
                      />
                    </div>
                    <InputFieldError field="joiningFee" state={state} />
                  </Field>
                </div>
              </section>

              {/* Capacity */}
              <section className="pt-6 border-t space-y-6">
                <div className="flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-primary">
                  <Users className="w-4 h-4" />
                  Participant Capacity
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <Field>
                    <FieldLabel>Min Participants</FieldLabel>
                    <Input name="minParticipants" type="number" className="h-11" defaultValue={defaultValues?.minParticipants} />
                    <InputFieldError field="minParticipants" state={state} />
                  </Field>

                  <Field>
                    <FieldLabel>Max Participants</FieldLabel>
                    <Input name="maxParticipants" type="number" className="h-11" defaultValue={defaultValues?.maxParticipants} />
                    <InputFieldError field="maxParticipants" state={state} />
                  </Field>
                </div>
              </section>
            </div>

            {/* Form Footer */}
            <div className="bg-muted/30 p-6 flex flex-col-reverse sm:flex-row justify-end items-center gap-3">
              {onCancel && (
                <Button 
                  type="button" 
                  variant="outline" 
                  onClick={onCancel}
                  className="w-full sm:w-auto"
                >
                  Cancel
                </Button>
              )}
              <Button 
                type="submit" 
                disabled={isPending} 
                className="w-full sm:w-auto min-w-[140px]"
              >
                {isPending ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Saving...
                  </>
                ) : (
                  "Create Event"
                )}
              </Button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}