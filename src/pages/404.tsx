import CustomLink from '../components/links/CustomLink'
import Seo from '../components/Seo'

export default function NotFoundPage() {
  return (
    <>
      <Seo templateTitle='Not Found' />

      <main>
        <section className='bg-dark'>
          <div className='layout flex min-h-screen flex-col items-center justify-center text-center text-white'>
            <h1 className='mt-8'>Page Not Found</h1>
            <CustomLink className='mt-4' href='/'>
              Return Home
            </CustomLink>
          </div>
        </section>
      </main>
    </>
  )
}

