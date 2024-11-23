import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <link rel="icon" href="/fav.ico" />
      <body className="antialiased bg-[url('../public/background.jpg')]">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
