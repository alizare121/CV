import { useAppContext } from '@utils';
import { Button } from 'antd';
import Link from 'next/link';

export function Information() {
    const { messages } = useAppContext();
    return (
        <>
            <span className='text-navy text-lg font-bold'>
                <span className='text-pink'>{messages.hi}</span> {messages.name}
            </span>
            <span className='text-4xl text-navy font-bold my-2'>
                {messages.jobTitle}
            </span>
            <span className='text-lightNavy'>{messages.jobInfo}</span>
            <div className='mt-4'>
                <Link href='tel:+989101011426'>
                    <Button className='me-6 bg-pink text-white rounded-2xl text-xs px-8'>
                        {messages.call}
                    </Button>
                </Link>
                <a target="_blank" href='/Ali Zare CV.v1.pdf'>
                    <Button className='text-pink border-pink rounded-2xl text-xs px-8'>
                        {messages.cv}
                    </Button>
                </a>
            </div>
        </>
    )
}