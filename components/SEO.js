import Head from 'next/head';
import webIcon from './icons/webIcon.ico';

export default function SEO({ title, description }) {
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta property="og:title" content={title} />
      <link rel="icon" href={webIcon} sizes="any" />
      <meta name="viewport" content="width=device-width, initial-scale=1"/>
    </Head>
  );
}
