import Head from 'next/head'
import { useRouter } from 'next/router'

const defaultMeta = {
  title: 'Alfred Melson',
  siteName: 'hmtgp.com',
  description:
    'An online portfolio and articles by Alfred Melson to demonstrate capabilities as well as share thoughts on frontend development.',
  url: 'https://hmtgp.com',
  image: 'https://hmtgp.com/favicon/large-og.jpg',
  type: 'website',
  robots: 'follow, index'
}

type SeoProps = {
  date?: string
  templateTitle?: string
  isArticle?: boolean
  banner?: string
} & Partial<typeof defaultMeta>

export default function Seo(props: SeoProps) {
  const router = useRouter()
  const meta = {
    ...defaultMeta,
    ...props
  }
  meta['title'] = props.templateTitle ? `${props.templateTitle} | ${meta.siteName}` : meta.title

  return (
    <Head>
      <title>{meta.title}</title>
      <meta name='robots' content={meta.robots} />
      <meta content={meta.description} name='description' />
      <meta property='og:url' content={`${meta.url}${router.asPath}`} />
      <link rel='canonical' href={`${meta.url}${router.asPath}`} />
      {/* Twitter */}
      <meta name='twitter:card' content='summary_large_image' />
      <meta name='twitter:site' content='@th_clarence' />
      <meta name='twitter:title' content={meta.title} />
      <meta name='twitter:description' content={meta.description} />
      {meta.date && (
        <>
          <meta property='article:published_time' content={meta.date} />
          <meta name='publish_date' property='og:publish_date' content={meta.date} />
          <meta name='author' property='article:author' content='Alfred Melson' />
        </>
      )}

      {/* Favicons */}
      {favicons.map((linkProps) => (
        <link key={linkProps.href} {...linkProps} />
      ))}
      <meta name='msapplication-TileColor' content='#ffffff' />
      <meta name='msapplication-TileImage' content='/favicon/ms-icon-144x144.png' />
      <meta name='theme-color' content='#ffffff' />
    </Head>
  )
}

type Favicons = {
  rel: string
  href: string
  sizes?: string
  type?: string
}

const favicons: Array<Favicons> = [
  {
    rel: 'apple-touch-icon',
    sizes: '57x57',
    href: '/favicon/apple-icon-57x57.png'
  },
  {
    rel: 'apple-touch-icon',
    sizes: '60x60',
    href: '/favicon/apple-icon-60x60.png'
  },
  {
    rel: 'apple-touch-icon',
    sizes: '72x72',
    href: '/favicon/apple-icon-72x72.png'
  },
  {
    rel: 'apple-touch-icon',
    sizes: '76x76',
    href: '/favicon/apple-icon-76x76.png'
  },
  {
    rel: 'apple-touch-icon',
    sizes: '114x114',
    href: '/favicon/apple-icon-114x114.png'
  },
  {
    rel: 'apple-touch-icon',
    sizes: '120x120',
    href: '/favicon/apple-icon-120x120.png'
  },
  {
    rel: 'apple-touch-icon',
    sizes: '144x144',
    href: '/favicon/apple-icon-144x144.png'
  },
  {
    rel: 'apple-touch-icon',
    sizes: '152x152',
    href: '/favicon/apple-icon-152x152.png'
  },
  {
    rel: 'apple-touch-icon',
    sizes: '180x180',
    href: '/favicon/apple-icon-180x180.png'
  },
  {
    rel: 'icon',
    type: 'image/png',
    sizes: '192x192',
    href: '/favicon/android-icon-192x192.png'
  },
  {
    rel: 'icon',
    type: 'image/png',
    sizes: '32x32',
    href: '/favicon/favicon-32x32.png'
  },
  {
    rel: 'icon',
    type: 'image/png',
    sizes: '96x96',
    href: '/favicon/favicon-96x96.png'
  },
  {
    rel: 'icon',
    type: 'image/png',
    sizes: '16x16',
    href: '/favicon/favicon-16x16.png'
  },
  {
    rel: 'manifest',
    href: '/favicon/manifest.json'
  }
]
