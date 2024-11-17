import { NotFoundPanel } from "@/widgtes/404";
import { Footer } from "@/widgtes/footer";
import { Header } from "@/widgtes/header";

export default function Custom404() {
    return (
        <section>
            <Header />
            <NotFoundPanel />
            <Footer />
        </section>
    );
}