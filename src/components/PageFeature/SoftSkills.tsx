import { PageInterface } from '@types';
export default function SoftSkills({ messages }: PageInterface) {
  const softSkills = [
    {
      label: messages.problemSolving,
      color: '#00c4b3',
      textColor: '#181818',
    },
    {
      label: messages.criticalThinking,
      color: '#e15b4a',
      textColor: '#181818',
    },
    {
      label: messages.communication,
      color: '#563d7c',
      textColor: '#ffffff',
    },
    {
      label: messages.leadership,
      color: '#0db7ed',
      textColor: '#181818',
    },
    {
      label: messages.selfLearning,
      color: '#ff4081',
      textColor: '#181818',
    },
    {
      label: messages.accountability,
      color: '#ff6f00',
      textColor: '#181818',
    },
    {
      label: messages.adaptability,
      color: '#f35f5f',
      textColor: '#181818',
    },
    {
      label: messages.mentoring,
      color: '#ec5990',
      textColor: '#181818',
    },
    {
      label: messages.flexibility,
      color: '#ca4245',
      textColor: '#ffffff',
    },
  ];

  return (
    <section>
      <div className='mt-20 flex flex-col items-center justify-center'>
        <h3 className='text-4xl text-yellow font-bold'>
          {messages.softSkills}
        </h3>
      </div>
      <div className='mt-8 flex flex-wrap gap-6 justify-center'>
        {softSkills.map((badge) => (
          <div
            key={`${badge.label}`}
            style={{
              backgroundColor: badge.color,
            }}
            className='py-3 px-8 text-white text-xl font-medium'
          >
            <span style={{ color: badge.textColor }}>{badge.label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
