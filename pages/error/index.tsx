import { ErrorPanel } from "@/widgtes/error";
import { Footer } from "@/widgtes/footer";
import { Header } from "@/widgtes/header";
import { Reviews } from "@/widgtes/reviews";

export default function Index() {
    return (
        <div>
            <Header />
            <ErrorPanel />
            <Reviews />
            <Footer />
        </div>
    )
}