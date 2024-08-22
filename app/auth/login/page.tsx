import { Logo } from "@/components/logo"
import { LoginForm } from "./_components/login-form"

const LoginPage = () => {
    return (
        <main className="flex flex-row justify-center min-h-screen w-full">
            <Logo />
            <LoginForm />
        </main>
    )
}

export default LoginPage