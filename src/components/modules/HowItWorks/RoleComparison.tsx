import { CheckCircle2, Star, Layout } from "lucide-react";

export function RoleComparison() {
    return (
        <section className="mt-20 px-4 sm:px-0">
            {/* Minimal Header */}
            <div className="mb-12">
                <h2 className="text-2xl font-bold text-zinc-900">Choose Your Path</h2>
                <p className="text-sm text-muted-foreground mt-1">Whether you want to lead or join, we have you covered.</p>
            </div>

            <div className="grid md:grid-cols-2 gap-px bg-zinc-200 rounded-4xl overflow-hidden border border-zinc-200 shadow-sm">
                
                {/* Participant Side */}
                <div className="p-8 md:p-12 bg-white hover:bg-slate-50 transition-colors">
                    <div className="flex items-center gap-3 mb-8">
                        <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center text-primary">
                            <Star size={20} />
                        </div>
                        <h3 className="text-lg font-bold">As a Participant</h3>
                    </div>
                    
                    <ul className="grid gap-6">
                        {[
                            { title: 'Find Interests', desc: 'Browse events that match your exact hobbies.' },
                            { title: 'Join Instantly', desc: 'Secure your spot with one-click registration.' },
                            { title: 'Safe Payments', desc: 'Encrypted transactions via SSLCommerz.' },
                            { title: 'Share Feedback', desc: 'Rate hosts and help the community grow.' }
                        ].map((item) => (
                            <li key={item.title} className="flex gap-4">
                                <CheckCircle2 className="text-primary h-5 w-5 shrink-0 mt-0.5" />
                                <div>
                                    <p className="text-sm font-semibold text-zinc-800 leading-none">{item.title}</p>
                                    <p className="text-xs text-muted-foreground mt-1.5 leading-relaxed">{item.desc}</p>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Host Side */}
                <div className="p-8 md:p-12 bg-white hover:bg-slate-50 transition-colors">
                    <div className="flex items-center gap-3 mb-8">
                        <div className="w-10 h-10 bg-blue-50 rounded-xl flex items-center justify-center text-blue-600">
                            <Layout size={20} />
                        </div>
                        <h3 className="text-lg font-bold">As a Host</h3>
                    </div>
                    
                    <ul className="grid gap-6">
                        {[
                            { title: 'Create Events', desc: 'Easy tools to list your activity in minutes.' },
                            { title: 'Manage Guests', desc: 'Track participants and manage attendance.' },
                            { title: 'Earn Payouts', desc: 'Set ticket prices and get paid securely.' },
                            { title: 'Grow Reputation', desc: 'Build trust through verified user ratings.' }
                        ].map((item) => (
                            <li key={item.title} className="flex gap-4">
                                <CheckCircle2 className="text-blue-600 h-5 w-5 shrink-0 mt-0.5" />
                                <div>
                                    <p className="text-sm font-semibold text-zinc-800 leading-none">{item.title}</p>
                                    <p className="text-xs text-muted-foreground mt-1.5 leading-relaxed">{item.desc}</p>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>

            </div>
        </section>
    );
}