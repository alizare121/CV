/* eslint-disable react/no-unescaped-entities */
import { PageInterface } from '@enums';
export function Summary({ messages }: PageInterface) {
  return (
    <div className='mt-20 flex justify-center flex-col items-center text-center gap-4'>
      <span className='text-4xl font-bold text-yellow'>About Me</span>
      <div className='flex bg-darkGray flex-col w-full rounded-2xl p-8'>
        <p className='text-justify text-white text-xl leading-8'>
          {messages.summary}
        </p>
      </div>
    </div>
  );
}
