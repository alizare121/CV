import { PageInterface, SkillsInterface } from '@types';

interface SkillInterface extends PageInterface, SkillsInterface {}
export default function Skills({ messages, badges }: SkillInterface) {
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
