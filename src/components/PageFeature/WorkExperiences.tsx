import Image from 'next/image';
import { PageInterface } from '@enums';
import tse from '../../assets/images/tse.png';
import banimood from '../../assets/images/banimode.jpeg';
import i1st from '../../assets/images/1st.jpeg';
import iNet from '../../assets/images/inet.png';
import charisma from '../../assets/images/charisma.jpeg';
export function WorkExperiences({ messages }: PageInterface) {
  return (
    <div className='flex flex-col w-full mt-12 items-center justify-center'>
      <span className='text-4xl text-yellow font-bold'>
        {messages.workExperiences}
      </span>
      <div className='flex flex-col items-center justify-center w-full'>
        <span className='text-white'>{messages.workSummeryInfo}</span>
      </div>
      <div className='flex flex-col w-full mt-6'>
        <div className='grid grid-cols-12 gap-4'>
          <div className='flex flex-col items-start bg-white p-8 rounded-2xl col-span-6'>
            <div className='flex flex row items-center'>
              <Image
                src={charisma}
                alt='charisma'
                width={90}
                height={50}
                className='object-contain'
              />
              <div className='flex flex-col gap-2'>
                <span className='text-2xl font-bold'>
                  {messages.charismaJobTitle}
                </span>
                <span className='bg-yellow px-4 py-1 w-fit rounded-lg '>
                  {messages.charismaJobDate}
                </span>
              </div>
            </div>
            <div className='flex flex-col ms-2'>
              <ul className='list-disc ml-12'>
                {Array.isArray(messages.charismaJobInfo) &&
                  messages.charismaJobInfo?.map((item: string) => (
                    <li>{item}</li>
                  ))}
              </ul>
            </div>
          </div>

          <div className='flex flex-col items-start bg-white p-8 rounded-2xl col-span-6'>
            <div className='flex flex row items-center'>
              <Image
                src={tse}
                alt='tse'
                width={70}
                height={40}
                className='object-contain mx-5'
              />
              <div className='flex flex-col gap-2'>
                <span className='text-2xl font-bold'>
                  {messages.tseJobTitle}
                </span>
                <span className='bg-yellow px-4 py-1 w-fit rounded-lg '>
                  {messages.tseJobDate}
                </span>
              </div>
            </div>
            <div className='flex flex-col ms-2 mt-4'>
              <ul className='list-disc ml-12'>
                {Array.isArray(messages.tseJobInfo) &&
                  messages.tseJobInfo?.map((item: string) => <li>{item}</li>)}
              </ul>
            </div>
          </div>

          <div className='flex flex-col items-start bg-white p-8 rounded-2xl col-span-6'>
            <div className='flex flex row items-center pl-8'>
              <Image
                src={banimood}
                alt='tse'
                width={90}
                height={50}
                className='object-contain me-4'
              />
              <div className='flex flex-col gap-2'>
                <span className='text-2xl font-bold'>
                  {messages.baniJobTitle}
                </span>
                <span className='bg-yellow px-4 py-1 w-fit rounded-lg '>
                  {messages.baniJobDate}
                </span>
              </div>
            </div>
            <div className='flex flex-col ms-2 mt-4'>
              <ul className='list-disc ml-12'>
                {Array.isArray(messages.baniJobInfo) &&
                  messages.baniJobInfo?.map((item: string) => <li>{item}</li>)}
              </ul>
            </div>
          </div>

          <div className='flex flex-col items-start bg-white p-8 rounded-2xl col-span-6'>
            <div className='flex flex row items-center pl-8'>
              <Image
                src={i1st}
                alt='tse'
                width={90}
                height={50}
                className='object-contain me-4'
              />
              <div className='flex flex-col gap-2'>
                <span className='text-2xl font-bold'>
                  {messages.stJobTitle}
                </span>
                <span className='bg-yellow px-4 py-1 w-fit rounded-lg '>
                  {messages.stJobDate}
                </span>
              </div>
            </div>
            <div className='flex flex-col ms-2 mt-4'>
              <ul className='list-disc ml-12'>
                {Array.isArray(messages.stJobInfo) &&
                  messages.stJobInfo?.map((item: string) => <li>{item}</li>)}
              </ul>
            </div>
          </div>

          <div className='flex flex-col items-start bg-white p-8 rounded-2xl col-span-6'>
            <div className='flex flex row items-center pl-8'>
              <Image
                src={i1st}
                alt='tse'
                width={90}
                height={50}
                className='object-contain me-4'
              />
              <div className='flex flex-col gap-2'>
                <span className='text-2xl font-bold'>
                  {messages.stNetJobTitle}
                </span>
                <span className='bg-yellow px-4 py-1 w-fit rounded-lg '>
                  {messages.stNetJobDate}
                </span>
              </div>
            </div>
            <div className='flex flex-col ms-2 mt-4'>
              <ul className='list-disc ml-12'>
                <li>{messages.stNetJobInfo}</li>
              </ul>
            </div>
          </div>

          <div className='flex flex-col items-start bg-white p-8 rounded-2xl col-span-6'>
            <div className='flex flex row items-center pl-8'>
              <Image
                src={iNet}
                alt='tse'
                width={90}
                height={70}
                className='object-contain me-4'
              />
              <div className='flex flex-col gap-2'>
                <span className='text-2xl font-bold'>
                  {messages.freeJobTitle}
                </span>
                <span className='bg-yellow px-4 py-1 w-fit rounded-lg '>
                  {messages.freeJobDate}
                </span>
              </div>
            </div>
            <div className='flex flex-col ms-2 mt-4'>
              <ul className='list-disc ml-12'>
                <li>{messages.freeJobInfo}</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
