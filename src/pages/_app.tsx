import { CacheProvider, EmotionCache } from '@emotion/react'
import { CssBaseline } from '@mui/material'
import axios from 'axios'
import { AppProps } from 'next/app'
import Router from 'next/router'
import nProgress from 'nprogress'
import { useContext, useEffect } from 'react'
import { SWRConfig } from 'swr'
import { blockDomainMeta } from '../constants/env'
import ComponentsContext from '../context/componentsContext'
import ConstantsContext from '../context/constantsContext'
import { getFromLocalStorage } from '../lib/helper'
import HMTThemeProvider from '../styles/HMTThemeProvider'
import createEmotionCache from '../utility/createEmotionCache'
import 'react-tippy/dist/tippy.css'
import '../styles/globals.css'
import '../styles/mdx.css'
import '../styles/dracula.css'
import '../styles/nprogress.css'

Router.events.on('routeChangeStart', nProgress.start)
Router.events.on('routeChangeError', nProgress.done)
Router.events.on('routeChangeComplete', nProgress.done)

const clientSideEmotionCache = createEmotionCache()

interface MyAppProps extends AppProps {
  emotionCache?: EmotionCache
}

const MyApp = (props: MyAppProps) => {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props
  const componentsContext = useContext(ComponentsContext)
  const constantsContext = useContext(ConstantsContext)

  useEffect(() => {
    // Don't increment views if not on main domain
    if (window.location.host !== 'hmtgp.com' && blockDomainMeta) {
      if (getFromLocalStorage('incrementMetaFlag') !== 'false') {
        localStorage.setItem('incrementMetaFlag', 'false')
        // reload page to make changes
        window.location.reload()
      }
    }
  }, [])

  return (
    <CacheProvider value={emotionCache}>
      <HMTThemeProvider>
        <CssBaseline />
        <ComponentsContext.Provider value={componentsContext}>
          <ConstantsContext.Provider value={constantsContext}>
            <SWRConfig
              value={{
                fetcher: (url) => axios.get(url).then((res) => res.data)
              }}>
              <Component {...pageProps} />
            </SWRConfig>
          </ConstantsContext.Provider>
        </ComponentsContext.Provider>
      </HMTThemeProvider>
    </CacheProvider>
  )
}

export default MyApp

