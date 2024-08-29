import { useCurrentUser } from "@/hooks/use-current-user";
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


export const RegisterWelcomeMessage = () => (
    <Html>
        <Tailwind>
            <Head />
            <Preview>
                Welcome to Exclusive - Get ready to explore exclusive deals and products just for you!
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
                        src={`/static/logo.svg`}
                        width="100%"
                        alt="Welcome to Exclusive"
                        className="rounded-lg mb-5"
                    />
                    <Text className="text-2xl font-bold text-gray-800 mb-5 text-center">
                        Welcome to Exclusive!
                    </Text>
                    <Text className="text-base leading-7 text-gray-600 mb-5 text-center">
                        Hi,
                        <br />
                        We’re thrilled to have you on board. At Exclusive, we bring you the best and latest products at unbeatable prices. Get ready to start your shopping adventure with us!
                    </Text>
                    <Section className="text-center mb-5">
                        <Button
                            className="bg-red-500 text-white text-lg py-3 px-6 rounded-lg no-underline"
                            href="http://localhost:3000/"
                        >
                            Start Shopping
                        </Button>
                    </Section>
                    <Text className="text-base leading-7 text-gray-600 mb-5 text-center">
                        As a welcome gift, enjoy a 10% discount on your first purchase. Use the code <strong>WELCOME10</strong> at checkout.
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

export default RegisterWelcomeMessage;
