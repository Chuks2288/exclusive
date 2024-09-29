import { Logo } from "@/components/logo"
import { RegistrationForm } from "./_components/registration-form"

const RegistrationPage = () => {
    return (
        <main className="flex flex-row justify-center md:h-screen h-max w-full">
            <Logo />
            <RegistrationForm />
        </main>
    )
}

export default RegistrationPage