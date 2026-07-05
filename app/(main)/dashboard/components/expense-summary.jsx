"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

export function ExpenseSummary({ monthlySpending, totalSpent }) {
  const monthNames = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  const chartData =
    monthlySpending?.map((item) => {
      const date = new Date(item.month);
      return {
        name: monthNames[date.getMonth()],
        amount: item.total,
      };
    }) || [];

  const currentYear = new Date().getFullYear();
  const currentMonth = new Date().getMonth();
  const currentMonthData = monthlySpending?.find(
    (item) => new Date(item.month).getMonth() === currentMonth
  );
  const currentMonthTotal = currentMonthData?.total ?? 0;
  const totalSpentValue = totalSpent ?? 0;

  return (
    <Card className="overflow-hidden border border-slate-200/70 bg-white/95 shadow-xl shadow-slate-950/10 dark:border-white/10 dark:bg-slate-950/85 dark:shadow-black/20">
      <CardHeader className="gap-2 pb-4">
        <div className="flex items-start justify-between gap-4">
          <div>
            <CardTitle>Expense Summary</CardTitle>
            <p className="text-sm text-muted-foreground mt-1">
              Track spending across the year and spot the months that matter most.
            </p>
          </div>
          <div className="rounded-full bg-cyan-100 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.24em] text-cyan-700 dark:bg-cyan-500/10 dark:text-cyan-200">
            {currentYear}
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          <div className="rounded-[1.75rem] border border-slate-200/70 bg-slate-100/80 p-5 shadow-sm dark:border-white/10 dark:bg-white/5">
            <p className="text-sm text-muted-foreground">Total this month</p>
            <h3 className="text-3xl font-semibold mt-3">
              ₹{currentMonthTotal.toFixed(2)}
            </h3>
          </div>
          <div className="rounded-[1.75rem] border border-slate-200/70 bg-slate-100/80 p-5 shadow-sm dark:border-white/10 dark:bg-white/5">
            <p className="text-sm text-muted-foreground">Total this year</p>
            <h3 className="text-3xl font-semibold mt-3">
              ₹{totalSpentValue.toFixed(2)}
            </h3>
          </div>
        </div>

        <div className="mt-6 overflow-hidden rounded-[2rem] border border-slate-200/70 bg-slate-950/5 p-4 shadow-inner dark:border-white/10 dark:bg-white/5">
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={chartData}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} />
                <XAxis dataKey="name" tick={{ fill: "currentColor" }} />
                <YAxis tick={{ fill: "currentColor" }} />
                <Tooltip
                  formatter={(value) => [`₹${value.toFixed(2)}`, "Amount"]}
                  labelFormatter={(label) => `Month: ${label}`}
                />
                <Bar dataKey="amount" fill="#14b8a6" radius={[8, 8, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        <p className="text-xs text-muted-foreground text-center mt-4">
          Monthly spending overview for {currentYear}
        </p>
      </CardContent>
    </Card>
  );
}
