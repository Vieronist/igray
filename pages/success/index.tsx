import { Footer } from "@/widgtes/footer";
import { Header } from "@/widgtes/header";
import { SuccessPaymentPanel } from "@/widgtes/success-payment/ui/success-payment-panel";



export default function Index() {
    return (
        <div>
            <Header />
            <SuccessPaymentPanel /> 
            <Footer />
        </div>
    );
}