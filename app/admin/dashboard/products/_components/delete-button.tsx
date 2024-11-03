import { Trash } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useConfirm } from "@/hooks/use-confirm";
import { useDeleteUser } from "@/features/user/api/use-delete-user";

type Props = {
    id: string | any;
};

export const DeleteButton = ({
    id
}: Props) => {

    const mutation = useDeleteUser();

    const [ConfirmDialog, confirm] = useConfirm(
        "Confirm Deletion",
        "Are you sure you want to remove this user from the database?"
    );

    const handleDelete = async () => {
        const isConfirmed = await confirm();
        if (isConfirmed) {
            mutation.mutate(id);
        }
    };

    return (
        <>
            <ConfirmDialog />
            <Button variant="destructive" onClick={handleDelete}>
                <Trash className="size-4" />
            </Button>
        </>
    );
};
