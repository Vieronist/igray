import { ArticlesList } from "@/widgtes/articles";
import { ErrorPanel } from "@/widgtes/error";
import { Footer } from "@/widgtes/footer";
import { Header } from "@/widgtes/header";
import { Reviews } from "@/widgtes/reviews";

export default function Index() {
    return (
        <div>
            <Header />
            <ErrorPanel />
            <ArticlesList className="hidden xl:flex justify-center mb-[120px] mx-auto" />
            <Reviews className="hidden xl:block" />
            <Footer />
        </div>
    )
}