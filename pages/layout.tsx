import { Layout as Container } from "@/application/ui/Layout";



export default function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <Container>{children}</Container>;
}
