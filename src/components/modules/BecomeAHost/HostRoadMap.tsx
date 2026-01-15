import { UserPlus, FileEdit, ShieldCheck, Rocket } from "lucide-react";

export function HostRoadMap() {
    const steps = [
        { 
            icon: UserPlus, 
            title: "Create account", 
            desc: "Join our community as a member to start exploring events.",
            color: "text-primary bg-primary/10"
        },
        { 
            icon: FileEdit, 
            title: "Complete Profile", 
            desc: "Add your hobbies and a friendly bio to stand out.",
            color: "text-emerald-600 bg-emerald-50"
        },
        { 
            icon: ShieldCheck, 
            title: "Get Verified", 
            desc: "Admins review your application to ensure community safety.",
            color: "text-blue-600 bg-blue-50"
        },
        { 
            icon: Rocket, 
            title: "Launch Event", 
            desc: "Start hosting and connecting with like-minded people.",
            color: "text-amber-600 bg-amber-50"
        },
    ];

    return (
        <section className="mt-16">
            {/* Standard Header to match your other pages */}
            <div className="mb-10">
                <h2 className="text-xl font-bold text-zinc-900 tracking-tight">The Path to Hosting</h2>
                <p className="text-base text-muted-foreground mt-1">Simple steps to start leading your own activities.</p>
            </div>

            {/* Grid matches your Benefits section exactly */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {steps.map((item) => (
                    <div 
                        key={item.title} 
                        className="p-6 bg-white border border-zinc-200 rounded-3xl shadow-sm transition-all hover:shadow-md"
                    >
                        {/* Icon Container matches Benefits style */}
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
    );
}