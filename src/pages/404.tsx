import { Image, Link, Button } from '@components';

export default function PageNotFound() {
  return (
    <div className='bg-black h-[100vh] flex'>
      <div className='bg-darkGray w-full m-8 flex flex-col items-center justify-center rounded-lg'>
        <Image src='/dev-icon-404.webp' alt='logo' width={300} height={300} />
        <span className='my-10 text-4xl text-yellow text-center'>
          404 | This page could not be found.
        </span>
        <Link href='/'>
          <Button className='bg-yellow text-black rounded-full border-0 text-lg px-16 py-8 flex justify-center items-center'>
            Go to home
          </Button>
        </Link>
      </div>
    </div>
  );
}
