import { useAppContext, useRouter, useEffect } from "@utils";
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
} from "@components";

export default function Home() {
  const { setLang } = useAppContext();
  const router = useRouter();

  const onChangeLang = () => {
    setLang?.({ locale: router.locale, document });
  };

  useEffect(onChangeLang, [router.locale]);

  const isEn = router?.locale === "en" || router?.locale === "de";

  const handleChange = (value: string) => {
    router.push(router.asPath, router.asPath, { locale: value });
  };

  return (
    <>
      <Header />
      <main className="p-4 ">
        <div className="flex items-center">
          <Select
            defaultValue="English"
            style={{ width: 100 }}
            onChange={handleChange}
            options={[
              { value: "en", label: "English" },
              { value: "de", label: "Deutsch" },
              { value: "fa", label: "فارسی" },
            ]}
            size="middle"
          />
        </div>

        <section className="bg-lightBlue mt-4 py-20 rounded-lg px-20 flex flex-col relative">
          <Information />
          <SocialMedia />
          <Summary />
          <WorkExperiences />
          <Skills isEn={isEn} />
          <Educations isEn={isEn} />
          <AboutMe />
        </section>
        <Particle />
      </main>
    </>
  );
}
