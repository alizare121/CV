import Image from 'next/image'
import personal2 from '../../assets/images/2.jpg'
import azad from '../../assets/images/azad.png'
import edu from '../../assets/images/education.png'
export function Educations () {
    return (
        <section>
        <div className='mt-14 flex flex-col items-center justify-center'>
        <span className='text-pink'>Qualification</span>
        <span className='text-4xl text-navy font-bold'>Educations</span>
        </div>
        <div className='flex flex-row justify-between mt-4'>
        <div>
        <div className='flex flex-row bg-white rounded-lg px-8 py-4'>
            <Image src={azad} alt='tse' width={90} height={50} objectFit='contain' />
            <div className='flex flex-col ml-2'>
            <span className='text-xl text-navy font-bold'>Software Engineering</span>
            <span className='text-pink'>Master (MSc/MA) - Islamic Azad University Science and Research Branch </span>
            <span className='text-lightNavy'>2014 - 2016 , Tehran</span>
            </div>
          </div>

          <div className='flex flex-row bg-white rounded-lg px-8 py-4 mt-3'>
            <Image src={edu} alt='tse' width={80} height={50} objectFit='contain' />
            <div className='flex flex-col ml-2'>
            <span className='text-xl text-navy font-bold'>Software Engineering</span>
            <span className='text-pink'>Bachelor(BSc/BA) - Amol Institute of Higher Education </span>
            <span className='text-lightNavy'>2012 - 2014 , Mazandaran, Amol</span>
            </div>
          </div>

          <div className='flex flex-row bg-white rounded-lg px-8 py-4 mt-3'>
            <Image src={edu} alt='tse' width={80} height={50} objectFit='contain' className='bg-white' />
            <div className='flex flex-col ml-2'>
            <span className='text-xl text-navy font-bold'>Software Engineering</span>
            <span className='text-pink'>Associate - Technical Institute Of Behshahr - Imam Khomeini </span>
            <span className='text-lightNavy'>2009 - 2012 , Mazandaran, Behshahr</span>
            </div>
          </div>
        </div>
        <Image src={personal2} alt='ali' width={600} height={500} />
        </div>
        </section>
    )
}