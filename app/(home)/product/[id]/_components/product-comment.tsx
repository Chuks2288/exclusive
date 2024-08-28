import { Button } from "@/components/ui/button"

export const ProductComment = () => {
    return (
        <div className="w-full m-4 space-y-2">
            <h2>Add Comment</h2>
            <div className="max-w-[300px]">
                <textarea
                    placeholder=""
                    className="p-2 border-2 w-full rounded-md"
                    rows={3}
                />
            </div>
            <Button
                size="sm"
            >
                Submit
            </Button>
        </div>
    )
}

