"use client";

import { useRouter } from "next/navigation";
import { useConvexMutation, useConvexQuery } from "@/hooks/use-convex-query";
import { api } from "@/convex/_generated/api";
import { toast } from "sonner";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";

export function GroupMembers({ members, groupId }) {
  const router = useRouter();
  const { data: currentUser } = useConvexQuery(api.users.getCurrentUser);
  const removeMember = useConvexMutation(api.groups.removeGroupMember);

  const currentMember = members?.find(
    (member) => member.id === currentUser?._id
  );
  const currentUserIsAdmin = currentMember?.role === "admin";

  if (!members || members.length === 0) {
    return (
      <div className="text-center py-4 text-muted-foreground">
        No members in this group
      </div>
    );
  }

  return (
    <div className="space-y-3">
      {members.map((member) => {
        const isCurrentUser = member.id === currentUser?._id;
        const isAdmin = member.role === "admin";

        return (
          <div key={member.id} className="flex items-center justify-between gap-3 rounded-[1.5rem] border border-slate-200/70 bg-white/95 p-3 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md dark:border-white/10 dark:bg-slate-950/80 dark:hover:border-white/20 dark:hover:bg-white/5">
            <div className="flex items-center gap-2">
              <Avatar className="h-8 w-8">
                <AvatarImage src={member.imageUrl} />
                <AvatarFallback>{member.name.charAt(0)}</AvatarFallback>
              </Avatar>
              <div>
                <div className="flex items-center gap-2">
                  <span className="text-sm font-medium">
                    {isCurrentUser ? "You" : member.name}
                  </span>
                  {isCurrentUser && (
                    <Badge variant="outline" className="text-xs py-0 h-5">
                      You
                    </Badge>
                  )}
                </div>
                {isAdmin && (
                  <span className="text-xs text-muted-foreground">Admin</span>
                )}
              </div>
            </div>
            {currentUserIsAdmin && !isCurrentUser ? (
              <Button
                type="button"
                variant="ghost"
                size="icon"
                className="text-rose-500 hover:bg-rose-500/10 dark:hover:bg-rose-500/15"
                onClick={async () => {
                  const confirmed = window.confirm(
                    `Remove ${member.name} from this group?`
                  );
                  if (!confirmed) return;

                  try {
                    await removeMember.mutate({
                      groupId,
                      userId: member.id,
                    });
                    toast.success(`${member.name} removed from group`);
                    router.refresh();
                  } catch (error) {
                    toast.error(error.message);
                  }
                }}
              >
                <X className="h-4 w-4" />
              </Button>
            ) : null}
          </div>
        );
      })}
    </div>
  );
}
