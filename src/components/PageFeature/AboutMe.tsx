import { Image } from '@components'
import ali1 from '../../assets/images/ali4.png'
import ali2 from '../../assets/images/ali3.png'
export function AboutMe() {
    return <div className='flex flex-row mt-14 px-10'>
        <Image src={ali1} alt='ali' width={200} height={200} className='opacity-70 rounded-2xl my-8' />
        <div className='flex bg-white rounded-lg px-8 py-4 shadow-md flex-1 mx-8'>
            about ali zare
        </div>
        <Image src={ali2} alt='ali' width={200} height={200} className='opacity-70 rounded-2xl my-8' />
    </div>
}