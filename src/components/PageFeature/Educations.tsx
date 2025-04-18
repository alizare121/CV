import Image from 'next/image';
import { PageInterface } from '@types';
import azad from '../../assets/images/azad.png';
import amol from '../../assets/images/amol.png';
import beh from '../../assets/images/beh.png';
export default function Educations({ messages }: PageInterface) {
  const items = [
    {
      img: azad,
      title: messages.masterTitle,
      date: messages.masterDate,
      degree: messages.eduTitle,
    },
    {
      img: amol,
      title: messages.bachelorTitle,
      date: messages.bachelorDate,
      degree: messages.eduTitle,
    },
    {
      img: beh,
      title: messages.associateTitle,
      date: messages.associateDate,
      degree: messages.eduTitle,
    },
  ];
  return (
    <section>
      <div className='mt-14 flex flex-col items-center justify-center'>
        <span className='text-white'>{messages.qualification}</span>
        <h4 className='text-4xl text-yellow font-bold'>
          {messages.educations}
        </h4>
      </div>
      <div className='flex flex-row justify-around mt-8'>
        <div>
          {items.map((item, index) => (
            <div
              key={`${item.title}`}
              className={
                'flex flex-row bg-white rounded-lg px-8 py-4 mt-3 shadow-md edu-item'
              }
              style={{
                animationDelay: `${index * 0.3}s`,
              }}
            >
              <Image
                src={item.img}
                alt='school'
                width={80}
                height={50}
                className='object-contain me-4'
              />
              <div className='flex flex-col ms-2'>
                <span className='text-2xl font-bold'>{item.degree}</span>
                <span className='text-darkGray'>{item.title}</span>
                <span className='bg-yellow text-darkGray py-1 px-3 w-fit rounded-lg'>
                  {item.date}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
