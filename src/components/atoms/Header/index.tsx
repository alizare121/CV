import Head from 'next/head';

export function Header() {
  const faTitle = 'علی زارع - رزومه توسعه دهنده نرم افزار';
  const enTitle = 'Ali Zare - Software Developer Resume';
  const faDescription =
    'رزومه و مجموعه حرفه ای علی زارع را با نمایش مهارت ها، تجربیات و پروژه ها بررسی کنید.';
  const enDescription =
    'Explore the resume and professional portfolio of Ali Zare, showcasing skills, experiences, and projects.';
  return (
    <Head>
      <title lang='fa'>{faTitle}</title>
      <title lang='en'>{enTitle}</title>
      <meta name='description' content={faDescription} lang='fa' />
      <meta name='description' content={enDescription} lang='en' />
      <meta name='viewport' content='width=1224' />
      <link rel='icon' href='/dev-icon.webp' />
      <link
        rel='preload'
        href='/fonts/IRANSans.ttf'
        as='font'
        crossOrigin='anonymous'
      />
      <meta property='og:title' content={enTitle} />
      <meta property='og:description' content={enDescription} />
      <meta property='og:type' content='website' />
      <meta property='og:image' content='https://www.aliiz.ir/dev-icon.png' />
      <meta name='twitter:card' content='summary_large_image' />
      <meta name='twitter:image' content='https://www.aliiz.ir/dev-icon.png' />
    </Head>
  );
}
