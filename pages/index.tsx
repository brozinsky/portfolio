import Head from "next/head";
import { Home } from "@/components/home/Home";

export default function home() {
  return (
    <>
      <Head>
        <title>Mateusz Brzeziński | Frontend Developer</title>
        <link rel="shortcut icon" href="/favicon.png" />
        <meta name="description" content="Mateusz Brzeziński | Frontend Developer" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:title" content="Mateusz Brzeziński | Frontend Developer" />
        <meta name="description" content="Hey! I'm Mateusz Brzeziński, a Frontend Developer based in Szczecin, Poland." />

        <meta property="og:title" content="Mateusz Brzeziński | Frontend Developer" />
        <meta property="og:type" content="article" />
        <meta property="og:url" content="https://deverajc.com/" />
        <meta property="og:image" content="https://deverajc.com/screenshot.png" />
        <meta property="og:description" content="Hey! I'm Mateusz Brzeziński, a Frontend Developer based in Szczecin, Poland." />

        <meta name="twitter:card" content="summary"/>
        <meta name="twitter:site" content="@jc_devz"/>
        <meta name="twitter:title" content="Mateusz Brzeziński | Frontend Developer"/>
        <meta name="twitter:description" content="Hey! I'm Mateusz Brzeziński, a Frontend Developer based in Szczecin, Poland."/>
        <meta name="twitter:creator" content="@jc_devz"/>
        <meta name="twitter:image" content="https://deverajc.com/screenshot.png"/>
        <meta name="google-site-verification" content="UQ5sUXYifK60YioNVOq0GqH13Gl3JvOZBZ_9YkvAp4A" />
      </Head>
      <Home />
    </>
  );
}
