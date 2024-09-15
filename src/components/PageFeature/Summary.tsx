/* eslint-disable react/no-unescaped-entities */
import Image from 'next/image';
import { useAppContext } from '@utils';
import personal1 from '../../assets/images/1.png';
export function Summary() {
  const { messages } = useAppContext();
  return (
    <div className='flex flex-col w-full mt-4 items-center justify-center'>
      <Image
        src={personal1}
        alt='ali'
        width={400}
        height={300}
        className='mt-[-14rem]'
        priority
        sizes="(max-width: 600px) 100vw, 50vw" 
      />
      <div className='bg-white flex flex-col w-full rounded-lg p-8 shadow-md'>
        <span className='text-justify text-navy'>{messages.summary}</span>
      </div>
    </div>
  );
}
