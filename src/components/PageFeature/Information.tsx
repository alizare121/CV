import { useEffect, useState } from '@utils';
import { PageInterface } from '@enums';
import { Button } from 'antd';
import Link from 'next/link';
import Image from 'next/image';
import personal1 from '../../assets/images/1.png';

import js from '../../assets/images/skill/JavaScript-logo.png';
import ts from '../../assets/images/skill/typescript.svg';
import reactIcon from '../../assets/images/skill/react1.png';
import nextIcon from '../../assets/images/skill/next-js.svg';
import tailwindIcon from '../../assets/images/skill/tailwind.svg';
import reactNativeIcon from '../../assets/images/skill/react-native.png';

export function Information({ messages }: PageInterface) {
  const [shuffledSkills, setShuffledSkills] = useState<any>([]);

  useEffect(() => {
    // Shuffle skills randomly on mount
    const shuffled: any = [...skills].sort(() => Math.random() - 0.5);
    setShuffledSkills(shuffled);
  }, []);

  const skills = [
    { name: 'JavaScript', x: '-260px', y: '120px', image: js },
    { name: 'TypeScript', x: '260px', y: '140px', image: ts },
    { name: 'React JS', x: '-230px', y: '220px', image: reactIcon },
    { name: 'Next JS', x: '-280px', y: '330px', image: nextIcon },
    { name: 'React Native', x: '280px', y: '360px', image: reactNativeIcon },
    { name: 'Tailwind CSS', x: '320px', y: '250px', image: tailwindIcon },
  ];
  return (
    <div className='flex justify-center items-center flex-col'>
      <span className='text-yellow text-2xl font-bold'>
        <span className='text-white'>{messages.hi}</span> {messages.name}
      </span>
      <span className='text-5xl text-white font-bold my-2 animate-pulse'>
        {messages.jobTitle}
      </span>
      <span className='text-white text-2xl'>{messages.jobInfo}</span>
      <div className='mt-4 flex flex-row gap-6'>
        <Link href='tel:+989101011426'>
          <Button className='bg-yellow text-black rounded-full border-0 text-lg px-16 py-8 flex justify-center items-center'>
            {messages.call}
          </Button>
        </Link>
        <a target='_blank' href='/AliZareCV.pdf'>
          <Button className='text-yellow border-yellow rounded-full text-lg px-16 py-8 flex justify-center items-center '>
            {messages.cv}
          </Button>
        </a>
      </div>
      <div className='w-full flex justify-center'>
        {shuffledSkills.map((skill: any, index: number) => (
          <div
            key={index}
            className='flex flex-row gap-4 skill-item bg-lightGray font-bold text-black px-6 h-16 rounded-full flex justify-center items-center absolute z-50'
            style={{
              transform: `translateX(${skill.x}) translateY(${skill.y})`,
              animationDelay: `${index * 0.5}s`, // Stagger the animations
            }}
          >
            <Image
              alt='skill-icon'
              src={skill.image}
              width={40}
              height={40}
              className='rounded-lg'
            />
            <span>{skill.name}</span>
          </div>
        ))}

        <div className='container-bg-edu mt-12'>
          <Image
            src={personal1}
            alt='ali'
            width={400}
            height={300}
            priority
            className={`personal-image mt-[-5.5rem]`}
          />
          <div className='custom-bg-skill  bg-yellow mb-[-50px]'></div>
        </div>
      </div>
    </div>
  );
}
