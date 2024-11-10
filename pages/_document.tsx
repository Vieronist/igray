import { Layout } from "@/app/ui/Layout";
import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <meta
        http-equiv="Content-Security-Policy"
        content="default-src 'self' http: https:; img-src 'self' data: http: https:; script-src 'self' 'unsafe-inline' http: https:; style-src 'self' 'unsafe-inline' http: https:;"
      />
      <body className="antialiased bg-[url('../public/background.jpg')]">
        <Layout>
          <Main />
        </Layout>

        <NextScript />
      </body>
    </Html>
  );
}
