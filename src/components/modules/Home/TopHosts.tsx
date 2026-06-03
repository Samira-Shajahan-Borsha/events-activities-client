import { Star, Calendar, ArrowRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

const hosts = [
    {
        id: 1,
        name: "Sarah Mitchell",
        avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop&crop=face",
        rating: 4.9,
        reviews: 127,
        eventsHosted: 45,
        specialties: ["Outdoor", "Fitness"],
        verified: true,
    },
    {
        id: 2,
        name: "David Chen",
        avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
        rating: 4.8,
        reviews: 98,
        eventsHosted: 32,
        specialties: ["Tech", "Gaming"],
        verified: true,
    },
    {
        id: 3,
        name: "Emily Rodriguez",
        avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
        rating: 4.9,
        reviews: 156,
        eventsHosted: 58,
        specialties: ["Music", "Art"],
        verified: true,
    },
    {
        id: 4,
        name: "Michael Park",
        avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
        rating: 4.7,
        reviews: 84,
        eventsHosted: 28,
        specialties: ["Food", "Culture"],
        verified: true,
    },
];

const TopHosts = () => {
    return (
        <section className="py-20 bg-background">
            <div className="container mx-auto px-4 lg:px-0 max-w-342">
                <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-12">
                    <div>
                        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                            Top-Rated Hosts
                        </h2>
                        <p className="text-base md:text-lg text-muted-foreground max-w-2xl">
                            Meet our community&apos;s favorite hosts who consistently deliver amazing experiences.
                        </p>
                    </div>
                    <Button variant="outline" className="mt-4 md:mt-0" asChild>
                        <Link href="/become-a-host" className="flex items-center">
                            Become a Host
                            <ArrowRight className="ml-2 w-4 h-4" />
                        </Link>
                    </Button>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {hosts.map((host) => (
                        <Card
                            key={host.id}
                            className="group text-center border-border/50 hover:border-primary/30 transition-all duration-300 hover:shadow-lg"
                        >
                            <CardContent className="p-6">
                                <div className="relative inline-block mb-4">
                                    <Image
                                        src={host.avatar}
                                        alt={host.name}
                                        width={96}
                                        height={96}
                                        loading="eager"
                                        className="w-24 h-24 rounded-full object-cover border-4 border-primary/20 transition-transform duration-300 group-hover:scale-105"
                                    />
                                    {/* {host.verified && (
                                        <div className="absolute -bottom-1 -right-1 w-7 h-7 bg-primary rounded-full flex items-center justify-center">
                                            <svg className="w-4 h-4 text-primary-foreground" fill="currentColor" viewBox="0 0 20 20">
                                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                            </svg>
                                        </div>
                                    )} */}
                                </div>

                                <h3 className="font-bold text-lg text-foreground mb-2">{host.name}</h3>

                                <div className="flex items-center justify-center gap-1 mb-3">
                                    <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
                                    <span className="font-semibold text-foreground">{host.rating}</span>
                                    <span className="text-muted-foreground text-sm">({host.reviews} reviews)</span>
                                </div>

                                <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground mb-4">
                                    <Calendar className="w-4 h-4" />
                                    <span>{host.eventsHosted} events hosted</span>
                                </div>

                                <div className="flex flex-wrap justify-center gap-2">
                                    {host.specialties.map((specialty) => (
                                        <Badge key={specialty} variant="secondary" className="text-xs">
                                            {specialty}
                                        </Badge>
                                    ))}
                                </div>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TopHosts;
