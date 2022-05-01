import axios from 'axios'
import * as React from 'react'
import useSWR from 'swr'
import { contentMetaFlag, incrementMetaFlag } from '../constants/env'
import { cacheOnly } from '../lib/swr'
import { ContentMeta, SingleContentMeta } from '../types/fauna'

export default function useContentMeta(
  slug: string,
  { runIncrement = false }: { runIncrement?: boolean } = {}
) {
  const { data: allContentMeta } = useSWR<Array<ContentMeta>>(
    contentMetaFlag ? '/api/content' : null,
    cacheOnly
  )
  const _preloadMeta = allContentMeta?.find((meta) => meta.slug === slug)
  const preloadMeta: SingleContentMeta | undefined = _preloadMeta
    ? {
        contentLikes: _preloadMeta.likes,
        contentViews: _preloadMeta.views,
        likesByUser: _preloadMeta.likesByUser,
        devtoViews: _preloadMeta.devtoViews
      }
    : undefined

  const {
    data,
    error: isError,
    mutate
  } = useSWR<SingleContentMeta>(contentMetaFlag ? '/api/content/' + slug : null, {
    fallbackData: preloadMeta
  })

  React.useEffect(() => {
    if (runIncrement && incrementMetaFlag) {
      incrementViews(slug).then((fetched) => {
        mutate({
          ...fetched
        })
      })
    }
  }, [mutate, runIncrement, slug])

  return {
    isLoading: !isError && !data,
    isError,
    views: data?.contentViews,
    contentLikes: data?.contentLikes ?? 0,
    devtoViews: data?.devtoViews,
    likesByUser: data?.likesByUser ?? 0
  }
}

async function incrementViews(slug: string) {
  const res = await axios.post<SingleContentMeta>('/api/content/' + slug)

  return res.data
}

