"use client";

type Props = {
    id: string;
    firstName: string | null;
    lastName: string | null;
}

export const FullName = ({
    id,
    firstName,
    lastName
}: Props) => {
    return (
        <div>
            {`${lastName} ${firstName}`}
        </div>
    )
}
