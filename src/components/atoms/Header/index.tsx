import Head from 'next/head';

export function Header() {
  const title = 'Ali Zare - Software Developer Resume';
  const description =
    'Explore the resume and professional portfolio of Ali Zare, showcasing skills, experiences, and projects.';
  return (
    <Head>
      <title>{title}</title>
      <meta name='description' content={description} />
      <meta name='viewport' content='width=1224' />
      <link rel='icon' href='/dev-icon.png' />
      <link
        rel='preload'
        href='/fonts/IRANSans.ttf'
        as='font'
        crossOrigin='anonymous'
      />
      <meta property='og:title' content={title} />
      <meta property='og:description' content={description} />
      <meta property='og:type' content='website' />
      <meta property='og:image' content="https://www.aliiz.ir/dev-icon.png" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:image" content="https://www.aliiz.ir/dev-icon.png" />
    </Head>
  );
}
