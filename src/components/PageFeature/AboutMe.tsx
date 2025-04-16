import { PageInterface } from '@types';
export default function AboutMe({ messages }: PageInterface) {
  return (
    <div className='flex flex-row mt-14 px-10 items-center justify-center bg-darkGray rounded-2xl '>
      <div className='flex px-8 py-4 flex-1 mx-8 min-w-[25rem]'>
        <span className='text-white text-xl leading-10 text-justify'>
          {messages.about}
        </span>
      </div>
    </div>
  );
}
