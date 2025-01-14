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
  Particle,
  Select,
} from '@components';

export default function Home() {
  const { setLang } = useAppContext();
  const router = useRouter();

  const onChangeLang = () => {
    setLang?.({ locale: router.locale, document });
  };

  useEffect(onChangeLang, [router.locale]);

  const isEn = router?.locale === 'en' || router?.locale === 'de';

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
          <Information />
          <SocialMedia />
          <Summary />
          <WorkExperiences />
          <Skills isEn={isEn} />
          <Educations isEn={isEn} />
          <AboutMe />
        </section>
      </main>
    </>
  );
}
