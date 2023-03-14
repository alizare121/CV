import Head from 'next/head';

export default function Home() {
  return (
    <>
      <Head>
        <title>Ali Zare CV</title>
        <meta name='description' content='Ali Zare CV' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.png' />
      </Head>
      <main className='bg-lightBlue'>
       <span className='text-navy'> my name is ali zare </span>
      </main>
    </>
  );
}
