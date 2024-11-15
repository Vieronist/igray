import { Layout as Container } from "@/app/ui/Layout";



export default function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <Container>{children}</Container>;
}
