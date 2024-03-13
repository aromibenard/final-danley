import BigText from "@/components/big-text";
import { ContactCard } from "@/components/contact-card";
import Footer from "@/components/footer";

export default function ContactPage() {
    return (
        <div>
        <div className="grid md:grid-cols-2 md:items-center">
           
                <div className="mx-auto p-3">
                    <BigText text="Reach Us On"/>
                </div>
                <div className="mx-auto my-7">
                    <ContactCard />
                </div>
                
          

        </div>
        <Footer/>
        </div>
    )
}