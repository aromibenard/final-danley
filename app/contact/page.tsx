import BigText from "@/components/big-text";
import { ContactCard } from "@/components/contact-card";

export default function ContactPage() {
    return (
        <div className="grid">
            <div className="md:grid-cols-2">
                <div>
                    <BigText text="Reach Us On"/>
                </div>
                <div>
                    <ContactCard />
                </div>
            </div>

        </div>
    )
}