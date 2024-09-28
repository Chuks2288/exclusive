import { Logo } from "@/components/logo"

import { NewPasswordForm } from "./_components/new-password-form"
import { Suspense } from "react"

const NewPasswordPage = () => {
    return (
        <main className="">
            <Suspense fallback={<div>Loading...</div>}>
                <main className="flex flex-row justify-center min-h-screen w-full">
                    <NewPasswordForm />
                    <Logo />
                </main>
            </Suspense>
        </main >
    )
}

export default NewPasswordPage