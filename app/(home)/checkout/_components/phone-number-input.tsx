import { useState } from "react";
import PhoneInput from "react-phone-input-2";
import 'react-phone-input-2/lib/style.css';

type Props = {
    disabled: boolean;
    value: string | any;  // Add value type
    onChange: (value: string | any) => void;  // Add onChange type
};

export const PhoneNumberInput = ({
    disabled,
    value,
    onChange,
}: Props) => {
    return (
        <div className="phone-input-container">
            <PhoneInput
                country={'ng'}
                value={value} // Use the value prop
                onChange={onChange} // Use the onChange handler
                inputProps={{
                    name: 'phoneNumber',
                    required: true,
                    autoFocus: true,
                    className: 'phone-input' // Apply the CSS class
                }}
                disabled={disabled}
            />
        </div>
    );
};
