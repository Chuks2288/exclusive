

type Props = {
    firstName: string;
    lastName: string;
}


export const Greeting = ({
    firstName,
    lastName
}: Props) => {
    return (
        <div className="flex items-center gap-x-2">
            <h4 className="text-xs">Welcome</h4>
            <p className="text-xs text-red-500">{lastName} {firstName}!</p>
        </div>
    )
}
