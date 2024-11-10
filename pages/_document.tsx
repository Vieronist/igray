import { Layout } from "@/app/ui/Layout";
import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body className="antialiased bg-[url('../public/background.jpg')]">
        <Layout>
          <Main />
        </Layout>

        <NextScript />
      </body>
    </Html>
  );
}
