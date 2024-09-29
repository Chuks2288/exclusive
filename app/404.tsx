import { Button } from "@/components/ui/button"

const Custom404Page = () => {
    return (
        <div className="flex-1 items-center justify-center">
            <div className="flex flex-col gap-y-4 justify-center">
                <h1 className="lg:text-5xl text-3xl font-bold">
                    404 Not Found
                </h1>
                <p className="text-md font-medium">
                    Your visited page not found. You may go home page.
                </p>
                <Button
                    className=""
                    variant="destructive"
                >
                    Back to Homepage
                </Button>
            </div>
        </div>
    )
}

export default Custom404Page