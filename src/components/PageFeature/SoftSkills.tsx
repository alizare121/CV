import { PageInterface } from '@enums';
export default function SoftSkills({ messages }: PageInterface) {
  const softSkills = [
    {
      label: messages.problemSolving,
      color: '#00c4b3',
    },
    {
      label: messages.criticalThinking,
      color: '#e15b4a',
    },
    {
      label: messages.communication,
      color: '#563d7c',
    },
    {
      label: messages.leadership,
      color: '#0db7ed',
    },
    {
      label: messages.selfLearning,
      color: '#ff4081',
    },
    {
      label: messages.accountability,
      color: '#ff6f00',
    },
    {
      label: messages.adaptability,
      color: '#f35f5f',
    },
    {
      label: messages.mentoring,
      color: '#ec5990',
    },
    {
      label: messages.flexibility,
      color: '#ca4245',
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
        {softSkills.map((badge, i) => (
          <div
            key={`${badge.label}${i}`}
            style={{ backgroundColor: badge.color }}
            className='py-3 px-8 text-white text-xl font-medium'
          >
            <span>{badge.label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
