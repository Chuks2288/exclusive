import {
    Body,
    Button,
    Container,
    Head,
    Hr,
    Html,
    Img,
    Preview,
    Section,
    Text,
    Tailwind,
} from "@react-email/components";
import * as React from "react";
import { useGetBillingAddress } from "@/features/address/api/use-get-billing-address";

interface Props {
    userId: string; // Pass the user ID
}

export const BillingAddressUpdateMessage = ({
    userId
}: Props) => {
    const { data } = useGetBillingAddress(userId);

    const { street, city, apartment, phoneNumber } = data;

    return (
        <Html>
            <Tailwind>
                <Head />
                <Preview>
                    Your Billing Address Has Been Updated Successfully - Exclusive
                </Preview>
                <Body className="bg-gray-100 font-sans p-5">
                    <Container className="bg-white rounded-lg mx-auto p-5 max-w-xl shadow-lg">
                        <Img
                            src={`/static/logo.svg`}
                            width="170"
                            height="50"
                            alt="Exclusive"
                            className="block mx-auto mb-5"
                        />
                        <Img
                            src={`/static/billing-update.png`} // Replace with a relevant image if needed
                            width="100%"
                            alt="Billing Address Updated"
                            className="rounded-lg mb-5"
                        />
                        <Text className="text-2xl font-bold text-gray-800 mb-5 text-center">
                            Your Billing Address Has Been Updated!
                        </Text>
                        <Text className="text-base leading-7 text-gray-600 mb-5 text-center">
                            Hi,
                            <br />
                            We wanted to let you know that your billing address has been successfully updated on your Exclusive account. Here are the new details:
                        </Text>
                        <Section className="text-left mb-5">
                            <Text className="text-lg text-gray-800">
                                <strong>New Billing Address:</strong>
                            </Text>
                            <Text className="text-base text-gray-600">
                                Street: {street} <br />
                                City: {city} <br />
                                Apartment: {apartment} <br />
                                Phone Number: {phoneNumber} <br />
                            </Text>
                        </Section>
                        <Section className="text-center mb-5">
                            <Button
                                className="bg-red-500 text-white text-lg py-3 px-6 rounded-lg no-underline"
                                href="http://localhost:3000/account"
                            >
                                View Your Account
                            </Button>
                        </Section>
                        <Text className="text-base leading-7 text-gray-600 mb-5 text-center">
                            If you didn't request this change, please contact our support team immediately at <a href="mailto:support@yourshop.com" className="text-red-500 no-underline">support@yourshop.com</a>.
                        </Text>
                        <Hr className="border-gray-200 my-7" />
                        <Text className="text-sm text-gray-500 text-center mb-5">
                            Stay connected with us:
                        </Text>
                        <Section className="text-center mb-5">
                            <a href="https://www.facebook.com/YourShopName" className="inline-block mx-2">
                                <Img src="/static/facebook-icon.png" width="24" height="24" alt="Facebook" />
                            </a>
                            <a href="https://www.twitter.com/YourShopName" className="inline-block mx-2">
                                <Img src="/static/twitter-icon.png" width="24" height="24" alt="Twitter" />
                            </a>
                            <a href="https://www.instagram.com/YourShopName" className="inline-block mx-2">
                                <Img src="/static/instagram-icon.png" width="24" height="24" alt="Instagram" />
                            </a>
                        </Section>
                        <Text className="text-base leading-7 text-gray-600 text-center mb-5">
                            Best Regards,<br />
                            The Exclusive Team
                        </Text>
                        <Hr className="border-gray-200 my-7" />
                        <Text className="text-xs text-gray-400 text-center">
                            1234 Market St, Benin city, ED 300021 | <a href="mailto:support@exclusive.com" className="text-red-500 no-underline">support@yourshop.com</a>
                        </Text>
                    </Container>
                </Body>
            </Tailwind>
        </Html>
    );
};

export default BillingAddressUpdateMessage;
