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
  Switch,
  Link,
} from '@components';

export default function Home() {
  const { setLang } = useAppContext();
  const router = useRouter();

  const onChangeLang = () => {
    setLang?.({ locale: router.locale, document });
  };

  useEffect(onChangeLang, [router.locale]);

  const languageCheck: string = router?.locale === 'en' ? 'fa' : 'en';
  const isEn = router?.locale === 'en';

  return (
    <>
      <Header />
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
