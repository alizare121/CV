import Head from 'next/head';

export function Header() {
  return (
    <Head>
      <title>Ali Zare CV</title>
      <meta name='description' content='Ali Zare CV' />
      <meta name='viewport' content='width=1224' />
      <link rel='icon' href='/dev-icon2.png' />
      <link rel='preload' href='/fonts/IRANSans.ttf' as='font' />
    </Head>
  );
}
