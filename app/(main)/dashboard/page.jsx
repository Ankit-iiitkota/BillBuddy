"use client";

import { api } from "@/convex/_generated/api";
import { useConvexQuery } from "@/hooks/use-convex-query";
import { BarLoader } from "react-spinners";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { PlusCircle, Users, CreditCard, ChevronRight } from "lucide-react";
import Link from "next/link";
import { ExpenseSummary } from "./components/expense-summary";
import { BalanceSummary } from "./components/balance-summary";
import { GroupList } from "./components/group-list";

export default function Dashboard() {
  const { data: balances, isLoading: balancesLoading } = useConvexQuery(
    api.dashboard.getUserBalances
  );

  const { data: groups, isLoading: groupsLoading } = useConvexQuery(
    api.dashboard.getUserGroups
  );

  const { data: totalSpent, isLoading: totalSpentLoading } = useConvexQuery(
    api.dashboard.getTotalSpent
  );

  const { data: monthlySpending, isLoading: monthlySpendingLoading } =
    useConvexQuery(api.dashboard.getMonthlySpending);

  const isLoading =
    balancesLoading ||
    groupsLoading ||
    totalSpentLoading ||
    monthlySpendingLoading;

  return (
    <div className="container mx-auto py-8 space-y-8">
      {isLoading ? (
        <div className="w-full py-16 flex justify-center">
          <BarLoader width={"100%"} color="#36d7b7" />
        </div>
      ) : (
        <>
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div className="space-y-3">
              <div className="inline-flex items-center gap-2 rounded-full border border-slate-200/70 bg-slate-100/80 px-4 py-2 text-sm font-medium text-slate-700 shadow-sm dark:border-white/10 dark:bg-white/5 dark:text-slate-100">
                <Users className="h-4 w-4 text-cyan-500" />
                Dashboard overview
              </div>
              <div>
                <h1 className="text-5xl gradient-title">Dashboard</h1>
                <p className="max-w-2xl text-sm text-muted-foreground">
                  View your balances, spending trends, and groups in one polished hub.
                </p>
              </div>
            </div>
            <Button className="h-12 rounded-full px-6 shadow-lg shadow-cyan-500/10" size="lg">
              <Link href="/expenses/new" className="inline-flex items-center gap-2">
                <PlusCircle className="h-5 w-5" />
                Add expense
              </Link>
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            <Card className="overflow-hidden border border-slate-200/70 bg-white/95 shadow-xl shadow-slate-950/10 dark:border-white/10 dark:bg-slate-950/85 dark:shadow-black/20">
              <CardHeader className="pb-3">
                <div className="flex items-center justify-between gap-3">
                  <CardTitle className="text-sm font-semibold text-muted-foreground">
                    Total Balance
                  </CardTitle>
                  <span className="rounded-full bg-emerald-100 px-2 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-emerald-700 dark:bg-emerald-500/10 dark:text-emerald-300">
                    Live
                  </span>
                </div>
              </CardHeader>
              <CardContent>
                <div className="text-4xl font-semibold tracking-tight">
                  {balances?.totalBalance > 0 ? (
                    <span className="text-emerald-600 dark:text-emerald-300">
                      +₹{balances?.totalBalance.toFixed(2)}
                    </span>
                  ) : balances?.totalBalance < 0 ? (
                    <span className="text-rose-600 dark:text-rose-300">
                      -₹{Math.abs(balances?.totalBalance).toFixed(2)}
                    </span>
                  ) : (
                    <span>₹0.00</span>
                  )}
                </div>
                <p className="mt-3 text-sm leading-6 text-muted-foreground">
                  {balances?.totalBalance > 0
                    ? "You are owed money"
                    : balances?.totalBalance < 0
                      ? "You owe money"
                      : "All settled up!"}
                </p>
              </CardContent>
            </Card>

            <Card className="overflow-hidden border border-slate-200/70 bg-white/95 shadow-xl shadow-slate-950/10 dark:border-white/10 dark:bg-slate-950/85 dark:shadow-black/20">
              <CardHeader className="pb-3">
                <CardTitle className="text-sm font-semibold text-muted-foreground">
                  You are owed
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-4xl font-semibold text-emerald-600 dark:text-emerald-300">
                  ₹{balances?.youAreOwed.toFixed(2)}
                </div>
                <p className="mt-3 text-sm leading-6 text-muted-foreground">
                  From {balances?.oweDetails?.youAreOwedBy?.length || 0} people
                </p>
              </CardContent>
            </Card>

            <Card className="overflow-hidden border border-slate-200/70 bg-white/95 shadow-xl shadow-slate-950/10 dark:border-white/10 dark:bg-slate-950/85 dark:shadow-black/20">
              <CardHeader className="pb-3">
                <CardTitle className="text-sm font-semibold text-muted-foreground">
                  You owe
                </CardTitle>
              </CardHeader>
              <CardContent>
                {balances?.oweDetails?.youOwe?.length > 0 ? (
                  <>
                    <div className="text-4xl font-semibold text-rose-600 dark:text-rose-300">
                      ₹{balances?.youOwe.toFixed(2)}
                    </div>
                    <p className="mt-3 text-sm leading-6 text-muted-foreground">
                      To {balances?.oweDetails?.youOwe?.length || 0} people
                    </p>
                  </>
                ) : (
                  <>
                    <div className="text-4xl font-semibold">₹0.00</div>
                    <p className="mt-3 text-sm leading-6 text-muted-foreground">
                      You don't owe anyone
                    </p>
                  </>
                )}
              </CardContent>
            </Card>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2 space-y-6">
              <ExpenseSummary
                monthlySpending={monthlySpending}
                totalSpent={totalSpent}
              />
            </div>

            <div className="space-y-6">
              <Card className="overflow-hidden border border-slate-200/70 bg-white/95 shadow-xl shadow-slate-950/10 dark:border-white/10 dark:bg-slate-950/85 dark:shadow-black/20">
                <CardHeader className="pb-3">
                  <div className="flex items-center justify-between gap-3">
                    <CardTitle>Balance Details</CardTitle>
                    <Button variant="link" asChild className="p-0">
                      <Link href="/contacts">
                        View all
                        <ChevronRight className="ml-1 h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
                </CardHeader>
                <CardContent>
                  <BalanceSummary balances={balances} />
                </CardContent>
              </Card>

              <Card className="overflow-hidden border border-slate-200/70 bg-white/95 shadow-xl shadow-slate-950/10 dark:border-white/10 dark:bg-slate-950/85 dark:shadow-black/20">
                <CardHeader className="pb-3">
                  <div className="flex items-center justify-between gap-3">
                    <CardTitle>Your Groups</CardTitle>
                    <Button variant="link" asChild className="p-0">
                      <Link href="/contacts">
                        View all
                        <ChevronRight className="ml-1 h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
                </CardHeader>
                <CardContent>
                  <GroupList groups={groups} />
                </CardContent>
                <CardFooter>
                  <Button variant="outline" asChild className="w-full">
                    <Link href="/contacts?createGroup=true">
                      <Users className="mr-2 h-4 w-4" />
                      Create new group
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
