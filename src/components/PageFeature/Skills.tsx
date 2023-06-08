import Image from 'next/image'
import personal2 from '../../assets/images/dev1.png'
import { Slider } from '@components'
import { useAppContext } from '@utils'
export function Skills({isEn}:{isEn : boolean}) {
    const { messages } = useAppContext();
    const scale = isEn ? '' : 'scale-x-[-1]'
    return (
        <section>
            <div className='mt-10 flex flex-col items-center justify-center'>
                <span className='text-pink'>{messages.expertise}</span>
                <span className='text-4xl text-navy font-bold'>{messages.skills}</span>
            </div>
            <div className='flex flex-row items-center mt-4'>
                <Image src={personal2} alt='ali' width={350} height={250} className={`me-20 ${scale}`} />
                <div className='flex-1'>
                    <Slider />
                </div>

            </div>
        </section>
    )
}