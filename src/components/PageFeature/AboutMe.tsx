import { Image } from '@components'
import personal2 from '../../assets/images/dev1.png'
export function AboutMe() {
    return <div className='flex flex-row mt-14 pl-10'>
        <Image src={personal2} alt='ali' width={250} height={200} />
        <div className='flex bg-white rounded-lg px-8 py-4 shadow-md flex-1 mx-8'>
            about ali zare
        </div>
        <Image src={personal2} alt='ali' width={250} height={200}  />
    </div>
}