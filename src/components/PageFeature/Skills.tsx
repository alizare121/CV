import Image from "next/image";
import personal2 from "../../assets/images/dev1.png";
import { Slider } from "@components";
import { useAppContext } from "@utils";
import { SkillsInterface } from "@enums";
export function Skills({ isEn }: { isEn: boolean }) {
  const { messages } = useAppContext();
  const scale = isEn ? "" : "scale-x-[-1]";

  const data: SkillsInterface[] = [
    {
      id: 1,
      title: "Development",
      icon: "code",
      data: [
        "JavaScript (ES6 & Beyond) ",
        "TypeScript",
        "React JS",
        "React Native",
        "Next js",
        "State Management : Redux(thunk), Context Api, MobX, Recoil , jotai",
        "HTML, CSS, SASS, Style-jsx, emotion, Post-css",
        "Bootstrap, Material-Ui, Ant Design, Styled-Components, tailwind",
        "Test : Unit Test (jest), Integration Test(jest), End to End Test(puppeteer)",
        "Webpack , Vite.js",
      ],
    },
    {
      id: 2,
      title: "Tools",
      icon: "wrench",
      data: [
        "Git , Git Flow , monorepo , husky , Submodules",
        "Firebase (Push Notification , Analytics , Crashlytics) , Tag Manager",
        "Update (CodePush)",
        "Monitoring ( Sentry )",
        "Documentation ( StoryBook )",
        "Scrum methodology , Kanban",
      ],
    },
    {
      id: 3,
      title: "Blockchain",
      icon: "blockchain",
      data: ["Solidity", "Blockchain", "Ethereum", "Smart Contract"],
      note: "I am learning and junior in this field",
    },
    {
      id: 4,
      title: "Network",
      icon: "monitor",
      data: ["MikroTik", "MCITP", "Linux", "Docker"],
    },
    {
      id: 5,
      title: "Soft Skills",
      icon: "user",
      data: [
        messages.softSkill1,
        messages.softSkill2,
        messages.softSkill3,
        messages.softSkill4,
        messages.softSkill5,
        messages.softSkill6,
        messages.softSkill7,
        messages.softSkill8,
        messages.softSkill9,
      ],
    },
  ];
  return (
    <section>
      <div className="mt-20 flex flex-col items-center justify-center mb-[-3rem]">
        <span className="text-pink">{messages.expertise}</span>
        <span className="text-4xl text-navy font-bold">{messages.skills}</span>
      </div>
      <div className="flex flex-row items-center mx-20">
        <div className="w-[40%] flex items-center justify-center">
          <Image
            src={personal2}
            alt="ali"
            width={500}
            height={300}
            className={`me-20 ${scale} `}
          />
        </div>
        <div className="flex-1">
          <Slider data={data} />
        </div>
      </div>
    </section>
  );
}
