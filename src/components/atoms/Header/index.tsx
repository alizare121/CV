import Head from 'next/head';

export function Header() {
  const faTitle = 'علی زارع - رزومه توسعه دهنده نرم افزار';
  const enTitle = 'Ali Zare - Software Developer Resume';
  const faDescription =
    'رزومه و مجموعه حرفه ای علی زارع را با نمایش مهارت ها، تجربیات و پروژه ها بررسی کنید.';
  const enDescription =
    'Explore the resume and professional portfolio of Ali Zare, showcasing skills, experiences, and projects.';

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Ali Zare',
    jobTitle: 'Frontend Developer',
    url: 'https://aliiz.ir',
    image:
      'https://aliiz.ir/_next/image?url=%2F_next%2Fstatic%2Fmedia%2F1.1dcd91eb.png&w=828&q=75',
    sameAs: [
      'https://www.linkedin.com/in/ali-zare/',
      'https://github.com/alizare121',
    ],
    description:
      'Skilled frontend developer with over 6 years of experience specializing in JavaScript, TypeScript, and modern frameworks like React and Next.js. Experienced in enhancing code quality and driving technical transformations across multiple projects. Demonstrated ability to lead front-end architecture redesigns and performance optimizations to support business growth. Known for creating intuitive, high-performance UIs and leading cross-functional teams to achieve significant results. Proven record of enhancing UX and optimizing performance, with a deep commitment to continuous learning and delivering high-quality, scalable solutions.',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Tehran',
      addressCountry: 'IR',
    },
    email: 'mailto:aliiizaareee@gmail.com',
    knowsLanguage: ['Persian', 'English', 'German'],
    knowsAbout: [
      'JavaScript',
      'React',
      'TypeScript',
      'Frontend Development',
      'Next js',
    ],
  };
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
      <script
        type='application/ld+json'
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(schema),
        }}
      />
    </Head>
  );
}
