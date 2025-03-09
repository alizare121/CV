import { PageInterface } from '@enums';
export default function Skills({ messages }: PageInterface) {
  const badges = [
    {
      src: 'https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E',
      alt: 'JavaScript (ES6 & Beyond)',
    },
    {
      src: 'https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white',
      alt: 'TypeScript',
    },
    {
      src: 'https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB',
      alt: 'React JS',
    },
    {
      src: 'https://img.shields.io/badge/react_native-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB',
      alt: 'React Native',
    },
    {
      src: 'https://img.shields.io/badge/next-black?style=for-the-badge&logo=next.js&logoColor=white',
      alt: 'Next.js',
    },
    {
      src: 'https://img.shields.io/badge/redux-%23593d88.svg?style=for-the-badge&logo=redux&logoColor=white',
      alt: 'Redux (Thunk)',
    },
    {
      src: 'https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white',
      alt: 'React Router',
    },
    {
      src: 'https://img.shields.io/badge/React%20Hook%20Form-%23EC5990.svg?style=for-the-badge&logo=reacthookform&logoColor=white',
      alt: 'React Hook Form',
    },
    {
      src: 'https://img.shields.io/badge/Context%20API-%23000000.svg?style=for-the-badge&logo=react&logoColor=white',
      alt: 'Context API',
    },
    {
      src: 'https://img.shields.io/badge/mobx-%23FF9955.svg?style=for-the-badge&logo=mobx&logoColor=black',
      alt: 'MobX',
    },
    {
      src: 'https://img.shields.io/badge/recoil-%23FF4242.svg?style=for-the-badge&logo=recoil&logoColor=white',
      alt: 'Recoil',
    },
    {
      src: 'https://img.shields.io/badge/jotai-%23F7C12E.svg?style=for-the-badge&logo=jotai&logoColor=black',
      alt: 'Jotai',
    },
    {
      src: 'https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white',
      alt: 'HTML',
    },
    {
      src: 'https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white',
      alt: 'CSS',
    },
    {
      src: 'https://img.shields.io/badge/sass-hotpink.svg?style=for-the-badge&logo=SASS&logoColor=white',
      alt: 'SASS',
    },
    {
      src: 'https://img.shields.io/badge/style--jsx-%23FF4081.svg?style=for-the-badge&logo=react&logoColor=white',
      alt: 'Style-jsx',
    },
    {
      src: 'https://img.shields.io/badge/emotion-%2361DAFB.svg?style=for-the-badge&logo=emotion&logoColor=white',
      alt: 'Emotion',
    },
    {
      src: 'https://img.shields.io/badge/postcss-%23DD3A0A.svg?style=for-the-badge&logo=postcss&logoColor=white',
      alt: 'Post-CSS',
    },
    {
      src: 'https://img.shields.io/badge/bootstrap-%23563D7C.svg?style=for-the-badge&logo=bootstrap&logoColor=white',
      alt: 'Bootstrap',
    },
    {
      src: 'https://img.shields.io/badge/material--ui-%230081CB.svg?style=for-the-badge&logo=mui&logoColor=white',
      alt: 'Material-UI',
    },
    {
      src: 'https://img.shields.io/badge/ant%20design-%2300A0B0.svg?style=for-the-badge&logo=ant-design&logoColor=white',
      alt: 'Ant Design',
    },
    {
      src: 'https://img.shields.io/badge/styled--components-%23DB7093.svg?style=for-the-badge&logo=styled-components&logoColor=white',
      alt: 'Styled-Components',
    },
    {
      src: 'https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white',
      alt: 'TailwindCSS',
    },
    {
      src: 'https://img.shields.io/badge/jest-%23C21325.svg?style=for-the-badge&logo=jest&logoColor=white',
      alt: 'Jest (Unit Test)',
    },
    {
      src: 'https://img.shields.io/badge/puppeteer-%23010000.svg?style=for-the-badge&logo=puppeteer&logoColor=white',
      alt: 'Puppeteer (End to End Test)',
    },
    {
      src: 'https://img.shields.io/badge/webpack-%238DD6F9.svg?style=for-the-badge&logo=webpack&logoColor=black',
      alt: 'Webpack',
    },
    {
      src: 'https://img.shields.io/badge/vite-%23646CFF.svg?style=for-the-badge&logo=vite&logoColor=white',
      alt: 'Vite.js',
    },
    {
      src: 'https://img.shields.io/badge/git-%23F05032.svg?style=for-the-badge&logo=git&logoColor=white',
      alt: 'Git',
    },
    {
      src: 'https://img.shields.io/badge/git--flow-%23F05032.svg?style=for-the-badge&logo=git&logoColor=white',
      alt: 'Git Flow',
    },
    {
      src: 'https://img.shields.io/badge/monorepo-%23FF6200.svg?style=for-the-badge&logo=google&logoColor=white',
      alt: 'Monorepo',
    },
    {
      src: 'https://img.shields.io/badge/husky-%23FFB000.svg?style=for-the-badge&logo=husky&logoColor=black',
      alt: 'Husky',
    },
    {
      src: 'https://img.shields.io/badge/firebase-%23FFCA28.svg?style=for-the-badge&logo=firebase&logoColor=black',
      alt: 'Firebase',
    },
    {
      src: 'https://img.shields.io/badge/codepush-%2300C4B3.svg?style=for-the-badge&logo=react&logoColor=white',
      alt: 'CodePush (Update)',
    },
    {
      src: 'https://img.shields.io/badge/sentry-%23E15B4A.svg?style=for-the-badge&logo=sentry&logoColor=white',
      alt: 'Sentry (Monitoring)',
    },
    {
      src: 'https://img.shields.io/badge/storybook-%23FF4785.svg?style=for-the-badge&logo=storybook&logoColor=white',
      alt: 'Storybook (Documentation)',
    },
    {
      src: 'https://img.shields.io/badge/scrum-%23FF6F00.svg?style=for-the-badge&logo=scrum&logoColor=white',
      alt: 'Scrum Methodology',
    },
    {
      src: 'https://img.shields.io/badge/kanban-%23E80000.svg?style=for-the-badge&logo=kanban&logoColor=white',
      alt: 'Kanban',
    },
    {
      src: 'https://img.shields.io/badge/mikrotik-%2393CC7B.svg?style=for-the-badge&logo=mikrotik&logoColor=white',
      alt: 'MikroTik',
    },
    {
      src: 'https://img.shields.io/badge/mcitp-%23F35F5F.svg?style=for-the-badge&logo=microsoft&logoColor=white',
      alt: 'MCITP',
    },
    {
      src: 'https://img.shields.io/badge/linux-%23FCC624.svg?style=for-the-badge&logo=linux&logoColor=black',
      alt: 'Linux',
    },
    {
      src: 'https://img.shields.io/badge/docker-%230db7ed.svg?style=for-the-badge&logo=docker&logoColor=white',
      alt: 'Docker',
    },
  ];
  return (
    <section>
      <div className='mt-20 flex flex-col items-center justify-center'>
        <span className='text-white'>{messages.expertise}</span>
        <h3 className='text-4xl text-yellow font-bold'>{messages.skills}</h3>
      </div>
      <div className='mt-8 flex flex-wrap gap-4 justify-center'>
        {badges.map((badge) => (
          <img
            key={badge.alt}
            src={badge.src}
            alt={badge.alt}
            className='h-[40px]'
          />
        ))}
      </div>
    </section>
  );
}
