import { Image, Link } from '@components';
import { Button } from 'antd';
export default function PageNotFound() {
  return (
    <div className='bg-lightBlue h-[95vh] m-4 flex flex-col items-center justify-center rounded-lg'>
      <Image src='/dev-icon-404.png' alt='logo' width={300} height={300} />
      <span className='my-10 text-4xl text-navy'>
        404 | This page could not be found.
      </span>
      <Link href='/'>
        <Button className='text-navy border-navy rounded-2xl text-xs px-8'>
          Go to home
        </Button>
      </Link>
    </div>
  );
}
