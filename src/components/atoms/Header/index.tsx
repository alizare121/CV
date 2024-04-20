import Head from 'next/head';
import { useRouter } from '@utils';

export function Header() {
  const router = useRouter();
  const isEn = router?.locale === 'en';
  
  const title = isEn ? 'Ali Zare - Software Developer Resume' : 'علی زارع - رزومه توسعه دهنده نرم افزار';
  const description =  isEn ?
    'Explore the resume and professional portfolio of Ali Zare, showcasing skills, experiences, and projects.' : 'رزومه و مجموعه حرفه ای علی زارع را با نمایش مهارت ها، تجربیات و پروژه ها بررسی کنید.';
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
