import { Ban, Edit, MoreHorizontal, Trash } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useConfirm } from "@/hooks/use-confirm";
import { useBanUser } from "@/features/user/api/use-ban-user";
import { useUnbanUser } from "@/features/user/api/use-unban-user";

type Props = {
    id: string;
};

export const Actions = ({
    id
}: Props) => {
    const [ConfirmDialog, confirm] = useConfirm(
        "Are you sure?",
        "You are about to delete this account"
    );

    const banMutation = useBanUser();
    const unBanMutation = useUnbanUser();

    const handleBanUser = async () => {
        const ok = await confirm();
        if (ok) {
            banMutation.mutate(id);
        }
    };

    const handleUnbanUser = async () => {
        const ok = await confirm();
        if (ok) {
            // @ts-ignore
            unBanMutation.mutate(id);
        }
    };

    return (
        <>
            <ConfirmDialog />
            <DropdownMenu>
                <DropdownMenuTrigger asChild>
                    <Button variant="ghost" className="h-8 w-8 p-0">
                        <MoreHorizontal className="size-4" />
                    </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="bg-white">
                    <DropdownMenuItem className="cursor-pointer flex gap-x-2">
                        <Trash className="size-4" />
                        Delete
                    </DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem
                        className="cursor-pointer flex gap-x-2"
                        onClick={handleBanUser}
                    >
                        <Ban className="size-4" />
                        Ban
                    </DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem
                        className="cursor-pointer flex gap-x-2"
                        onClick={handleUnbanUser}
                    >
                        <Ban className="size-4" />
                        UnBan
                    </DropdownMenuItem>
                </DropdownMenuContent>
            </DropdownMenu>
        </>
    );
};
