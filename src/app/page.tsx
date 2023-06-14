import IndexPage from '~/components';

export default function Home() {
  return (
    <main className='flex min-h-screen w-full items-center justify-center p-24'>
      <div className='z-10 w-full items-center justify-center font-mono text-sm lg:flex flex-wrap'>
        <h1 className='font-bold text-xl text-center'>Get Start With Next 13 App</h1>
        <IndexPage />
      </div>
    </main>
  )
}