import { Ban, CheckCircle, Edit, MoreHorizontal, Trash } from "lucide-react";
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
import { useGetProductSheet } from "@/features/products/hooks/use-get-product-sheet";
import { useGetProductById } from "@/features/products/api/use-get-product-byId";

type Props = {
    id: string;
};

export const Actions = ({ id }: Props) => {
    const [ConfirmDialog, confirm] = useConfirm();
    const { onOpen } = useGetProductSheet();
    const { data: product, isLoading } = useGetProductById(id);

    return (
        <>
            <ConfirmDialog />
            {/* {!isSelf && isLoggedInAdmin && ( */}
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
                    <DropdownMenuItem
                        className="cursor-pointer flex gap-x-2 text-red-600 dark:text-red-400 dark:hover:bg-gray-700"
                        onClick={() => {
                            if (product?.id) {
                                onOpen()
                            } else {
                                console.warn("Product not loaded yet.");
                            }
                        }}
                    >
                        <Edit className="size-4 text-red-600" />
                        Edit
                    </DropdownMenuItem>
                </DropdownMenuContent>
            </DropdownMenu>
            {/* )} */}
        </>
    );
};
