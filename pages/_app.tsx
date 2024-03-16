import "@/styles/main.scss";
import type { AppProps } from "next/app";
import { Poppins } from "next/font/google";

const poppins = Poppins({ weight: ["100", "200", "400", "700", "900"], preload: false, });

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div id="root" className={poppins.className}>
      <Component {...pageProps} />
    </div>
  );
}
