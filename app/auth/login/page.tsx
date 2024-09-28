import { Suspense } from "react";
import { Logo } from "@/components/logo";
import { LoginForm } from "./_components/login-form";

const LoginPage = () => {
    return (
        <main className="">
            <Suspense fallback={<div>Loading...</div>}>
                <main className="flex flex-row justify-center min-h-screen w-full">
                    <Logo />
                    <LoginForm />
                </main>
            </Suspense>
        </main >
    );
}

export default LoginPage;
