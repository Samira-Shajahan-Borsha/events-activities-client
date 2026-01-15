import { ShieldCheck, BadgeDollarSign, Users, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { BecomeAHostHero } from "@/components/modules/BecomeAHost/BecomeAHostHero";
import { HostEarnings } from "@/components/modules/BecomeAHost/HostEarnings";
import { HostRoadMap } from "@/components/modules/BecomeAHost/HostRoadMap";

export default function BecomeAHostPage() {
    const benefits = [
        {
            title: "Build Your Community",
            desc: "Connect with people who share your passion for sports, tech, or art.",
            icon: Users,
            color: "text-primary bg-primary/10"
        },
        {
            title: "Earn Extra Income",
            desc: "Set ticket prices for your specialized workshops or social events.",
            icon: BadgeDollarSign,
            color: "text-green-600 bg-green-50"
        },
        {
            title: "Safe & Secure",
            desc: "Automated payments via SSLCommerz and verified participant lists.",
            icon: ShieldCheck,
            color: "text-blue-600 bg-blue-50"
        },
        {
            title: "Professional Profile",
            desc: "Get rated by your attendees and build a reputation as a top host.",
            icon: Sparkles,
            color: "text-amber-600 bg-amber-50"
        }
    ];

    return (
        <div className="pb-20 px-6 md:px-0">
            <BecomeAHostHero />

            <HostRoadMap />

            <HostEarnings />
            {/* Benefits Grid */}
            <section className="mt-20">
                {/* --- Section Title & Description --- */}
                <div className="mb-10">
                    <h2 className="text-xl font-bold text-zinc-900 tracking-tight">
                        Why host on EventHub?
                    </h2>
                    <p className="text-base text-muted-foreground mt-1 max-w-xl leading-relaxed">
                        Join a community of organizers who are bridging the gap between online discovery
                        and meaningful real-world interactions.
                    </p>
                </div>

                {/* --- Grid Layout --- */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {benefits.map((item) => (
                        <div
                            key={item.title}
                            className="p-6 bg-white border border-zinc-200 rounded-[1.5rem] shadow-sm hover:shadow-md transition-all duration-300"
                        >
                            <div className={`w-10 h-10 rounded-xl flex items-center justify-center mb-4 ${item.color}`}>
                                <item.icon size={20} />
                            </div>
                            <h3 className="text-sm font-bold text-zinc-800 mb-2">
                                {item.title}
                            </h3>
                            <p className="text-xs text-muted-foreground leading-relaxed">
                                {item.desc}
                            </p>
                        </div>
                    ))}
                </div>
            </section>



            {/* Application Section - Dark Theme for Contrast */}
            <section className="mt-16">
                <div className="bg-primary/[0.03] border border-primary/10 rounded-[2.5rem] p-8 md:p-12 relative overflow-hidden">
                    <div className="relative z-10 max-w-xl">
                        <h2 className="text-xl md:text-2xl font-bold text-zinc-900 mb-4">Ready to start hosting?</h2>
                        <p className="text-muted-foreground text-sm mb-8 leading-relaxed">
                            Once you apply, our admins will review your profile. Please ensure
                            your interests and bio are fully updated before submitting.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4">
                            <Link href="/register">
                                <Button className="rounded-xl px-8 h-12 text-sm font-bold bg-primary hover:bg-primary/90">
                                    Apply for Host Role
                                </Button>
                            </Link>
                        </div>
                    </div>
                    {/* Subtle decorative glow */}
                    <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 blur-[80px] rounded-full -mr-32 -mt-32" />
                </div>
            </section>

            {/* <HostSafety /> */}
        </div>
    );
}