import { ShieldCheck, Zap, Lock } from "lucide-react";

export function SecuritySection() {
    const features = [
        { title: "Secure Payments", desc: "Integrated with industry-leading gateways like SSLCommerz and Stripe.", icon: ShieldCheck },
        { title: "Verified Hosts", desc: "Every host undergoes a basic verification process to ensure community safety.", icon: Lock },
        { title: "Instant Access", desc: "Get your ticket and event details immediately after joining.", icon: Zap },
    ];

    return (
        <section className="max-w-7xl mx-auto px-4 mt-32">
            <div className="text-center mb-16">
                <h2 className="text-3xl font-bold">Safe. Secure. Social.</h2>
                <p className="text-muted-foreground mt-2">Your safety and privacy are our top priorities.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                {features.map((f) => (
                    <div key={f.title} className="flex flex-col items-center text-center group">
                        <div className="w-16 h-16 rounded-full bg-primary/5 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300 mb-6">
                            <f.icon size={32} />
                        </div>
                        <h3 className="text-lg font-bold mb-2">{f.title}</h3>
                        <p className="text-sm text-muted-foreground">{f.desc}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}