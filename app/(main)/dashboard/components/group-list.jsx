import Link from "next/link";
import { Users } from "lucide-react";

export function GroupList({ groups }) {
  if (!groups || groups.length === 0) {
    return (
      <div className="rounded-[1.75rem] border border-slate-200/70 bg-slate-100/80 p-6 text-center shadow-sm dark:border-white/10 dark:bg-white/5">
        <p className="text-sm font-medium text-slate-900 dark:text-slate-100">No groups yet</p>
        <p className="text-sm text-muted-foreground mt-1">
          Create a group to start tracking shared expenses.
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-3">
      {groups.map((group) => {
        const balance = group.balance || 0;
        const hasBalance = balance !== 0;

        return (
          <Link
            href={`/groups/${group.id}`}
            key={group.id}
            className="group flex items-center justify-between gap-4 rounded-[1.5rem] border border-slate-200/70 bg-white/90 p-4 transition hover:-translate-y-0.5 hover:border-slate-300 hover:bg-slate-50 dark:border-white/10 dark:bg-slate-950/80 dark:hover:border-white/20 dark:hover:bg-white/5"
          >
            <div className="flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-cyan-100 text-cyan-700 shadow-sm dark:bg-cyan-500/10 dark:text-cyan-200">
                <Users className="h-5 w-5" />
              </div>
              <div>
                <p className="font-semibold text-slate-900 dark:text-slate-100">{group.name}</p>
                <p className="text-xs text-muted-foreground">
                  {group.members.length} members
                </p>
              </div>
            </div>

            {hasBalance && (
              <span
                className={`text-sm font-semibold ${
                  balance > 0 ? "text-emerald-600 dark:text-emerald-300" : "text-rose-600 dark:text-rose-300"
                }`}
              >
                {balance > 0 ? "+" : ""}${balance.toFixed(2)}
              </span>
            )}
          </Link>
        );
      })}
    </div>
  );
}
