import { useAppContext, useRouter, useEffect } from '@utils';
import {
  Summary,
  WorkExperiences,
  Skills,
  Educations,
  AboutMe,
  SocialMedia,
  Information,
  Header,
  Select,
} from '@components';
import fs from 'fs';
import path from 'path';
import { PageInterface } from '@enums';
import { GetStaticPropsContext } from 'next';

export default function Home({ messages }: PageInterface) {
  const { setLang } = useAppContext();
  const router = useRouter();

  const onChangeLang = () => {
    setLang?.({ locale: router.locale, document });
  };

  useEffect(onChangeLang, [router.locale]);

  const handleChange = (value: string) => {
    router.push(router.asPath, router.asPath, { locale: value });
  };

  return (
    <>
      <Header />
      <main>
        <section className='bg-black py-20 px-28 flex flex-col relative'>
          <section className='wrapper'>
            <div id='stars'></div>
            <div id='stars2'></div>
            <div id='stars3'></div>
          </section>
          <div className='absolute top-8 start-8'>
            <Select
              defaultValue='English'
              style={{ width: 100 }}
              onChange={handleChange}
              options={[
                { value: 'en', label: 'English' },
                { value: 'de', label: 'Deutsch' },
                { value: 'fa', label: 'فارسی' },
              ]}
              size='middle'
            />
          </div>
          <Information messages={messages} />
          <SocialMedia />
          <Summary messages={messages} />
          <WorkExperiences messages={messages} />
          <Skills messages={messages} />
          <Educations messages={messages} />
          <AboutMe messages={messages} />
        </section>
      </main>
    </>
  );
}

export async function getStaticProps({ locale }: GetStaticPropsContext) {
  const lang = locale || 'en';

  const filePath = path.join(
    process.cwd(),
    'src',
    'assets',
    'dictionary',
    `${lang}.json`
  );

  const jsonData = JSON.parse(fs.readFileSync(filePath, 'utf-8'));

  return {
    props: {
      messages: jsonData,
    },
  };
}
