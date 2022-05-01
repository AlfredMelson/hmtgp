import Typography from '@mui/material/Typography'
import clsx from 'clsx'
import * as React from 'react'
import { SubmitButtonSx } from '../components/common'
import MainLayout from '../components/layout/MainLayout'
import UnstyledLink from '../components/links/UnstyledLink'
import Seo from '../components/Seo'
import useLoaded from '../hooks/useLoaded'

export default function IndexPage() {
  const isLoaded = useLoaded()

  return (
    <MainLayout>
      <Seo />
      <main>
        <section
          className={clsx(
            'min-h-main -mt-20 mb-20 flex flex-col justify-center',
            isLoaded && 'fade-in-start'
          )}>
          <article className='layout'>
            <Typography gutterBottom variant='h5' data-fade='1'>
              Welcome,
            </Typography>
            <Typography gutterBottom variant='h5' data-fade='2'>
              This site is dedicated to my interests in software development and sharing my
              observations on the subject. - Alfred Melson
            </Typography>

            <UnstyledLink href='/articles' data-fade='3'>
              <SubmitButtonSx>Published articles</SubmitButtonSx>
            </UnstyledLink>

            {/* <div data-fade='6' className='mt-4 flex flex-wrap gap-4 gap-y-2 md:mt-8'>
              <a
                href='https://clarence.link/cv'
                className={clsx(
                  'inline-flex items-center gap-1 text-sm font-medium md:text-base',
                  '  text-gray-400 hover:text-white',
                  'focus:outline-none focus-visible:ring focus-visible:ring-primary-300',
                  'transition-colors'
                )}>
                <IoNewspaperSharp className='shrink-0' />
                <span>Resume</span>
              </a>
              <a
                href='https://twitter.com/vmelson'
                className={clsx(
                  'inline-flex items-center gap-1 text-sm font-medium md:text-base',
                  'group text-gray-400 hover:text-white',
                  'focus:outline-none focus-visible:ring focus-visible:ring-primary-300',
                  'transition-colors'
                )}>
                <SiTwitter className='shrink-0 transition-colors group-hover:text-[#1da1f2]' />
                <span>@VMelson</span>
              </a>
              <a
                href='https://github.com/alfredmelson'
                className={clsx(
                  'inline-flex items-center gap-1 text-sm font-medium md:text-base',
                  ' text-gray-400 hover:text-white',
                  'focus:outline-none focus-visible:ring focus-visible:ring-primary-300',
                  'transition-colors'
                )}>
                <SiGithub className='shrink-0' />
                <span>AlfredMelson</span>
              </a>
            </div> */}
          </article>
        </section>
      </main>
    </MainLayout>
  )
}

