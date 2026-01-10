import { Metadata } from "next";
import Link from "next/link";
import { CalendarDays } from "lucide-react";
import RegisterForm from "@/components/register-form";

export const metadata: Metadata = {
  title: "Register | EventHub",
  description: "Create a new account to explore and join local events.",
};

export default function RegisterPage() {
  return (
    <div className="container relative flex min-h-screen flex-col items-center justify-center grid lg:max-w-none lg:grid-cols-1 lg:px-0">
      <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">

        {/* Header */}
        <div className="flex flex-col space-y-2 text-center">
          <div className="flex justify-center mb-4">
            <div className="rounded-full bg-primary/5 p-3">
              <CalendarDays className="h-8 w-8 text-primary" />
            </div>
          </div>

          <h1 className="text-2xl font-semibold tracking-tight">
            Create your account
          </h1>
          <p className="text-sm text-muted-foreground">
            Join events, meet new people, and explore activities
          </p>
        </div>

        {/* Client-side Register Form */}
        <RegisterForm />

        {/* Link to login */}
        <p className="px-8 text-center text-sm text-muted-foreground">
          <Link
            href="/login"
            className="hover:text-primary underline underline-offset-4"
          >
            Already have an account? Sign In
          </Link>
        </p>
      </div>
    </div>
  );
}

