import { Html, Head, Main, NextScript } from "next/document";

import { Layout } from "@/app/ui/Layout";

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
