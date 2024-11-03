import { Ban, CheckCircle, MoreHorizontal, Trash } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useConfirm } from "@/hooks/use-confirm";
import { useBanUser } from "@/features/user/api/use-ban-user";
import { useUnbanUser } from "@/features/user/api/use-unban-user";
import { useDeleteUser } from "@/features/user/api/use-delete-user";
import { useCurrentUser } from "@/hooks/use-current-user";

type Props = {
    id: string;
    // isBanned: boolean;
    // role: "ADMIN" | "MODERATOR" | "CUSTOMER";
};

export const Actions = ({ id }: Props) => {
    const [ConfirmDialog, confirm] = useConfirm();

    const user = useCurrentUser();
    const isLoggedInAdmin = user?.role === "ADMIN";
    const isSelf = user?.id === id;

    const banMutation = useBanUser();
    const unBanMutation = useUnbanUser();
    const deleteMutation = useDeleteUser();

    const handleBanUser = async () => {
        const ok = await confirm(
            "Are you sure?",
            "You are about to ban this user."
        );
        if (ok) {
            banMutation.mutate(id);
        }
    };

    const handleUnbanUser = async () => {
        const ok = await confirm(
            "Are you sure?",
            "You are about to unban this user."
        );
        if (ok) {
            unBanMutation.mutate(id);
        }
    };

    const handleDeleteUser = async () => {
        const ok = await confirm(
            "Are you sure?",
            "You are about to delete this account."
        );
        if (ok) {
            deleteMutation.mutate(id);
        }
    };

    return (
        <>
            <ConfirmDialog />
            {!isSelf && isLoggedInAdmin && (
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <Button variant="ghost" className="h-8 w-8 p-0">
                            <MoreHorizontal className="size-4" />
                        </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent
                        align="end"
                        className="bg-white dark:bg-gray-800 dark:text-gray-200"
                    >
                        {/* {isBanned ? ( */}
                        <DropdownMenuItem
                            className="cursor-pointer flex gap-x-2 text-green-600 dark:text-green-400 dark:hover:bg-gray-700"
                            onClick={handleUnbanUser}
                        >
                            <CheckCircle className="size-4 text-green-600" />
                            Unban
                        </DropdownMenuItem>
                        {/* ) : ( */}
                        <DropdownMenuItem
                            className="cursor-pointer flex gap-x-2 text-red-600 dark:text-red-400 dark:hover:bg-gray-700"
                            onClick={handleBanUser}
                        >
                            <Ban className="size-4 text-red-600" />
                            Ban
                        </DropdownMenuItem>
                        {/* )} */}

                        <DropdownMenuItem
                            className="cursor-pointer flex gap-x-2 text-red-600 dark:text-red-400 dark:hover:bg-gray-700"
                            onClick={handleDeleteUser}
                        >
                            <Trash className="size-4 text-red-600" />
                            Delete
                        </DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
            )}
        </>
    );
};
