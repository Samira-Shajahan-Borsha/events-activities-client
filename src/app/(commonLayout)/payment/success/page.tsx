import {
  CheckCircle2,
  Calendar,
  MapPin,
  CreditCard,
} from "lucide-react";
import { format } from "date-fns";

import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { getTicket } from "@/services/ticket/ticket";

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
      <div className="container max-w-3xl space-y-6 mx-auto">
        {/* Success Header */}
        <div className="flex flex-col items-center text-center space-y-3">
          <div className="flex h-14 w-14 items-center justify-center rounded-full bg-emerald-500/10">
            <CheckCircle2 className="h-7 w-7 text-emerald-600" />
          </div>

          <h1 className="font-heading text-2xl font-semibold tracking-tight">
            Payment Successful
          </h1>
        </div>

        {/* Payment Summary */}
        <Card className="rounded-2xl shadow-sm">
          <CardContent className="p-6 space-y-4">
            <div className="flex items-center gap-2 text-sm font-semibold">
              <CreditCard size={16} />
              Payment Summary
            </div>

            <Separator />

            <div className="space-y-3 text-sm">
              <div className="flex justify-between">
                <span className="text-muted-foreground">Transaction ID</span>
                <span className="font-medium">{transactionId}</span>
              </div>

              <div className="flex justify-between">
                <span className="text-muted-foreground">Amount Paid</span>
                <span className="font-medium">BDT {amount}</span>
              </div>

              <div className="flex justify-between items-center">
                <span className="text-muted-foreground">Status</span>
                <Badge className="bg-emerald-500/10 text-emerald-600">
                  {status}
                </Badge>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Event Information */}
        {event && (
          <Card className="rounded-2xl shadow-sm">
            <CardContent className="p-6 space-y-5">
              {/* Badges */}
              <div className="flex gap-2">
                <Badge className="bg-primary/5 text-primary font-medium">
                  {event.type}
                </Badge>

                <Badge className="bg-teal-500/10 text-teal-600 font-medium">
                  {event.isPaid === "FREE"
                    ? "FREE"
                    : `BDT ${event.joiningFee}`}
                </Badge>
              </div>

              {/* Title */}
              <h2 className="font-heading text-xl font-semibold tracking-tight">
                {event.name}
              </h2>

              {/* Meta */}
              <div className="grid gap-3 text-sm">
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Calendar size={16} />
                  {formattedDate}
                </div>

                <div className="flex items-center gap-2 text-muted-foreground">
                  <MapPin size={16} />
                  {event.location}
                </div>
              </div>

              <Separator />

              {/* Description */}
              <p className="text-sm text-muted-foreground leading-relaxed">
                {event.description}
              </p>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
};

export default PaymentSuccessPage;
