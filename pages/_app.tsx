import "@/styles/main.scss";
import type { AppProps } from "next/app";
import { Poppins } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import Script from "next/script";
import { useOutboundTracking } from "@/hooks/useOutboundTracking";

const poppins = Poppins({
  weight: ["100", "200", "400", "700", "900"],
  preload: false,
});

export default function App({ Component, pageProps }: AppProps) {
  useOutboundTracking();

  return (
    <>
      <Script
        strategy="afterInteractive"
        src="https://www.googletagmanager.com/gtag/js?id=G-VZ56HDKR1J"
      />
      <Script
        id="google-analytics"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-VZ56HDKR1J');
          `,
        }}
      />
      <div id="root" className={poppins.className}>
        <Component {...pageProps} />
        <Analytics />
        <SpeedInsights />
      </div>
    </>
  );
}
