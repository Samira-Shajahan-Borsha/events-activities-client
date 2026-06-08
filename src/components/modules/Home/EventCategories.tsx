import {
    GraduationCapIcon,
    Lightbulb,
    Network,
    PartyPopper,
    Presentation,
    Users
} from "lucide-react";

import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";

const categories = [
    {
        name: "Workshop",
        icon: GraduationCapIcon,
        color: "bg-teal-500/10 text-teal-600 dark:text-teal-400",
    },
    {
        name: "Seminar",
        icon: Presentation,
        color: "bg-blue-500/10 text-blue-600 dark:text-blue-400",
    },
    {
        name: "Meetup",
        icon: Users,
        color: "bg-purple-500/10 text-purple-600 dark:text-purple-400",
    },
    {
        name: "Networking",
        icon: Network,
        color: "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400",
    },
    {
        name: "Festival",
        icon: PartyPopper,
        count: 21,
        color: "bg-fuchsia-500/10 text-fuchsia-600 dark:text-fuchsia-400",
    },
    {
        name: "Pitch",
        icon: Lightbulb,
        count: 14,
        color: "bg-indigo-500/10 text-indigo-600 dark:text-indigo-400",
    },
    /* {
        name: "Outdoor",
        icon: Mountain,
        color: "bg-orange-500/10 text-orange-600 dark:text-orange-400",
    },
    {
        name: "Music",
        icon: Music,
        color: "bg-rose-500/10 text-rose-600 dark:text-rose-400",
    },
    {
        name: "Food & Experiences",
        icon: UtensilsCrossed,
        color: "bg-amber-500/10 text-amber-600 dark:text-amber-400",
    },
    {
        name: "Wellness",
        icon: HeartPulse,
        color: "bg-pink-500/10 text-pink-600 dark:text-pink-400",
    }, */
];

const EventCategories = () => {
    return (
        <section className="py-20 bg-muted/30">
            <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                        Explore by Category
                    </h2>
                    <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
                        Find events that match your interests. From outdoor adventures to cozy game nights,
                        there&apos;s something for everyone.
                    </p>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
                    {categories.map((category) => (
                        <Link href={`/explore-events?type=${category.name}`} key={category.name}>
                            <Card
                                key={category.name}
                                className="group transition-all duration-300 hover:shadow-lg hover:-translate-y-1 border-border/50 hover:border-primary/30"
                            >
                                <CardContent className="text-center">
                                    <div className={`w-14 h-14 rounded-xl ${category.color} flex items-center justify-center mx-auto mb-4 transition-transform duration-300 group-hover:scale-110`}>
                                        <category.icon className="w-7 h-7" />
                                    </div>
                                    <h3 className="font-semibold text-foreground mb-1">{category.name}</h3>
                                </CardContent>
                            </Card>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default EventCategories;