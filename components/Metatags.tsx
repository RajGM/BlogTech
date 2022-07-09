import Head from 'next/head';

export default function Metatags({
  title = 'The Full Next.js Testing Blog website bu using all of the features',
  description = 'NextJS with all of the features',
  image = 'https://www.flaticon.com/free-icon/hacker_2165674?term=hacker&page=1&position=13&page=1&position=13&related_id=2165674&origin=search',
}) {
  return (
    <Head>
      <title>{title}</title>
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:site" content="@rajgm_hacks" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
    </Head>
  );
}
