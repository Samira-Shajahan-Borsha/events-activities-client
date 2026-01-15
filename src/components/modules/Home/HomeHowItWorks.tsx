import { Search, UserPlus, CalendarCheck } from "lucide-react";

const steps = [
  {
    id: 1,
    title: "Find an Activity",
    description: "Browse through hundreds of local events—from weekend hikes to tech meetups.",
    icon: Search,
  },
  {
    id: 2,
    title: "Join the Group",
    description: "Check participant profiles, see who's going, and secure your spot with one click.",
    icon: UserPlus,
  },
  {
    id: 3,
    title: "Meet & Enjoy",
    description: "Show up at the location, meet your new companions, and have a great time!",
    icon: CalendarCheck,
  },
];

export default function HowItWorks() {
  return (
    <section className="py-20 bg-teal-50/50 -mx-4 px-4 sm:-mx-8 sm:px-8 lg:-mx-16 lg:px-16 rounded-[3rem]">
      <div className="max-w-4xl mx-auto text-center mb-16 space-y-4">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground">
          Your next adventure is just 3 steps away
        </h2>
        <p className="text-muted-foreground text-lg">
          We’ve made it simple to find companions for the things you love doing.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative">
        {steps.map((step, index) => (
          <div key={step.id} className="relative flex flex-col items-center text-center space-y-6">
            <div className="w-20 h-20 rounded-3xl bg-white shadow-sm border border-teal-100 flex items-center justify-center relative z-10">
              <step.icon className="w-10 h-10 text-primary" />
              <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-primary text-white text-sm font-bold flex items-center justify-center shadow-lg">
                {step.id}
              </div>
            </div>
            <div className="space-y-2">
              <h3 className="text-xl font-bold text-foreground">{step.title}</h3>
              <p className="text-muted-foreground leading-relaxed">
                {step.description}
              </p>
            </div>
            
            {/* Visual connector for desktop */}
            {index < steps.length - 1 && (
              <div className="hidden md:block absolute top-10 left-[60%] w-full h-0.5 border-t-2 border-dashed border-teal-200" />
            )}
          </div>
        ))}
      </div>
    </section>
  );
}