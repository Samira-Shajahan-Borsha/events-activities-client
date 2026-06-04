"use client"
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

import {
    Send,
} from "lucide-react";
import { toast } from "sonner";


const ContactForm = () => {
    const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        toast.success(" Message sent! Thanks for reaching out. We'll get back to you within 24–48 hours.",
        );
        setForm({ name: "", email: "", subject: "", message: "" });
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-5">
            <div className="grid sm:grid-cols-2 gap-5">
                <div className="space-y-2">
                    <Label htmlFor="name">Full name</Label>
                    <Input
                        id="name"
                        placeholder="Jane Doe"
                        value={form.name}
                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                        required
                        className="h-11"
                    />
                </div>
                <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                        id="email"
                        type="email"
                        placeholder="you@example.com"
                        value={form.email}
                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                        required
                        className="h-11"
                    />
                </div>
            </div>
            <div className="space-y-2">
                <Label htmlFor="subject">Subject</Label>
                <Input
                    id="subject"
                    placeholder="How can we help?"
                    value={form.subject}
                    onChange={(e) => setForm({ ...form, subject: e.target.value })}
                    required
                    className="h-11"
                />
            </div>
            <div className="space-y-2">
                <Label htmlFor="message">Message</Label>
                <Textarea
                    id="message"
                    placeholder="Tell us a bit more..."
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    required
                    className="min-h-35"
                />
            </div>
            <Button type="submit" className="w-full h-11 text-base">
                <Send className="w-4 h-4" />
                Send Message
            </Button>
        </form>
    )
}

export default ContactForm