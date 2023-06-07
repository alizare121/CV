import Head from 'next/head';
import { useAppContext, useRouter, useEffect } from '@utils';
import { WorkExperiences, Skills, Educations, AboutMe, Icon } from '@components'
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

  const socialData = [
    {
      id: 1,
      title: 'github',
      icon: 'github-circled',
      link: 'https://github.com/alizare121'
    },
    {
      id: 2,
      title: 'linkedin',
      icon: 'linkedin-circled',
      link: 'https://www.linkedin.com/in/ali-zare/',
      color: 'text-[#0c65c2]'
    },
    {
      id: 3,
      title: 'email',
      icon: 'mail-alt',
      link: 'mailto:aliiizaareee@gmail.com',
      color: 'text-[#db5649]'
    },
    {
      id: 4,
      title: 'telegram',
      icon: 'telegram',
      link: 'https://t.me/aliiizareee',
      color: 'text-[#26a0dc]'
    }
  ]

  return (
    <>
      <Head>
        <title>Ali Zare CV</title>
        <meta name='description' content='Ali Zare CV' />
        <meta name='viewport' content="width=1024" />
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
            <a target="_blank" href='/Ali Zare CV.v1.pdf'>
              <Button className='text-pink border-pink rounded-2xl text-xs px-8'>
                Get CV
              </Button>
            </a>
          </div>
          <div className='bg-white absolute right-0 py-2 px-4 top-40 rounded-s-2xl flex flex-row'>
            {
              socialData.map(({ link, icon, id, color }) => {
                return (
                  <a key={id} target="_blank" href={link} className='mr-1 hover:scale-110 hover:bg-indigo-500 duration-300'>
                    <Icon iconName={icon} className={`text-3xl ${color} `} />
                  </a>
                )
              })
            }
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
