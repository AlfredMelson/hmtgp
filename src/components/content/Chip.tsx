import clsx from 'clsx'
import { ComponentPropsWithoutRef } from 'react'

export default function Chip({
  children,
  className,
  ...rest
}: React.ComponentPropsWithoutRef<'button'>) {
  return (
    <button
      className={clsx(
        className,
        'inline-block rounded-md px-1.5 py-0.5 font-medium transition-colors',
        'bg-gray-100 text-gray-700 hover:text-black disabled:bg-gray-200 disabled:text-gray-300',
        'dark:bg-gray-700 dark:text-gray-200 dark:hover:text-white dark:disabled:bg-gray-600 dark:disabled:text-gray-500',
        'focus:outline-none focus-visible:ring focus-visible:ring-primary-300 disabled:cursor-not-allowed'
      )}
      {...rest}>
      {children}
    </button>
  )
}

export function SkipNavChip({ children, ...rest }: ComponentPropsWithoutRef<'a'>) {
  return (
    <>
      <a
        href='#skip-chips'
        className={clsx(
          'inline-block rounded-md px-1.5 py-0.5 font-medium transition',
          'bg-gray-100 text-gray-700 hover:text-black disabled:bg-gray-200 disabled:text-gray-300',
          'dark:bg-gray-700 dark:text-gray-200 dark:hover:text-white dark:disabled:bg-gray-600 dark:disabled:text-gray-500',
          'focus:outline-none focus-visible:ring focus-visible:ring-primary-300 disabled:cursor-not-allowed',
          'pointer-events-none absolute opacity-0 focus:inline-block focus:translate-y-[1.4rem] focus:opacity-100'
        )}
        {...rest}>
        Skip chip
      </a>
      {children}
      <div id='skip-chips' className='hidden' />
    </>
  )
}

