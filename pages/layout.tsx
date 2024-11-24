import { Layout as Container } from "@/application/ui/Layout";
import { FeatureDoesntWorkModal } from "@/widgtes/404";

export default function Layout({ children }: { children: React.ReactNode }) {
  return <Container>
    {children}
    <FeatureDoesntWorkModal />
  </Container>;
}
