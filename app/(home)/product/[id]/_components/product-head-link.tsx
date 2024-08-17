

type Props = {
    category: string;
    brand: string;
    name: string;
}

export const ProductHeadLink = ({
    category,
    brand,
    name,
}: Props) => {
    return (
        <div className="flex items-center mb-6 gap-x-2">
            <p className="text-muted-foreground text-sm">{category}</p>
            <p className="text-muted-foreground text-sm">{brand}</p>
            <p className="cursor-pointer hover:underline text-sm">{name}</p>
        </div>
    )
}

