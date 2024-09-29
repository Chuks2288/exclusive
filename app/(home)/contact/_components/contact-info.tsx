import { Separator } from "@/components/ui/separator";
import { LucideIcon, MessageCircle, PhoneCall } from "lucide-react";

type ContactProps = {
    icon: LucideIcon;
    title: string;
    label: string;
    contact: string;
    contact2?: string;
}

const contacts: ContactProps[] = [
    {
        icon: PhoneCall,
        title: "Call To Us",
        label: "We are available 24/7, 7 days a week.",
        contact: "+2347042052223",
    },
    {
        icon: MessageCircle,
        title: "Write To Us",
        label: "Fill out our form and we will contact you within 24 hours.",
        contact: "dumbirichuks@exclusive.com",
        contact2: "support@exclusive.com",
    },
];

export const ContactInfo = () => {
    return (
        <section className="lg:px-6 px-4 space-y-6 shadow-md rounded-md md:py-8 py-4">
            {contacts.map((contact, index) => (
                <div key={contact.contact}>
                    <article className="space-y-3">
                        <div className="flex items-center">
                            <div className="flex items-center justify-center w-8 h-8 rounded-full bg-rose-500 mr-3">
                                <contact.icon className="text-white size-4" />
                            </div>
                            <h4 className="text-sm font-bold">{contact.title}</h4>
                        </div>
                        <p className="text-xs font-medium">{contact.label}</p>
                        <p className="text-xs font-medium">
                            <a href={`tel:${contact.contact}`} className="text-blue-600 hover:underline">
                                {contact.contact}
                            </a>
                        </p>
                        {contact.contact2 && (
                            <p className="text-xs font-medium">
                                <a href={`mailto:${contact.contact2}`} className="text-blue-600 hover:underline">
                                    {contact.contact2}
                                </a>
                            </p>
                        )}
                    </article>
                    {index < contacts.length - 1 && <Separator className="mt-6" />}
                </div>
            ))}
        </section>
    );
}
