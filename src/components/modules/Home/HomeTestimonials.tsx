import { Quote } from "lucide-react";
import Image from "next/image";

const testimonials = [
    {
        content: "I moved to a new city and didn't know anyone. Through GatherUp, I found a weekly hiking group that has now become my closest circle of friends.",
        author: "David Miller",
        role: "Outdoor Enthusiast",
        image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=150",
    },
    {
        content: "Being a host is so rewarding! I organized a simple board game night and ended up with 10 people sharing laughs and great conversations. The payment system is seamless.",
        author: "Sophia Williams",
        role: "Community Host",
        image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=150",
    },
    {
        content: "The tech meetups here are high quality. It's much more personal than other platforms. I've found coding partners and even a mentor for my startup.",
        author: "Alex Rivera",
        role: "Software Engineer",
        image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=150",
    },
];

export default function Testimonials() {
    return (
        <section className="py-20 bg-background">
            <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
                <h2 className="text-3xl font-bold tracking-tight">Community Stories</h2>
                <p className="text-muted-foreground">Hear from people who turned shared interests into lasting friendships.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:px-6">
                {testimonials.map((t, i) => (
                    <div key={i} className="p-8 rounded-[2.5rem] bg-secondary/50 border border-border/40 relative">
                        <Quote className="w-10 h-10 text-primary/10 absolute top-6 right-8" />
                        <p className="text-foreground/80 leading-relaxed mb-8 italic">&quot;{t.content}&quot;</p>
                        <div className="flex items-center gap-4">
                            <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-primary/20">
                                <Image src={t.image} alt={t.author} fill className="object-cover" />
                            </div>
                            <div>
                                <h4 className="font-bold text-sm text-foreground">{t.author}</h4>
                                <p className="text-xs text-muted-foreground">{t.role}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}