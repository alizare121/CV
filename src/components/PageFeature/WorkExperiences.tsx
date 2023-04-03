/* eslint-disable react/no-unescaped-entities */
import Image from 'next/image'
import { useAppContext } from '@utils'
import personal1 from '../../assets/images/1.jpg'
import tse from '../../assets/images/tse.png'
import banimood from '../../assets/images/banimode.jpeg';
import i1st from '../../assets/images/1st.jpeg';
export function WorkExperiences() {
  const { messages } = useAppContext();
  return (
    <div className='flex flex-col w-full mt-4 items-center justify-center'>
      <Image src={personal1} alt='ali' width={600} height={500} />
      <div className='bg-white flex flex-col w-full rounded-lg p-8'>
        <div className='flex flex-col items-center justify-center w-full'>
          <span className='text-4xl text-navy font-bold'>{messages.workExperiences}</span>
          <span className='text-pink'>{messages.workSummeryInfo}</span>
        </div>
        <div className='flex flex-col mx-10 mt-10 '>
          <div className='flex flex-row'>
            <Image src={tse} alt='tse' width={70} height={40} className='object-contain mr-7' />
            <div className='flex flex-col ml-2'>
              <span className='text-xl text-navy font-bold'>{messages.tseJobTitle}</span>
              <span className='text-pink'>{messages.tseJobDate}</span>
              <span className='text-lightNavy'>{messages.tseJobInfo}</span>
            </div>
          </div>


          <div className='flex flex-row mt-8'>
            <Image src={banimood} alt='tse' width={90} height={50} className='object-contain mr-4' />
            <div className='flex flex-col ml-2'>
              <span className='text-xl text-navy font-bold'>{messages.baniJobTitle}</span>
              <span className='text-pink'>{messages.baniJobDate}</span>
              <span className='text-lightNavy'>{messages.baniJobInfo}</span>
            </div>
          </div>

          <div className='flex flex-row mt-8'>
            <Image src={i1st} alt='tse' width={90} height={50} className='object-contain mr-4' />
            <div className='flex flex-col ml-2'>
              <span className='text-xl text-navy font-bold'>{messages.stJobTitle}</span>
              <span className='text-pink'>{messages.stJobDate}</span>
              <span className='text-lightNavy'>{messages.stJobInfo}</span>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}