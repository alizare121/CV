/* eslint-disable react/no-unescaped-entities */
import Image from 'next/image';
import { useAppContext } from '@utils';
import personal1 from '../../assets/images/1.png';
import tse from '../../assets/images/tse.png';
import banimood from '../../assets/images/banimode.jpeg';
import i1st from '../../assets/images/1st.jpeg';
import iNet from '../../assets/images/inet.png';
import charisma from '../../assets/images/charisma.jpeg'
export function WorkExperiences() {
  const { messages } = useAppContext();
  return (
    <div className='flex flex-col w-full mt-4 items-center justify-center'>
      <div className='bg-white flex flex-col w-full rounded-lg p-8 shadow-md'>
        <div className='flex flex-col items-center justify-center w-full'>
          <span className='text-4xl text-navy font-bold'>
            {messages.workExperiences}
          </span>
          <span className='text-pink'>{messages.workSummeryInfo}</span>
        </div>
        <div className='flex flex-col mx-10 mt-10 '>
        <div className='flex flex-row'>
            <Image
              src={charisma}
              alt='charisma'
              width={90}
              height={50}
              className='object-contain animate-pulse'
            />
            <div className='flex flex-col ms-2'>
              <span className='text-xl text-navy font-bold'>
                {messages.charismaJobTitle}
              </span>
              <span className='text-pink'>{messages.charismaJobDate}</span>
              <span className='text-lightNavy'>{messages.charismaJobInfo}</span>
            </div>
          </div>

          <div className='flex flex-row mt-8'>
            <Image
              src={tse}
              alt='tse'
              width={70}
              height={40}
              className='object-contain mx-5'
            />
            <div className='flex flex-col ms-2'>
              <span className='text-xl text-navy font-bold'>
                {messages.tseJobTitle}
              </span>
              <span className='text-pink'>{messages.tseJobDate}</span>
              <span className='text-lightNavy'>{messages.tseJobInfo}</span>
            </div>
          </div>

          <div className='flex flex-row mt-8'>
            <Image
              src={banimood}
              alt='tse'
              width={90}
              height={50}
              className='object-contain me-4'
            />
            <div className='flex flex-col ms-2'>
              <span className='text-xl text-navy font-bold'>
                {messages.baniJobTitle}
              </span>
              <span className='text-pink'>{messages.baniJobDate}</span>
              <span className='text-lightNavy'>{messages.baniJobInfo}</span>
            </div>
          </div>

          <div className='flex flex-row mt-8'>
            <Image
              src={i1st}
              alt='tse'
              width={90}
              height={50}
              className='object-contain me-4'
            />
            <div className='flex flex-col ms-2'>
              <span className='text-xl text-navy font-bold'>
                {messages.stJobTitle}
              </span>
              <span className='text-pink'>{messages.stJobDate}</span>
              <span className='text-lightNavy'>{messages.stJobInfo}</span>
            </div>
          </div>

          <div className='flex flex-row mt-8'>
            <Image
              src={i1st}
              alt='tse'
              width={90}
              height={50}
              className='object-contain me-4'
            />
            <div className='flex flex-col ms-2'>
              <span className='text-xl text-navy font-bold'>
                {messages.stNetJobTitle}
              </span>
              <span className='text-pink'>{messages.stNetJobDate}</span>
              <span className='text-lightNavy'>{messages.stNetJobInfo}</span>
            </div>
          </div>

          <div className='flex flex-row mt-8'>
            <Image
              src={iNet}
              alt='tse'
              width={90}
              height={70}
              className='object-contain me-4'
            />
            <div className='flex flex-col ms-2'>
              <span className='text-xl text-navy font-bold'>
                {messages.freeJobTitle}
              </span>
              <span className='text-pink'>{messages.freeJobDate}</span>
              <span className='text-lightNavy'>{messages.freeJobInfo}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
