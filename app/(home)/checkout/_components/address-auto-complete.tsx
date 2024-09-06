"use client";

import { Input } from "@/components/ui/input";
import { useEffect, useState } from "react";
import GooglePlacesAutocomplete from "react-google-autocomplete";

type Props = {
    disabled: boolean;
    placeholder: string;
    setValue: (name: string | any, value: string) => void;
    value: string;
};

export const AddressAutoComplete = ({
    disabled,
    placeholder,
    value,
    setValue,
}: Props) => {
    const [address, setAddress] = useState(value);
    const [manualInput, setManualInput] = useState(false);

    useEffect(() => {
        setAddress(value); // Sync with form value
    }, [value]);

    const handlePlaceSelected = (place: any) => {
        const formattedAddress = place.formatted_address || "";
        setAddress(formattedAddress);
        setValue("address", formattedAddress);
    };

    const handleManualInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setAddress(e.target.value);
        setValue("address", e.target.value);
    };

    return (
        <div className="relative">
            {/* <GooglePlacesAutocomplete
                apiKey={process.env.NEXT_PUBLIC_GOOGLE_API_KEY}
                onPlaceSelected={handlePlaceSelected}
                options={{
                    types: ["address"],
                    componentRestrictions: { country: "us" }, // Adjust as needed
                }}
                inputProps={{
                    value: address,
                    onChange: handleManualInputChange,
                    placeholder,
                    disabled,
                    className: "address-input",
                }}
                onBlur={() => {
                    // If address is not selected from autocomplete, allow manual input
                    if (!address) {
                        setManualInput(true);
                    }
                }}
            /> */}
            {/* {manualInput && ( */}
            <Input
                value={address}
                onChange={handleManualInputChange}
                placeholder={placeholder}
                disabled={disabled}
                className="address-input"
            />
            {/* )} */}
        </div>
    );
};
