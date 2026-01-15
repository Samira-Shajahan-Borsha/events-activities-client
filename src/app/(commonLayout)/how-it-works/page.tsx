import HowItWorksHero from "@/components/modules/HowItWorks/HowItWorksHero";
import { RoleComparison } from "@/components/modules/HowItWorks/RoleComparison";
import { SecuritySection } from "@/components/modules/HowItWorks/SecuritySection";
import StepCard from "@/components/modules/HowItWorks/StepCard";
import { CalendarPlus, CreditCard, User, Users } from "lucide-react";

const steps = [
    {
        title: "Create Your Profile",
        description: "Sign up and list your interests. Whether it's hiking, coding, or concerts, let the community know what you love.",
        icon: User,
        color: "bg-blue-50 text-blue-600"
    },
    {
        title: "Find or Host an Event",
        description: "Browse existing events or create your own. Set your requirements, date, and location in just a few clicks.",
        icon: CalendarPlus,
        color: "bg-primary/10 text-primary"
    },
    {
        title: "Secure Your Spot",
        description: "Join events with a simple click. For paid events, our secure payment gateway ensures your transaction is safe.",
        icon: CreditCard,
        color: "bg-amber-50 text-amber-600"
    },
    {
        title: "Meet & Experience",
        description: "Show up at the location, meet your new companions, and enjoy the activity. Don't forget to rate your host!",
        icon: Users,
        color: "bg-green-50 text-green-600"
    }
];

export default function HowItWorksPage() {
    return (
        <main className="min-h-screen pb-20">
            <HowItWorksHero />
            <section className="max-w-7xl mx-auto px-6 md:px-0 mt-20">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold tracking-tight">Simple 4-Step Process</h2>
                    <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
                        We&apos;ve streamlined the journey from online discovery to real-world connection.
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {steps.map((step, index) => (
                        <StepCard key={step.title} {...step} number={index + 1} />
                    ))}
                </div>
            </section>
            <RoleComparison />
            <SecuritySection />
        </main>
    );
}