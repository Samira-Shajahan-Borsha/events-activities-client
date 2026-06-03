import { Search, UserPlus, PartyPopper } from "lucide-react";

const steps = [
    {
        icon: Search,
        step: "01",
        title: "Discover",
        description: "Browse events by interest, location, or date. Find activities that match your vibe and schedule.",
    },
    {
        icon: UserPlus,
        step: "02",
        title: "Connect",
        description: "Join activities and connect with like-minded people. See who's attending and start conversations.",
    },
    {
        icon: PartyPopper,
        step: "03",
        title: "Experience",
        description: "Attend events and build lasting connections. Rate hosts and share your experiences with the community.",
    },
];

const HowItWorks = () => {
    return (
        <section className="py-12 md:py-20 bg-background">
            <div className="container mx-auto px-4 lg:px-0 max-w-342">
                <div className="text-center mb-12 md:mb-16">
                    <h2 className="text-2xl md:text-4xl font-bold text-foreground mb-3 md:mb-4">
                        How It Works
                    </h2>
                    <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto px-4">
                        Getting started is easy. Find your next adventure in three simple steps.
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-6 md:gap-8 lg:gap-12 relative">
                    <div className="hidden md:block absolute top-16 left-1/4 right-1/4 h-0.5 bg-linear-to-r from-primary/20 via-primary to-primary/20" />

                    {steps.map((step) => (
                        <div key={step.title} className="relative group">
                            {/* Mobile: Horizontal layout */}
                            <div className="md:hidden flex gap-4 items-start p-4 rounded-2xl bg-linear-to-br from-primary/5 to-accent/5 border border-primary/10">
                                <div className="relative shrink-0">
                                    <div className="w-16 h-16 rounded-full bg-linear-to-br from-primary/10 to-accent/10 flex items-center justify-center">
                                        <div className="w-14 h-14 rounded-full bg-card border-2 border-primary/20 flex items-center justify-center shadow-md">
                                            <step.icon className="w-7 h-7 text-primary" />
                                        </div>
                                    </div>
                                    <span className="absolute -top-1 -right-1 w-7 h-7 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold text-xs shadow-lg">
                                        {step.step}
                                    </span>
                                </div>
                                <div className="flex-1 text-left">
                                    <h3 className="text-lg font-bold text-foreground mb-2">{step.title}</h3>
                                    <p className="text-sm text-muted-foreground leading-relaxed">
                                        {step.description}
                                    </p>
                                </div>
                            </div>

                            {/* Desktop: Vertical layout (original) */}
                            <div className="hidden md:block text-center">
                                <div className="relative z-10 mb-6">
                                    <div className="w-32 h-32 mx-auto rounded-full bg-linear-to-br from-primary/10 to-accent/10 flex items-center justify-center transition-transform duration-300 group-hover:scale-105">
                                        <div className="w-24 h-24 rounded-full bg-card border-2 border-primary/20 flex items-center justify-center shadow-lg">
                                            <step.icon className="w-10 h-10 text-primary" />
                                        </div>
                                    </div>
                                    <span className="absolute -top-2 right-1/4 w-10 h-10 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold text-sm shadow-lg">
                                        {step.step}
                                    </span>
                                </div>

                                <h3 className="text-xl font-bold text-foreground mb-3">{step.title}</h3>
                                <p className="text-muted-foreground max-w-xs mx-auto leading-relaxed">
                                    {step.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default HowItWorks;