import Head from "next/head";

export default function HEAD({ title, desc, img }) {
  return (
    <Head>
      <title>Buy {title} Online | AutoPortal</title>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="description" content={desc} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={desc} />
      <meta property="og:image" content={img} />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
  );
}
