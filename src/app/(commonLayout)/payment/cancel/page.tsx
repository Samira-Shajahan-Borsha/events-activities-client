import {
  MinusCircle,
  CreditCard,
  Info,
} from "lucide-react";

import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { TICKET_STATUS } from "@/types/ticket.interface";

interface IPaymentCancelPageProps {
  params: Promise<{ slug: string }>;
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}

const PaymentCancelPage = async ({ searchParams }: IPaymentCancelPageProps) => {
  const query = await searchParams;

  const transactionId = query.transactionId as string;
  const message = query.message as string;
  const amount = query.amount as string;
  const status = query.status as string;

  return (
    <div className="min-h-screen bg-muted/30 py-12">
      <div className="container max-w-3xl space-y-6 mx-auto">
        {/* Header */}
        <div className="flex flex-col items-center text-center space-y-3">
          <div className="flex h-14 w-14 items-center justify-center rounded-full bg-yellow-500/10">
            <MinusCircle className="h-7 w-7 text-yellow-600" />
          </div>

          <h1 className="font-heading text-2xl font-semibold tracking-tight">
            Payment Cancelled
          </h1>

          <p className="text-sm text-muted-foreground max-w-md">
           You cancelled the payment process.
          </p>
        </div>

        {/* Summary */}
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
                <span className="text-muted-foreground">Amount</span>
                <span className="font-medium">BDT {amount}</span>
              </div>

              <div className="flex justify-between items-center">
                <span className="text-muted-foreground">Status</span>
                <Badge className="bg-yellow-500/10 text-yellow-600">
                  {TICKET_STATUS.CANCELED}
                </Badge>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Info */}
        <Card className="rounded-2xl shadow-sm">
          <CardContent className="p-6 flex gap-3 text-sm text-muted-foreground">
            <Info size={18} className="text-yellow-500 mt-0.5" />
            <p>
              No payment was made. You can safely try again whenever you are ready.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default PaymentCancelPage;
