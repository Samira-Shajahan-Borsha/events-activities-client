import { format } from "date-fns";

import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { getTicket } from "@/services/ticket/ticket";

import Link from "next/link";
import {
  CheckCircle2,
  Calendar,
  MapPin,
  Tag,
  Ticket,
  Receipt,
  ShieldCheck,
  Compass,
  Home,
  Clock,
  Info,
} from "lucide-react";

import { Button } from "@/components/ui/button";

interface IPaymentSuccessPageProps {
  params: Promise<{ slug: string }>;
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}

const PaymentSuccessPage = async ({ searchParams }: IPaymentSuccessPageProps) => {
  const query = await searchParams;

  const transactionId = query.transactionId as string;
  const amount = query.amount as string;
  const status = query.status as string;

  const result = await getTicket(transactionId);
  const payment = result?.data;
  const event = payment?.event;

  const formattedDate = event?.date
    ? format(new Date(event.date), "EEEE, MMM dd, yyyy • hh:mm a")
    : "";

  return (
    <div className="min-h-screen bg-muted/30 py-12">
      <div className="container mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 space-y-8">
        {/* Hero */}
        <div className="text-center space-y-4 py-6">
          <div className="relative mx-auto h-24 w-24">
            <div className="absolute inset-0 rounded-full bg-primary/15 blur-xl" />
            <div className="relative flex h-24 w-24 items-center justify-center rounded-full border border-primary/20 bg-primary/10">
              <CheckCircle2
                className="h-12 w-12 text-primary"
                strokeWidth={2.2}
              />
            </div>
          </div>

          <Badge className="rounded-full">
            <CheckCircle2 className="mr-1 h-3.5 w-3.5" />
            Successful
          </Badge>

          <h1 className="font-heading text-4xl font-bold tracking-tight">
            Payment Successful
          </h1>

          <p className="text-muted-foreground">
            Your ticket has been confirmed and is ready to use.
          </p>
        </div>

        {/* Ticket Card */}
        {event && (
          <Card className="overflow-hidden rounded-2xl border-border/60 shadow-sm">
            <div className="relative grid md:grid-cols-[1.4fr_1fr]">
              {/* Event Side */}
              <div className="space-y-5 p-6 md:p-8">
                <div className="flex gap-2">
                  <Badge variant="secondary" className="rounded-full">
                    <Tag className="mr-1 h-3 w-3" />
                    {event.type}
                  </Badge>

                  <Badge className="rounded-full">
                    {event.isPaid === "FREE"
                      ? "FREE"
                      : `BDT ${event.joiningFee}`}
                  </Badge>
                </div>

                <div>
                  <p className="mb-1 text-xs uppercase tracking-wider text-muted-foreground">
                    Event
                  </p>

                  <h2 className="text-2xl font-semibold">
                    {event.name}
                  </h2>
                </div>

                <div className="space-y-3 text-sm">
                  <div className="flex items-center gap-2">
                    <Calendar className="h-4 w-4 text-primary" />
                    {formattedDate}
                  </div>

                  <div className="flex items-center gap-2">
                    <MapPin className="h-4 w-4 text-primary" />
                    {event.location}
                  </div>
                </div>
              </div>

              {/* Divider */}
              <div className="hidden md:block absolute left-[58.33%] top-6 bottom-6 border-l-2 border-dashed border-border" />

              {/* Transaction Side */}
              <div className="space-y-4 bg-muted/30 p-6 md:p-8">
                <div className="flex items-center gap-2 text-sm font-medium">
                  <Receipt className="h-4 w-4 text-primary" />
                  Transaction Details
                </div>

                <div className="space-y-3 text-sm">
                  <div>
                    <p className="mb-1 text-xs text-muted-foreground">
                      Transaction ID
                    </p>

                    <p className="break-all font-mono">
                      {transactionId}
                    </p>
                  </div>

                  <div>
                    <p className="mb-1 text-xs text-muted-foreground">
                      Status
                    </p>

                    <Badge className="rounded-full">
                      <CheckCircle2 className="mr-1 h-3 w-3" />
                      {status}
                    </Badge>
                  </div>

                  <div className="border-t pt-3">
                    <p className="mb-1 text-xs text-muted-foreground">
                      Amount Paid
                    </p>

                    <p className="text-2xl font-bold">
                      BDT {amount}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-2 text-xs text-muted-foreground">
                  <ShieldCheck className="h-3.5 w-3.5 text-primary" />
                  Secured by EventHub Payments
                </div>
              </div>
            </div>
          </Card>
        )}

        {/* Event Information */}
        {event && (
          <Card className="rounded-2xl border-border/60 shadow-sm">
            <CardContent className="space-y-5 p-6 md:p-8">
              <div className="flex items-center gap-2">
                <Info className="h-5 w-5 text-primary" />
                <h3 className="text-lg font-semibold">
                  Event Information
                </h3>
              </div>

              <p className="leading-relaxed text-muted-foreground">
                {event.description}
              </p>

              <div className="grid gap-4 sm:grid-cols-2">
                <div className="rounded-xl border border-border/60 bg-muted/40 p-4">
                  <div className="flex gap-3">
                    <Calendar className="h-5 w-5 text-primary" />
                    <div>
                      <p className="text-xs text-muted-foreground">
                        Date & Time
                      </p>
                      <p className="text-sm font-medium">
                        {formattedDate}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="rounded-xl border border-border/60 bg-muted/40 p-4">
                  <div className="flex gap-3">
                    <MapPin className="h-5 w-5 text-primary" />
                    <div>
                      <p className="text-xs text-muted-foreground">
                        Location
                      </p>
                      <p className="text-sm font-medium">
                        {event.location}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="rounded-xl border border-border/60 bg-muted/40 p-4">
                  <div className="flex gap-3">
                    <Tag className="h-5 w-5 text-primary" />
                    <div>
                      <p className="text-xs text-muted-foreground">
                        Category
                      </p>
                      <p className="text-sm font-medium">
                        {event.type}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="rounded-xl border border-border/60 bg-muted/40 p-4">
                  <div className="flex gap-3">
                    <Clock className="h-5 w-5 text-primary" />
                    <div>
                      <p className="text-xs text-muted-foreground">
                        Entry
                      </p>
                      <p className="text-sm font-medium">
                        Please arrive 30 minutes early
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        )}

        {/* Actions */}
        <div className="grid gap-3 sm:grid-cols-3">
          <Button size="lg" asChild>
            <Link href="/dashboard/my-events">
              <Ticket className="h-4 w-4" />
              View My Tickets
            </Link>
          </Button>

          <Button size="lg" variant="secondary" asChild>
            <Link href="/explore-events">
              <Compass className="h-4 w-4" />
              Explore More Events
            </Link>
          </Button>

          <Button size="lg" variant="outline" asChild>
            <Link href="/">
              <Home className="h-4 w-4" />
              Back Home
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default PaymentSuccessPage;
