import CurrencyInput from "react-currency-input-field";
import { Info, MinusCircle, PlusCircle } from "lucide-react";
import { cn } from "@/lib/utils";

import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/components/ui/tooltip";

type Props = {
    value: string;
    onChange: (value: string | undefined) => void;
    placeholder?: string;
    disabled?: boolean;
};

export const AmountInput = ({
    value,
    onChange,
    placeholder,
    disabled,
}: Props) => {
    const parsedValue = parseFloat(value);

    const onReverseValue = () => {
        if (!value) return;

        // Ensures the value remains positive
        const newValue = Math.abs(parsedValue);
        onChange(newValue.toString());
    };

    const handleValueChange = (value: string | undefined) => {
        if (!value) return;

        // Parse and prevent negative values
        const newValue = parseFloat(value);
        if (newValue >= 0) {
            onChange(value);
        }
    };

    return (
        <div className="relative">
            <CurrencyInput
                prefix="$"
                className="pl-10 flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                placeholder={placeholder}
                value={value}
                decimalsLimit={2}
                decimalScale={2}
                onValueChange={handleValueChange}
                disabled={disabled}
            />
        </div>
    );
};
