import { CalendarX2, MessageSquareHeart, ShieldCheck, Target } from "lucide-react";

const features = [
  {
    icon: ShieldCheck,
    title: "Verified Hosts & Secure Payments",
    description: "All hosts are verified and payments are processed securely. Your safety and trust are our top priorities.",
  },
  {
    icon: Target,
    title: "Interest-Based Matching",
    description: "Our smart algorithm connects you with events and people who share your passions and hobbies.",
  },
  {
    icon: MessageSquareHeart,
    title: "Real Reviews from Real Attendees",
    description: "Make informed decisions with authentic reviews and ratings from community members.",
  },
  {
    icon: CalendarX2,
    title: "Flexible Cancellation Policies",
    description: "Plans change, we get it. Enjoy flexible cancellation options for peace of mind.",
  },
];

const WhyChooseUs = () => {
  return (
    <section className="py-20 bg-background">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Why Choose Us
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We&apos;ve built a platform that puts community, safety, and great experiences first.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="group text-center p-6 rounded-2xl bg-card border border-border/50 hover:border-primary/30 transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
            >
              <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-linear-to-br from-primary/10 to-accent/10 flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
                <feature.icon className="w-8 h-8 text-primary" />
              </div>

              <h3 className="font-bold text-lg text-foreground mb-3">{feature.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;