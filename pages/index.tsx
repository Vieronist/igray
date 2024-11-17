import { Home } from '@/pages-fsd/home/';
import { Container } from "@/shared";

import { Footer } from "@/widgtes/footer";
import { Header } from "@/widgtes/header";
import { Reviews } from "@/widgtes/reviews";
export default function Index() {
  return (
    <Container>
      <Header />
      <Home />
      <Reviews />
      <Footer />
    </Container>
  );
}
