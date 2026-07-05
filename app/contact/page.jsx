"use client";

import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export default function ContactPage() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm({
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  const onSubmit = async (data) => {
    try {
      await new Promise((resolve) => setTimeout(resolve, 500));
      toast.success("Message sent successfully. We will reply soon!");
      reset();
    } catch (error) {
      toast.error("Unable to send message. Please try again.");
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-950 py-20 dark:bg-slate-950 dark:text-slate-100">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mb-10 flex flex-col gap-6 rounded-[2rem] border border-slate-200/50 bg-white/95 p-8 shadow-[0_30px_80px_-40px_rgba(14,165,233,0.15)] dark:border-white/10 dark:bg-slate-900/90 dark:shadow-[0_30px_80px_-40px_rgba(14,165,233,0.35)] md:flex-row md:items-center md:justify-between">
          <div>
            <Badge variant="outline" className="bg-cyan-100/10 text-cyan-700 border-cyan-300/30 dark:bg-cyan-900/20 dark:text-cyan-300">
              Contact Us
            </Badge>
            <h1 className="mt-4 text-4xl font-bold tracking-tight text-slate-950 dark:text-white sm:text-5xl">
              Have a question or want premium support?
            </h1>
            <p className="mt-4 max-w-2xl text-lg leading-8 text-slate-600 dark:text-slate-400">
              Reach out anytime — our team is ready to help with onboarding, billing, and group expense setup.
            </p>
          </div>
          <Button asChild size="lg" className="bg-cyan-500 hover:bg-sky-600 text-white shadow-lg shadow-cyan-500/20">
            <Link href="/">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back Home
            </Link>
          </Button>
        </div>

        <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="space-y-8 rounded-[2rem] border border-slate-200/50 bg-white/95 p-10 shadow-xl shadow-slate-950/10 dark:border-white/10 dark:bg-slate-900/95 dark:shadow-slate-950/30">
            <div className="space-y-3">
              <h2 className="text-2xl font-semibold text-slate-950 dark:text-white">Get in touch</h2>
              <p className="text-slate-600 dark:text-slate-400">
                Whether you need help setting up a group, want to report an issue, or just want to learn more, we’re here to help.
              </p>
            </div>

            <div className="grid gap-6 sm:grid-cols-2">
              <div className="rounded-[1.75rem] border border-slate-200/50 bg-slate-50/95 p-6 dark:border-white/10 dark:bg-slate-950/90">
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-600 dark:text-cyan-300">Email</p>
                <p className="mt-3 text-base text-slate-900 dark:text-slate-200">support@billbuddy.com</p>
              </div>
              <div className="rounded-[1.75rem] border border-slate-200/50 bg-slate-50/95 p-6 dark:border-white/10 dark:bg-slate-950/90">
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-600 dark:text-cyan-300">Phone</p>
                <p className="mt-3 text-base text-slate-900 dark:text-slate-200">+91 98765 43210</p>
              </div>
            </div>

            <div className="rounded-[1.75rem] border border-slate-200/50 bg-slate-50/95 p-6 dark:border-white/10 dark:bg-slate-950/90">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-600 dark:text-cyan-300">Office</p>
              <p className="mt-3 text-base text-slate-900 dark:text-slate-200">Kota, India</p>
            </div>
          </div>

          <div className="rounded-[2rem] border border-slate-200/50 bg-white/95 p-10 shadow-xl shadow-slate-950/10 ring-1 ring-slate-200/50 dark:border-white/10 dark:bg-slate-950/95 dark:shadow-slate-950/30 dark:ring-white/10">
            <div className="space-y-4">
              <div className="inline-flex rounded-full bg-cyan-500/10 px-4 py-2 text-sm font-semibold text-cyan-700 dark:text-cyan-300">
                Contact form
              </div>
              <div>
                <h3 className="text-2xl font-semibold text-slate-950 dark:text-white">Send us a message</h3>
                <p className="mt-2 text-slate-600 dark:text-slate-400">
                  Fill in the form below and we’ll get back to you as soon as possible.
                </p>
              </div>
            </div>

            <form onSubmit={handleSubmit(onSubmit)} className="mt-8 grid gap-5">
              <div className="space-y-2">
                <label className="block text-sm font-semibold text-slate-700 dark:text-slate-200" htmlFor="name">
                  Name
                </label>
                <input
                  id="name"
                  type="text"
                  placeholder="Your name"
                  {...register("name", { required: "Please enter your name" })}
                  className="w-full rounded-2xl border border-slate-200/50 bg-slate-50 px-4 py-3 text-slate-950 outline-none transition focus:border-cyan-400 focus:ring-2 focus:ring-cyan-500/20 dark:border-white/10 dark:bg-slate-950/90 dark:text-slate-100"
                />
                {errors.name && <p className="text-sm text-rose-400">{errors.name.message}</p>}
              </div>

              <div className="space-y-2">
                <label className="block text-sm font-semibold text-slate-700 dark:text-slate-200" htmlFor="email">
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  placeholder="you@example.com"
                  {...register("email", {
                    required: "Please enter your email",
                    pattern: {
                      value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                      message: "Enter a valid email address",
                    },
                  })}
                  className="w-full rounded-2xl border border-slate-200/50 bg-slate-50 px-4 py-3 text-slate-950 outline-none transition focus:border-cyan-400 focus:ring-2 focus:ring-cyan-500/20 dark:border-white/10 dark:bg-slate-950/90 dark:text-slate-100"
                />
                {errors.email && <p className="text-sm text-rose-400">{errors.email.message}</p>}
              </div>

              <div className="space-y-2">
                <label className="block text-sm font-semibold text-slate-700 dark:text-slate-200" htmlFor="message">
                  Message
                </label>
                <textarea
                  id="message"
                  rows="5"
                  placeholder="Tell us how we can help"
                  {...register("message", {
                    required: "Please share your message",
                    minLength: {
                      value: 10,
                      message: "Message should be at least 10 characters",
                    },
                  })}
                  className="w-full rounded-2xl border border-slate-200/50 bg-slate-50 px-4 py-3 text-slate-950 outline-none transition focus:border-cyan-400 focus:ring-2 focus:ring-cyan-500/20 dark:border-white/10 dark:bg-slate-950/90 dark:text-slate-100"
                />
                {errors.message && <p className="text-sm text-rose-400">{errors.message.message}</p>}
              </div>

              <Button
                type="submit"
                size="lg"
                className="mt-3 w-full bg-cyan-500 hover:bg-sky-600 text-white shadow-lg shadow-cyan-500/20"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
