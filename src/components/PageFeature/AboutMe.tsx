import { Image } from '@components';
import { PageInterface } from '@enums';
import ali1 from '../../assets/images/ali4.png';
import ali2 from '../../assets/images/ali3.png';
export default function AboutMe({ messages }: PageInterface) {
  return (
    <div className='flex flex-row mt-14 px-10 items-center justify-center bg-darkGray rounded-2xl '>
      <Image
        src={ali1}
        alt='ali'
        width={200}
        height={230}
        className='opacity-70 rounded-2xl my-8 !h-[230px]'
        layout='intrinsic'
      />
      <div className='flex px-8 py-4 flex-1 mx-8 min-w-[25rem] min-h-[18rem]'>
        <span className='text-white text-xl leading-10 text-justify'>
          {messages.about}
        </span>
      </div>
      <Image
        src={ali2}
        alt='ali'
        width={200}
        height={230}
        className='opacity-70 rounded-2xl my-8 !h-[230px]'
        layout='intrinsic'
      />
    </div>
  );
}
