import { ContactCrumb } from "./_components/contact-crumb";
import { ContactForm } from "./_components/contact-form";
import { ContactInfo } from "./_components/contact-info";

const ContactPage = () => {
    return (
        <main className="py-4 space-y-6">
            <ContactCrumb />
            <div className="grid md:grid-cols-[0.5fr,1fr] grid-cols-1 gap-6 ">
                <ContactInfo />
                <ContactForm />
            </div>
        </main>
    );
};

export default ContactPage;
