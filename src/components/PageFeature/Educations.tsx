import Image from 'next/image'
import { useAppContext } from '@utils'
import personal2 from '../../assets/images/2.png'
import azad from '../../assets/images/azad.png'
import amol from '../../assets/images/amol.png'
import beh from '../../assets/images/beh.png'
export function Educations({isEn}:{isEn : boolean}) {
  const { messages } = useAppContext();
  const scale = isEn ? '' : 'scale-x-[-1]'
  return (
    <section>
      <div className='mt-14 flex flex-col items-center justify-center'>
        <span className='text-pink'>{messages.qualification}</span>
        <span className='text-4xl text-navy font-bold'>{messages.educations}</span>
      </div>
      <div className='flex flex-row justify-around mt-8'>
        <div>
          <div className='flex flex-row bg-white rounded-lg px-8 py-4 shadow-md min-w-[40rem]'>
            <Image src={azad} alt='tse' width={90} height={50} className='object-contain me-4' />
            <div className='flex flex-col ms-2'>
              <span className='text-xl text-navy font-bold'>{messages.eduTitle}</span>
              <span className='text-pink'>{messages.masterTitle}</span>
              <span className='text-lightNavy'>{messages.masterDate}</span>
            </div>
          </div>

          <div className='flex flex-row bg-white rounded-lg px-8 py-4 mt-3 shadow-md'>
            <Image src={amol} alt='tse' width={80} height={50} className='object-contain me-4' />
            <div className='flex flex-col ms-2'>
              <span className='text-xl text-navy font-bold'>{messages.eduTitle}</span>
              <span className='text-pink'>{messages.bachelorTitle}</span>
              <span className='text-lightNavy'>{messages.bachelorDate}</span>
            </div>
          </div>

          <div className='flex flex-row bg-white rounded-lg px-8 py-4 mt-3 shadow-md'>
            <Image src={beh} alt='tse' width={80} height={50} className='object-contain me-4' />
            <div className='flex flex-col ms-2'>
              <span className='text-xl text-navy font-bold'>{messages.eduTitle}</span>
              <span className='text-pink'>{messages.associateTitle}</span>
              <span className='text-lightNavy'>{messages.associateDate}</span>
            </div>
          </div>
        </div>
        <Image src={personal2} alt='ali' width={350} height={200} className={`mt-[-4rem] ${scale}`} />
      </div>
    </section>
  )
}