import { Layout } from "@/app/ui/Layout";
import { Html, Head, Main, NextScript } from "next/document";
import { useRouter } from "next/compat/router";
import { use, useEffect } from "react";

export default function Document() {
  const router = useRouter();
  
  console.log(router?.pathname.includes('admin'))

  useEffect(() => {
    console.log(router?.pathname)
  }, [router?.pathname.includes('admin')])

  return (
    <Html lang="en">
      <Head />

      <body className="antialiased bg-[url('../public/background.jpg')]">

    {}

        <Layout>
          <Main />
        </Layout>

        <NextScript />
      </body>
    </Html>
  );
}
