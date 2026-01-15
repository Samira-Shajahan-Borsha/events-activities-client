import { CreditCard, Wallet, BarChart3 } from "lucide-react";

export function HostEarnings() {
    return (
        <section className="mt-24 p-8 md:p-12 bg-white rounded-[2rem] border border-zinc-200">
            <div className="grid md:grid-cols-2 gap-12 items-center">
                <div>
                    <h2 className="text-xl font-bold text-zinc-900 mb-4">Monetize Your Skills</h2>
                    <p className="text-sm text-muted-foreground leading-relaxed mb-6">
                        Set your own ticket prices and receive payouts directly to your account.
                        Our platform handles the secure transactions so you can focus on the event.
                    </p>
                    <div className="space-y-4">
                        {[
                            { icon: Wallet, text: "Automated Payouts via SSLCommerz" },
                            { icon: BarChart3, text: "Track Revenue in your Dashboard" },
                            { icon: CreditCard, text: "Low Platform Service Fees" }
                        ].map((item, i) => (
                            <div key={i} className="flex items-center gap-3 text-xs font-medium text-zinc-700">
                                <item.icon className="text-primary h-4 w-4" /> {item.text}
                            </div>
                        ))}
                    </div>
                </div>
                <div className="bg-slate-50 rounded-2xl p-6 border border-dashed border-zinc-300 flex flex-col items-center justify-center text-center">
                    <p className="text-xs font-bold text-primary uppercase tracking-widest mb-2">Potential Earnings</p>
                    <p className="text-3xl font-extrabold text-zinc-900">৳ 5,000+</p>
                    <p className="text-[10px] text-muted-foreground mt-2 italic">per successful workshop or group event</p>
                </div>
            </div>
        </section>
    );
}