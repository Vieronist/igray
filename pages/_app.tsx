import "../styles/globals.css";
import type { AppProps } from "next/app";
import localFont from "next/font/local";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";


const otans = localFont({ src: "./fonts/Onest-Medium.ttf" });

export default function App({ Component, pageProps }: AppProps) {
  const queryClient = new QueryClient();
  return (
    <div className={otans.className}>
      <QueryClientProvider client={queryClient}>

        <Component {...pageProps} />;
      </QueryClientProvider>
    </div>
  );
}
