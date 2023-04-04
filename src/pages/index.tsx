import Head from 'next/head';
import { useAppContext, useRouter, useEffect } from '@utils';
import { WorkExperiences, Skills, Educations, AboutMe } from '@components'
import { Button, Switch } from 'antd';
import Link from 'next/link';

export default function Home() {
  const { messages, setLang } = useAppContext();
  const router = useRouter();

  const onChangeLang = () => {
    setLang?.({ locale: router.locale, document });
  };

  useEffect(onChangeLang, [router.locale]);

  const languageCheck: string = router?.locale === 'en' ? 'fa' : 'en';

  return (
    <>
      <Head>
        <title>Ali Zare CV</title>
        <meta name='description' content='Ali Zare CV' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/dev-icon2.png' />
      </Head>
      <main className='p-4'>
        <Link
          className='flex items-center'
          href={router.asPath}
          locale={languageCheck}
          passHref
          onClick={onChangeLang}
        >
          <Switch
            defaultChecked
            onChange={onChangeLang}
            unCheckedChildren='EN'
            checkedChildren='FA'
            size='small'
            style={{ backgroundColor: '#394562' }}
          />
        </Link>
        <section className='bg-lightBlue mt-4 py-20 rounded-lg px-20 flex flex-col relative'>
          <span className='text-navy text-lg font-bold'>
            <span className='text-pink'>{messages.hi}</span>, {messages.name}
          </span>
          <span className='text-4xl text-navy font-bold my-2'>
            {messages.jobTitle}
          </span>
          <span className='text-lightNavy'>{messages.jobInfo}</span>
          <div className='mt-4'>
            <Link href='tel:+989101011426'>
              <Button className='mr-6 bg-pink text-white rounded-2xl text-xs px-8'>
                Call Me
              </Button>
            </Link>
            <Link href='https://filebin.net/s0r92yhrwrfeom6j/Ali_Zare_CV.v1__5_.pdf'>
              <Button className='text-pink border-pink rounded-2xl text-xs px-8'>
                Get CV
              </Button>
            </Link>
          </div>
          <div className='bg-white absolute right-0 py-1 px-4 top-40 rounded-s-2xl'>
            <span> social media </span>
          </div>
          <WorkExperiences />
          <Skills />
          <Educations />
          <AboutMe />
        </section>
      </main>
    </>
  );
}
