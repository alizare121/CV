import Image from 'next/image';
import personal2 from '../../assets/images/dev1.png';
import { Slider } from '@components';
import { useAppContext } from '@utils';
import { SkillsInterface } from '@enums';
export function Skills({ isEn }: { isEn: boolean }) {
  const { messages } = useAppContext();
  const scale = isEn ? '' : 'scale-x-[-1]';

  const data: SkillsInterface[] = [
    {
      id: 1,
      title: 'Development',
      icon: 'code',
      data: [
        'JavaScript (ES6 & Beyond) ',
        'TypeScript',
        'React JS',
        'React Native',
        'Next js',
        'State Management : Redux ,Context Api , MobX , Recoil',
        'HTML/CSS',
        'Bootstrap/Material-Ui/Ant Design/StyledComponents/tailwind',
        'Test : Static Test (Flow ) , Unit Test (jest)',
      ],
    },
    {
      id: 2,
      title: 'Tools',
      icon: 'wrench',
      data: [
        'Git (Git Flow)',
        'Firbase (Push Notification , Analytics , Crashlytics)',
        'Update (CodePush)',
        'Monitoring ( Sentry )',
        'Documentation ( StoryBook )',
        'Scrum methodology',
      ],
    },
    {
      id: 3,
      title: 'Network',
      icon: 'monitor',
      data: ['MikroTik', 'MCITP', 'Linux', 'Docker'],
    },
    {
      id: 4,
      title: 'Soft Skills',
      icon: 'user',
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
      <div className='mt-10 flex flex-col items-center justify-center'>
        <span className='text-pink'>{messages.expertise}</span>
        <span className='text-4xl text-navy font-bold'>{messages.skills}</span>
      </div>
      <div className='flex flex-row items-center mt-4'>
        <div className='container-bg'>
          <Image
            src={personal2}
            alt='ali'
            width={350}
            height={200}
            className={`personal-image me-20 ${scale}`}
          />
          <div className='custom-bg-skill bg-lightPink' />
        </div>
        <div className='flex-1'>
          <Slider data={data} />
        </div>
      </div>
    </section>
  );
}
