import Link from "next/link";
import {
  Ban,
  Receipt,
  ShieldCheck,
  Info,
  RefreshCw,
  ArrowLeft,
} from "lucide-react";

import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { TICKET_STATUS } from "@/types/ticket.interface";

interface IPaymentCancelPageProps {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}

const facts = [
  {
    icon: ShieldCheck,
    title: "No money has been deducted",
    desc: "Your account or card was not charged.",
  },
  {
    icon: Info,
    title: "Payment was not completed",
    desc: "Your booking is not confirmed yet.",
  },
  {
    icon: RefreshCw,
    title: "You can retry anytime",
    desc: "Return to the event and complete payment.",
  },
];

const PaymentCancelPage = async ({ searchParams }: IPaymentCancelPageProps) => {
  const query = await searchParams;

  const transactionId = query.transactionId as string;
  const amount = query.amount as string;

  return (
    <div className="min-h-screen flex flex-col bg-background mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">

      {/* HERO */}
      <section className="relative overflow-hidden bg-linear-to-br from-muted via-background to-accent/20 py-16 md:py-20">
        <div className="absolute top-20 -right-20 w-96 h-96 bg-muted-foreground/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-20 -left-20 w-96 h-96 bg-accent/30 rounded-full blur-3xl" />

        <div className="container mx-auto px-4 text-center max-w-2xl relative z-10">
          <div className="w-24 h-24 mx-auto mb-6 rounded-full bg-muted border flex items-center justify-center">
            <Ban className="w-12 h-12 text-muted-foreground" />
          </div>

          <Badge className="mb-4 rounded-full" variant="secondary">
            <Ban className="w-3.5 h-3.5 mr-1" />
            Cancelled
          </Badge>

          <h1 className="text-4xl md:text-5xl font-bold mb-3">
            Payment Cancelled
          </h1>

          <p className="text-muted-foreground">
            No payment was processed.
          </p>
        </div>
      </section>

      {/* CONTENT */}
      <section className="py-12 md:py-16">
        <div className="container space-y-8">

          {/* SUMMARY */}
          <Card className="rounded-2xl">
            <CardContent className="p-6 md:p-8">
              <div className="flex items-center gap-2 mb-5">
                <Receipt className="w-5 h-5 text-primary" />
                <h3 className="font-semibold text-lg">Payment Summary</h3>
              </div>

              <div className="grid sm:grid-cols-3 gap-4">
                <div className="p-4 rounded-xl bg-muted/40 border">
                  <p className="text-xs text-muted-foreground">Transaction ID</p>
                  <p className="font-mono text-sm break-all">
                    {transactionId || "N/A"}
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-muted/40 border">
                  <p className="text-xs text-muted-foreground">Amount</p>
                  <p className="font-semibold">
                    {amount ? `BDT ${amount}` : "N/A"}
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-muted/40 border">
                  <p className="text-xs text-muted-foreground">Status</p>
                  <Badge variant="secondary">
                    {TICKET_STATUS.CANCELED}
                  </Badge>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* INFO */}
          <Card className="rounded-2xl">
            <CardContent className="p-6 md:p-8">
              <div className="flex items-center gap-2 mb-4">
                <Info className="w-5 h-5 text-primary" />
                <h3 className="font-semibold text-lg">What this means</h3>
              </div>

              <div className="grid md:grid-cols-3 gap-4">
                {facts.map((f) => (
                  <div
                    key={f.title}
                    className="p-4 rounded-xl border bg-muted/30"
                  >
                    <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center mb-3">
                      <f.icon className="w-4 h-4 text-primary" />
                    </div>
                    <p className="font-medium text-sm">{f.title}</p>
                    <p className="text-sm text-muted-foreground mt-1">
                      {f.desc}
                    </p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* ACTIONS */}
          <div className="flex justify-center items-center">
            <Button size="lg" variant="secondary" asChild>
              <Link href="/explore-events">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Events
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PaymentCancelPage;