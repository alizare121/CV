/* eslint-disable react/no-unescaped-entities */
import Image from 'next/image'
import personal1 from '../../assets/images/1.jpg'
import tse from '../../assets/images/tse.png'
import banimood from '../../assets/images/banimode.jpeg';
import i1st from '../../assets/images/1st.jpeg';
export function WorkExperiences() {
  return (
    <div className='flex flex-col w-full mt-4 items-center justify-center'>
      <Image src={personal1} alt='ali' width={600} height={500} />
      <div className='bg-white flex flex-col w-full rounded-lg p-8'>
        <div className='flex flex-col items-center justify-center w-full'>
          <span className='text-4xl text-navy font-bold'>Work Experiences</span>
          <span className='text-pink'>I have more than 8 years of work experience</span>
        </div>
        <div className='flex flex-col mx-10 mt-10 '>
          <div className='flex flex-row'>
            <Image src={tse} alt='tse' width={90} height={50} objectFit='contain' />
            <div className='flex flex-col ml-2'>
              <span className='text-xl text-navy font-bold'>Frontend Developer at Tehran Stock Exchange</span>
              <span className='text-pink'>Apr 2020 - Present </span>
              <span className='text-lightNavy'>We are currently working on multiple web application projects by React js and Next js that belong to Tehran Stock Exchange.
                And I was the leader of the Frontend development team for these projects.</span>
            </div>
          </div>


          <div className='flex flex-row mt-8'>
            <Image src={banimood} alt='tse' width={90} height={50} objectFit='contain' />
            <div className='flex flex-col ml-2'>
              <span className='text-xl text-navy font-bold'>Frontend (Mobile) Developer at Banimode</span>
              <span className='text-pink'>Jan 2020 - Apr 2020 </span>
              <span className='text-lightNavy'>Banimode online store is active in the field of clothing, beauty and health, home appliances, and food.
                We implemented the mobile project of the Banimode store by React Native.</span>
            </div>
          </div>

          <div className='flex flex-row mt-8'>
            <Image src={i1st} alt='tse' width={90} height={50} objectFit='contain' />
            <div className='flex flex-col ml-2'>
              <span className='text-xl text-navy font-bold'>Frontend (Mobile) Developer at First Eurasia E-Commerce</span>
              <span className='text-pink'>July 2018 - Jan 2020 </span>
              <span className='text-lightNavy'>We have Implemented projects in the Fintech fields for business's named PoolKhord and CRM  Payamgostar . as well as this projects built in Android , Web , PWA and Desktop (Windows , Mac OS , Linux) by React Native and with the same code base.
                And I was the leader of the Frontend development team for these projects.
                You can find and view this projects on www.poolkhord.com and www.payamgostar.com</span>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}