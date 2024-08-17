

type Props = {
    name: string;
    rating: number;
    review: number;
    availability: string;
    price: number;
    description: string;
    color: string;
    size: string[];
    returnable: boolean;
    returnPeriod: string;
    returnCondition: string
}
export const ProductDetails = ({
    name,
    rating,
    review,
    availability,
    price,
    description,
    color,
    size,
    returnable,
    returnPeriod,
    returnCondition,
}: Props) => {
    return (
        <div>
            <h4>
                {name}
            </h4>
        </div>
    )
}

