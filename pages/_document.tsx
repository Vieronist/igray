import { Html, Head, Main, NextScript } from "next/document";

import { Layout } from "@/application/ui/Layout";

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <link rel="icon" href="/fav.ico" />
      <body className="antialiased bg-[url('../public/background.jpg')]">
        <Layout>
          <Main />
        </Layout>
        <NextScript />
      </body>
    </Html>
  );
}
