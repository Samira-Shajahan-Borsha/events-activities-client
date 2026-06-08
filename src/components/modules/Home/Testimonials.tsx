import { Card, CardContent } from "@/components/ui/card";
import { Quote, Star } from "lucide-react";
import Image from "next/image";

const testimonials = [
    {
        id: 1,
        content: "I moved to a new city and didn't know anyone. This platform helped me find hiking buddies and now I have an amazing friend group! The hosts are so welcoming.",
        author: "Jessica Turner",
        role: "Member since 2024",
        avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=100&fit=crop&crop=face",
        rating: 5,
        event: "Weekend Hiking Group",
    },
    {
        id: 2,
        content: "As an introvert, joining group activities felt intimidating. But the small event sizes and interest-based matching made it so easy to connect with like-minded people.",
        author: "Marcus Johnson",
        role: "Member since 2023",
        avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=face",
        rating: 5,
        event: "Board Game Nights",
    },
    {
        id: 3,
        content: "I've hosted over 30 events and the platform makes it incredibly easy. The payment system is seamless and the community is genuinely engaged. Highly recommend!",
        author: "Priya Sharma",
        role: "Verified Host",
        avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&h=100&fit=crop&crop=face",
        rating: 5,
        event: "Cooking Classes",
    },
];

const Testimonials = () => {
    return (
        <section className="py-20 bg-muted/30">
            <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                        What Our Community Says
                    </h2>
                    <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
                        Real stories from real people who found their crew through our platform.
                    </p>
                </div>

                <div className="grid lg:grid-cols-3 gap-8">
                    {testimonials.map((testimonial) => (
                        <Card
                            key={testimonial.id}
                            className="relative border-border/50 hover:border-primary/30 transition-all duration-300 hover:shadow-lg"
                        >
                            <CardContent className="p-6 pt-8">
                                {/* Quote icon */}
                                <div className="absolute -top-4 left-6">
                                    <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center">
                                        <Quote className="w-5 h-5 text-primary-foreground" />
                                    </div>
                                </div>

                                {/* Rating */}
                                <div className="flex gap-1 mb-4">
                                    {[...Array(testimonial.rating)].map((_, i) => (
                                        <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                                    ))}
                                </div>

                                {/* Content */}
                                <p className="text-muted-foreground mb-6 leading-relaxed">
                                    &quot;{testimonial.content}&quot;
                                </p>

                                {/* Author */}
                                <div className="flex items-center gap-4">
                                    <Image
                                        src={testimonial.avatar}
                                        alt={testimonial.author}
                                        height={48}
                                        width={48}
                                        className="w-12 h-12 rounded-full object-cover"
                                    />
                                    <div>
                                        <p className="font-semibold text-foreground">{testimonial.author}</p>
                                        <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                                    </div>
                                </div>

                                {/* Event attended */}
                                <div className="mt-4 pt-4 border-t border-border">
                                    <p className="text-xs text-muted-foreground">
                                        Attended: <span className="text-primary font-medium">{testimonial.event}</span>
                                    </p>
                                </div>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
