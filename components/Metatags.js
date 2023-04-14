import Head from 'next/head';

export default function Metatags({
  title = 'BlogTech',
  description = 'Full-stack blogging application',
}) {
  return (
    <Head>
      <title>{title}</title>
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:site" content="@RajGM" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      

      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      
    </Head>
  );
}
