import Link from "next/link";

import { Button } from "@/components/ui/button";
import {
    XCircle,
    AlertTriangle,
    ArrowLeft,
    LifeBuoy,
    Receipt,
    WifiOff,
    Clock,
    Wallet,
    Ban,
} from "lucide-react";

import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { TICKET_STATUS } from "@/types/ticket.interface";

const reasons = [
    {
        icon: Wallet,
        title: "Insufficient balance",
        desc: "Your account didn't have enough funds to complete this payment.",
    },
    {
        icon: Ban,
        title: "Card declined",
        desc: "The card issuer declined the transaction. Try a different card.",
    },
    {
        icon: WifiOff,
        title: "Network interruption",
        desc: "A connection drop interrupted the payment flow.",
    },
    {
        icon: Clock,
        title: "Payment gateway timeout",
        desc: "The gateway took too long to respond. Please retry.",
    },
];

interface IPaymentFailedPageProps {
    params: Promise<{ slug: string }>;
    searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}

const PaymentFailPage = async ({ searchParams }: IPaymentFailedPageProps) => {
    const query = await searchParams;

    const transactionId = query.transactionId as string;
    const amount = query.amount as string;

    return (
        <div className="min-h-screen flex flex-col bg-background mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
            {/* Hero */}
            <section className="relative overflow-hidden bg-linear-to-br from-destructive/10 via-background to-accent/20 py-16 md:py-20">
                <div className="absolute top-20 -right-20 h-96 w-96 rounded-full bg-destructive/15 blur-3xl" />
                <div className="absolute -bottom-20 -left-20 h-96 w-96 rounded-full bg-accent/30 blur-3xl" />

                <div className="container relative z-10 mx-auto max-w-2xl px-4 text-center">
                    <div className="relative mx-auto mb-6 h-24 w-24">
                        <div className="absolute inset-0 rounded-full bg-destructive/15 blur-xl" />

                        <div className="relative flex h-24 w-24 items-center justify-center rounded-full border border-destructive/20 bg-destructive/10">
                            <XCircle
                                className="h-12 w-12 text-destructive"
                                strokeWidth={2.2}
                            />
                        </div>
                    </div>

                    <Badge variant="destructive" className="mb-4 rounded-full">
                        <AlertTriangle className="mr-1 h-3.5 w-3.5" />
                        Failed
                    </Badge>

                    <h1 className="font-heading mb-3 text-4xl font-bold tracking-tight md:text-5xl">
                        Payment Failed
                    </h1>

                    <p className="text-lg text-muted-foreground">
                        Something went wrong while processing your payment. Don&apos;t worry — no
                        charge was completed.
                    </p>
                </div>
            </section>

            <section className="py-12 md:py-16">
                <div className="container mx-auto max-w-4xl space-y-8">
                    {/* Payment Details */}
                    <Card className="rounded-2xl border-border/60 shadow-sm">
                        <CardContent className="p-6 md:p-8">
                            <div className="mb-5 flex items-center gap-2">
                                <Receipt className="h-5 w-5 text-primary" />
                                <h3 className="text-lg font-semibold">Payment Details</h3>
                            </div>

                            <div className="grid gap-4 sm:grid-cols-3">
                                <div className="rounded-xl border border-border/60 bg-muted/40 p-4">
                                    <p className="mb-1 text-xs text-muted-foreground">
                                        Transaction ID
                                    </p>

                                    <p className="break-all font-mono text-sm">
                                        {transactionId}
                                    </p>
                                </div>

                                <div className="rounded-xl border border-border/60 bg-muted/40 p-4">
                                    <p className="mb-1 text-xs text-muted-foreground">Amount</p>

                                    <p className="text-lg font-semibold">
                                        BDT {amount}
                                    </p>
                                </div>

                                <div className="rounded-xl border border-border/60 bg-muted/40 p-4">
                                    <p className="mb-1 text-xs text-muted-foreground">Status</p>

                                    <Badge variant="destructive" className="rounded-full">
                                        <XCircle className="mr-1 h-3 w-3" />
                                        {TICKET_STATUS.FAILED}
                                    </Badge>
                                </div>
                            </div>
                        </CardContent>
                    </Card>

                    {/* Common Reasons */}
                    <Card className="rounded-2xl border-border/60 shadow-sm">
                        <CardContent className="p-6 md:p-8">
                            <div className="mb-5 flex items-center gap-2">
                                <AlertTriangle className="h-5 w-5 text-destructive" />
                                <h3 className="text-lg font-semibold">
                                    Common reasons
                                </h3>
                            </div>

                            <div className="grid gap-4 sm:grid-cols-2">
                                {reasons.map((reason) => (
                                    <div
                                        key={reason.title}
                                        className="flex items-start gap-3 rounded-xl border border-border/60 bg-muted/30 p-4"
                                    >
                                        <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-destructive/10">
                                            <reason.icon className="h-4 w-4 text-destructive" />
                                        </div>

                                        <div>
                                            <p className="text-sm font-medium">
                                                {reason.title}
                                            </p>

                                            <p className="mt-0.5 text-sm text-muted-foreground">
                                                {reason.desc}
                                            </p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </CardContent>
                    </Card>

                    {/* Actions */}
                    <div className="flex items-center justify-center w-full">
                        <Button size="lg" variant="outline" asChild>
                            <Link href="/explore-events">
                                <ArrowLeft className="h-4 w-4" />
                                Back to Event
                            </Link>
                        </Button>
                    </div>

                    {/* Support */}
                    <Card className="rounded-2xl border-border/60 bg-muted/30 shadow-sm">
                        <CardContent className="flex flex-col gap-5 p-6 md:flex-row md:items-center md:justify-between md:p-8">
                            <div className="flex items-start gap-4">
                                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/10">
                                    <LifeBuoy className="h-6 w-6 text-primary" />
                                </div>

                                <div>
                                    <h3 className="text-lg font-semibold">
                                        Need help?
                                    </h3>

                                    <p className="text-sm text-muted-foreground">
                                        If the issue continues, contact our support team and
                                        we&apos;ll resolve it quickly.
                                    </p>
                                </div>
                            </div>

                            <Button asChild>
                                <Link href="/contact">
                                    Contact Support
                                </Link>
                            </Button>
                        </CardContent>
                    </Card>
                </div>
            </section>
        </div>
    );
};

export default PaymentFailPage;