import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import { FEATURES, STEPS, TESTIMONIALS } from "@/lib/landing";

export default function LandingPage() {
  return (
    <div className="flex flex-col pt-16">
      {/* ───── Hero ───── */}
      <section className="relative overflow-hidden pt-24 pb-24 bg-slate-100 text-slate-950 dark:bg-slate-950 dark:text-slate-100">
        <div className="absolute inset-x-0 top-0 h-72 bg-gradient-to-r from-white via-cyan-100 to-slate-200 opacity-90 dark:from-slate-900 dark:via-cyan-950 dark:to-slate-900" />
        <div className="container relative mx-auto grid gap-12 lg:grid-cols-[1.05fr_0.95fr] items-center px-4 md:px-6">
          <div className="space-y-8 text-center lg:text-left">
            <div className="inline-flex items-center gap-3 rounded-full border border-cyan-500/20 bg-cyan-500/10 px-4 py-2 text-sm font-semibold text-slate-950 dark:text-cyan-200 dark:border-cyan-400/20 dark:bg-cyan-500/10">
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-cyan-500 text-xs font-bold text-white shadow-sm">
                BB
              </span>
              Build better expense habits with BillBuddy
            </div>

            <div className="space-y-5">
              <h1 className="text-4xl font-bold tracking-tight text-slate-950 dark:text-white sm:text-5xl md:text-6xl">
                Split Smart.
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-sky-500">Settle Easy.</span>
              </h1>
              <p className="max-w-xl text-base leading-8 text-slate-600 dark:text-slate-300 md:text-lg">
                BillBuddy helps groups split expenses, track payments, and settle up without confusion. Stay organized with a premium app designed for teams, trips, and roommates.
              </p>
            </div>

            <div className="flex flex-col gap-4 sm:flex-row sm:justify-start">
              <Button asChild size="lg" className="bg-cyan-500 hover:bg-sky-600 text-white shadow-lg shadow-cyan-500/20">
                <Link href="/dashboard">
                  Get Started
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-slate-700 text-slate-200 hover:border-cyan-400 hover:text-white hover:bg-slate-900/70">
                <Link href="#features">Learn More</Link>
              </Button>
            </div>

            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              <div className="rounded-[1.75rem] border border-slate-200 bg-white/95 p-5 text-left shadow-xl shadow-slate-950/10 dark:border-slate-800 dark:bg-slate-900/90 dark:text-slate-100 dark:shadow-slate-950/20">
                <p className="text-sm font-semibold text-slate-950 dark:text-white">Create Groups</p>
                <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">Organize trips, roommates, and events.</p>
              </div>
              <div className="rounded-[1.75rem] border border-slate-200 bg-white/95 p-5 text-left shadow-xl shadow-slate-950/10 dark:border-slate-800 dark:bg-slate-900/90 dark:text-slate-100 dark:shadow-slate-950/20">
                <p className="text-sm font-semibold text-slate-950 dark:text-white">Add Expenses</p>
                <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">Split bills exactly how you want.</p>
              </div>
              <div className="rounded-[1.75rem] border border-slate-200 bg-white/95 p-5 text-left shadow-xl shadow-slate-950/10 dark:border-slate-800 dark:bg-slate-900/90 dark:text-slate-100 dark:shadow-slate-950/20">
                <p className="text-sm font-semibold text-slate-950 dark:text-white">Track Balances</p>
                <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">See who owes what instantly.</p>
              </div>
              <div className="rounded-[1.75rem] border border-slate-200 bg-white/95 p-5 text-left shadow-xl shadow-slate-950/10 dark:border-slate-800 dark:bg-slate-900/90 dark:text-slate-100 dark:shadow-slate-950/20">
                <p className="text-sm font-semibold text-slate-950 dark:text-white">Settle Instantly</p>
                <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">Clear payments with confidence.</p>
              </div>
            </div>
          </div>

          <div className="relative mx-auto max-w-[40rem]">
            <div className="absolute -left-10 top-10 hidden h-28 w-28 rounded-full bg-cyan-500/15 blur-3xl md:block" />
            <div className="absolute -right-10 bottom-10 hidden h-32 w-32 rounded-full bg-sky-500/10 blur-3xl md:block" />

            <div className="relative overflow-hidden rounded-[3rem] border border-slate-200 bg-white/95 p-6 shadow-[0_80px_140px_-50px_rgba(56,189,248,0.18)] backdrop-blur-xl dark:border-white/10 dark:bg-slate-950/95 dark:shadow-[0_80px_140px_-50px_rgba(56,189,248,0.25)]">
              <div className="absolute inset-0 rounded-[2.5rem] bg-[radial-gradient(circle_at_top_left,_rgba(34,211,238,0.18),_transparent_35%),radial-gradient(circle_at_bottom_right,_rgba(59,130,246,0.12),_transparent_30%)]" />
              <div className="relative rounded-[2.25rem] border border-slate-200 bg-slate-100/90 p-5 shadow-[0_20px_60px_-30px_rgba(15,23,42,0.15)] dark:border-slate-800 dark:bg-slate-950/95 dark:shadow-[0_20px_60px_-30px_rgba(15,23,42,0.6)]">
                <div className="absolute inset-0 rounded-[2rem] bg-gradient-to-br from-white/40 via-transparent to-slate-100/40 dark:from-slate-900/30 dark:to-slate-950/20" />
                <Image
                  src="/hero.png"
                  width={980}
                  height={650}
                  alt="BillBuddy illustration"
                  className="relative rounded-[2rem] object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ───── Features ───── */}
      <section id="features" className="bg-slate-50 py-24 text-slate-950 dark:bg-slate-950 dark:text-slate-100">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <Badge variant="outline" className="bg-cyan-100/10 text-cyan-700 border-cyan-300/30 dark:bg-cyan-900/20 dark:text-cyan-300">
            Features
          </Badge>
          <h2 className="mt-2 text-3xl font-bold tracking-tight text-slate-950 dark:text-white md:text-4xl">
            Everything you need to split expenses
          </h2>
          <p className="mx-auto mt-3 max-w-[700px] text-slate-600 dark:text-slate-400 md:text-xl/relaxed">
            Our platform provides all the tools you need to handle shared
            expenses with ease.
          </p>

          <div className="mx-auto mt-12 grid max-w-5xl gap-6 md:grid-cols-2 lg:grid-cols-3">
            {FEATURES.map(({ title, Icon, description }) => (
              <Card
                key={title}
                className="group relative overflow-hidden rounded-[2rem] border border-slate-200/50 bg-white/90 p-8 text-center shadow-[0_30px_80px_-40px_rgba(14,165,233,0.12)] transition-transform duration-500 hover:-translate-y-4 hover:shadow-2xl hover:shadow-cyan-500/15 dark:border-white/10 dark:bg-slate-900/95 dark:shadow-[0_30px_80px_-40px_rgba(14,165,233,0.25)]"
              >
                <div className="absolute inset-x-8 top-6 h-24 rounded-full bg-cyan-500/8 blur-3xl opacity-70 transition-opacity duration-500 group-hover:opacity-100" />
                <div className="relative z-10 flex h-14 w-14 items-center justify-center rounded-full bg-slate-100/95 p-4 text-cyan-500 shadow-md shadow-cyan-500/10 dark:bg-slate-950/95 dark:text-cyan-400">
                  <Icon className="h-6 w-6" />
                </div>

                <h3 className="relative z-10 text-xl font-semibold text-slate-950 dark:text-white">{title}</h3>
                <p className="relative z-10 max-w-xs text-sm leading-7 text-slate-600 dark:text-slate-400">{description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* ───── How it works ───── */}
      <section id="how-it-works" className="bg-slate-50 py-24 text-slate-950 dark:bg-slate-900 dark:text-slate-100">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <Badge variant="outline" className="bg-cyan-100/10 text-cyan-700 border-cyan-300/30 dark:bg-cyan-900/20 dark:text-cyan-300">
            How It Works
          </Badge>
          <h2 className="mt-2 text-3xl font-bold tracking-tight text-slate-950 dark:text-white md:text-4xl">
            Splitting expenses has never been easier
          </h2>
          <p className="mx-auto mt-3 max-w-[700px] text-slate-600 dark:text-slate-400 md:text-xl/relaxed">
            Follow these simple steps to start tracking and splitting expenses
            with friends.
          </p>

          <div className="mx-auto mt-12 grid max-w-5xl gap-8 md:grid-cols-3">
            {STEPS.map(({ label, title, description }) => (
              <div
                key={label}
                className="group relative overflow-hidden rounded-[2rem] border border-slate-200/50 bg-white/90 p-8 text-center shadow-[0_30px_90px_-35px_rgba(14,165,233,0.12)] transition-transform duration-500 hover:-translate-y-3 hover:shadow-2xl hover:shadow-cyan-500/15 dark:border-white/10 dark:bg-slate-950/95 dark:shadow-[0_30px_90px_-35px_rgba(14,165,233,0.25)]"
              >
                <div className="absolute left-1/2 top-0 h-24 w-24 -translate-x-1/2 rounded-full bg-sky-500/10 blur-3xl" />
                <div className="relative z-10 flex h-14 w-14 items-center justify-center rounded-full bg-cyan-500/10 text-xl font-bold text-cyan-300 shadow-sm">
                  {label}
                </div>
                <h3 className="relative z-10 text-xl font-semibold text-slate-950 dark:text-white">{title}</h3>
                <p className="relative z-10 text-slate-600 dark:text-slate-400 text-center">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ───── Testimonials ───── */}
      <section className="bg-slate-50 py-20 text-slate-950 dark:bg-slate-950 dark:text-slate-100">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <Badge variant="outline" className="bg-cyan-100/10 text-cyan-700 border-cyan-300/30 dark:bg-cyan-900/20 dark:text-cyan-300">
            Testimonials
          </Badge>
          <h2 className="mt-2 text-3xl font-bold tracking-tight text-slate-950 dark:text-white md:text-4xl">
            What our users are saying
          </h2>

          <div className="mx-auto mt-12 grid max-w-5xl gap-6 md:grid-cols-2 lg:grid-cols-3">
            {TESTIMONIALS.map(({ quote, name, role, image }) => (
              <Card key={name} className="group overflow-hidden rounded-[2rem] border border-slate-200/50 bg-white/95 shadow-[0_35px_90px_-45px_rgba(14,165,233,0.12)] transition-transform duration-500 hover:-translate-y-3 hover:shadow-2xl hover:shadow-cyan-500/15 dark:border-white/10 dark:bg-slate-900/95 dark:shadow-[0_35px_90px_-45px_rgba(14,165,233,0.3)]">
                <CardContent className="space-y-6 p-8">
                  <p className="text-slate-600 dark:text-slate-300">{quote}</p>
                  <div className="flex items-center gap-4 rounded-[1.5rem] bg-slate-100/90 p-4 dark:bg-slate-950/80">
                    <Avatar>
                      <AvatarImage src={image} alt={name} />
                      <AvatarFallback className="uppercase text-slate-950 dark:text-slate-100">
                        {name.charAt(0)}
                      </AvatarFallback>
                    </Avatar>
                    <div className="text-left">
                      <p className="text-sm font-semibold text-slate-950 dark:text-white">{name}</p>
                      <p className="text-sm text-slate-600 dark:text-slate-400">{role}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* ───── Call‑to‑Action ───── */}
      <section className="py-20 bg-gradient-to-r from-cyan-600 to-sky-600">
        <div className="container mx-auto px-4 md:px-6 text-center space-y-6">
          <h2 className="text-3xl font-extrabold tracking-tight md:text-4xl text-white">
            Ready to simplify expense sharing?
          </h2>
          <p className="mx-auto max-w-[600px] text-cyan-100 md:text-xl/relaxed">
            Join thousands of users who have made splitting expenses
            stress‑free.
          </p>
          <Button asChild size="lg" className="bg-sky-900 hover:bg-slate-900 text-white shadow-lg shadow-sky-500/20">
            <Link href="/dashboard">
              Get Started
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>

      <section className="py-20 bg-slate-50 dark:bg-slate-950">
        <div className="container mx-auto px-4 md:px-6">
          <div className="rounded-[2rem] border border-slate-200 bg-white p-10 shadow-xl dark:border-slate-800 dark:bg-slate-900">
            <div className="grid gap-10 lg:grid-cols-[0.9fr_0.7fr] items-center">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-600 dark:text-cyan-300">
                  Contact Us
                </p>
                <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-950 dark:text-white sm:text-4xl">
                  Have a question or want premium support?
                </h2>
                <p className="mt-4 max-w-xl text-base leading-8 text-slate-600 dark:text-slate-300">
                  Reach out anytime — our team is ready to help with onboarding, billing, and group expense setup.
                </p>
                <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                  <Button asChild size="lg" className="bg-cyan-600 hover:bg-sky-700 text-white shadow-lg shadow-cyan-500/20">
                    <Link href="/contact">Contact Us</Link>
                  </Button>
                  <Button asChild variant="outline" size="lg" className="border-slate-300 text-slate-700 hover:bg-slate-100 dark:border-slate-700 dark:text-slate-200 dark:hover:bg-slate-800">
                    <Link href="#features">Explore Features</Link>
                  </Button>
                </div>
              </div>
              <div className="space-y-5 rounded-[2rem] border border-slate-200 bg-slate-50 p-8 shadow-sm dark:border-slate-800 dark:bg-slate-950">
                <div>
                  <p className="text-sm font-semibold text-slate-900 dark:text-slate-100">Email</p>
                  <p className="mt-2 text-base text-slate-600 dark:text-slate-400">support@billbuddy.com</p>
                </div>
                <div>
                  <p className="text-sm font-semibold text-slate-900 dark:text-slate-100">Phone</p>
                  <p className="mt-2 text-base text-slate-600 dark:text-slate-400">+91 98765 43210</p>
                </div>
                <div>
                  <p className="text-sm font-semibold text-slate-900 dark:text-slate-100">Office</p>
                  <p className="mt-2 text-base text-slate-600 dark:text-slate-400">Kota, India</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-slate-200 bg-slate-50 text-slate-900 dark:border-slate-800 dark:bg-slate-950 dark:text-slate-300">
        <div className="container mx-auto px-4 md:px-6 py-12">
          <div className="grid gap-10 lg:grid-cols-3">
            <div>
              <p className="text-xl font-semibold text-slate-950 dark:text-white">BillBuddy</p>
              <p className="mt-4 text-sm leading-7 text-slate-400">
                A modern way to split expenses and settle payments with friends, family, and travel groups.
              </p>
            </div>
            <div className="grid gap-3">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-400">Links</p>
              <Link href="/" className="transition hover:text-white">Home</Link>
              <Link href="#features" className="transition hover:text-white">Features</Link>
              <Link href="/contact" className="transition hover:text-white">Contact</Link>
            </div>
            <div className="grid gap-3">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-400">Contact</p>
              <p className="text-sm text-slate-400">support@billbuddy.com</p>
              <p className="text-sm text-slate-400">+91 98765 43210</p>
            </div>
          </div>
          <div className="mt-10 border-t border-slate-800 pt-6 text-sm text-slate-500">
            © {new Date().getFullYear()} BillBuddy. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
