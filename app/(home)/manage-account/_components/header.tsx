import { AccountCrumb } from "./account-crumb"
import { Greeting } from "./greeting";

type Props = {
    firstName: string;
    lastName: string;
}

export const Header = ({
    firstName,
    lastName
}: Props) => {
    return (
        <div className="py-10 flex items-center justify-between">
            <AccountCrumb />
            <Greeting
                firstName={firstName as string}
                lastName={lastName as string}
            />
        </div>
    )
}
