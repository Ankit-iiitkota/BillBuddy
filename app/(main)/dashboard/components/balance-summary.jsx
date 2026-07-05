import Link from "next/link";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { ArrowUpCircle, ArrowDownCircle } from "lucide-react";

export function BalanceSummary({ balances }) {
  if (!balances) return null;

  const { oweDetails } = balances;
  const hasOwed = oweDetails.youAreOwedBy.length > 0;
  const hasOwing = oweDetails.youOwe.length > 0;

  return (
    <div className="space-y-6">
      {!hasOwed && !hasOwing && (
        <div className="rounded-[1.75rem] border border-slate-200/70 bg-slate-100/80 p-6 text-center text-muted-foreground shadow-sm dark:border-white/10 dark:bg-white/5">
          You're all settled up!
        </div>
      )}

      {hasOwed && (
        <div>
          <h3 className="text-sm font-semibold flex items-center gap-2 mb-4 text-slate-900 dark:text-slate-100">
            <ArrowUpCircle className="h-4 w-4 text-emerald-500" />
            Owed to you
          </h3>
          <div className="space-y-3">
            {oweDetails.youAreOwedBy.map((item) => (
              <Link
                href={`/person/${item.userId}`}
                key={item.userId}
                className="group flex items-center justify-between gap-4 rounded-[1.5rem] border border-slate-200/70 bg-white/90 p-3 transition hover:-translate-y-0.5 hover:border-slate-300 hover:bg-slate-50 dark:border-white/10 dark:bg-slate-950/80 dark:hover:border-white/20 dark:hover:bg-white/5"
              >
                <div className="flex items-center gap-3">
                  <Avatar className="h-10 w-10">
                    <AvatarImage src={item.imageUrl} />
                    <AvatarFallback>{item.name.charAt(0)}</AvatarFallback>
                  </Avatar>
                  <span className="text-sm font-medium">{item.name}</span>
                </div>
                <span className="font-semibold text-emerald-600 dark:text-emerald-300">
                  ₹{item.amount.toFixed(2)}
                </span>
              </Link>
            ))}
          </div>
        </div>
      )}

      {hasOwing && (
        <div>
          <h3 className="text-sm font-semibold flex items-center gap-2 mb-4 text-slate-900 dark:text-slate-100">
            <ArrowDownCircle className="h-4 w-4 text-rose-500" />
            You owe
          </h3>
          <div className="space-y-3">
            {oweDetails.youOwe.map((item) => (
              <Link
                href={`/person/${item.userId}`}
                key={item.userId}
                className="group flex items-center justify-between gap-4 rounded-[1.5rem] border border-slate-200/70 bg-white/90 p-3 transition hover:-translate-y-0.5 hover:border-slate-300 hover:bg-slate-50 dark:border-white/10 dark:bg-slate-950/80 dark:hover:border-white/20 dark:hover:bg-white/5"
              >
                <div className="flex items-center gap-3">
                  <Avatar className="h-10 w-10">
                    <AvatarImage src={item.imageUrl} />
                    <AvatarFallback>{item.name.charAt(0)}</AvatarFallback>
                  </Avatar>
                  <span className="text-sm font-medium">{item.name}</span>
                </div>
                <span className="font-semibold text-rose-600 dark:text-rose-300">
                  ₹{item.amount.toFixed(2)}
                </span>
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
