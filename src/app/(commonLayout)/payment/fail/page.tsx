import {
    XCircle,
    CreditCard,
    AlertTriangle,
} from "lucide-react";

import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { TICKET_STATUS } from "@/types/ticket.interface";

interface IPaymentFailedPageProps {
    params: Promise<{ slug: string }>;
    searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}

const PaymentFailPage = async ({ searchParams }: IPaymentFailedPageProps) => {
    const query = await searchParams;

    const transactionId = query.transactionId as string;
    const amount = query.amount as string;

    return (
        <div className="min-h-screen bg-muted/30 py-12">
            <div className="container max-w-3xl space-y-6 mx-auto">
                {/* Header */}
                <div className="flex flex-col items-center text-center space-y-3">
                    <div className="flex h-14 w-14 items-center justify-center rounded-full bg-red-500/10">
                        <XCircle className="h-7 w-7 text-red-600" />
                    </div>

                    <h1 className="font-heading text-2xl font-semibold tracking-tight">
                        Payment Failed
                    </h1>

                    <p className="text-sm text-muted-foreground max-w-md">
                        Unfortunately, your payment could not be completed.
                    </p>
                </div>

                {/* Summary */}
                <Card className="rounded-2xl shadow-sm">
                    <CardContent className="p-6 space-y-4">
                        <div className="flex items-center gap-2 text-sm font-semibold">
                            <CreditCard size={16} />
                            Payment Details
                        </div>

                        <Separator />

                        <div className="space-y-3 text-sm">
                            <div className="flex justify-between">
                                <span className="text-muted-foreground">Transaction ID</span>
                                <span className="font-medium">{transactionId}</span>
                            </div>

                            <div className="flex justify-between">
                                <span className="text-muted-foreground">Amount</span>
                                <span className="font-medium">BDT {amount}</span>
                            </div>

                            <div className="flex justify-between items-center">
                                <span className="text-muted-foreground">Status</span>
                                <Badge className="bg-red-500/10 text-red-600">
                                    {TICKET_STATUS.FAILED}
                                </Badge>
                            </div>
                        </div>
                    </CardContent>
                </Card>

                {/* Help */}
                <Card className="rounded-2xl shadow-sm">
                    <CardContent className="p-6 flex gap-3 text-sm text-muted-foreground">
                        <AlertTriangle size={18} className="text-red-500 mt-0.5" />
                        <p>
                            No amount has been deducted. Please try again or contact support
                            if the issue persists.
                        </p>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
};

export default PaymentFailPage;