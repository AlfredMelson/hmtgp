import { useEffect, useMemo, useState } from 'react'
import useSWR from 'swr'
import { contentMetaFlag } from '../constants/env'
import { pickContentMeta } from '../lib/contentMeta'
import { cleanArticlesPrefix } from '../lib/helper'
import { ContentMeta } from '../types/fauna'
import { ContentType, InjectedMeta, PickFrontmatter } from '../types/frontmatters'

export default function useInjectContentMeta<T extends ContentType>(
  type: T,
  frontmatter: Array<PickFrontmatter<T>>
) {
  const { data: contentMeta, error } = useSWR<Array<ContentMeta>>(
    contentMetaFlag ? '/api/content' : null
  )
  const isLoading = !error && !contentMeta
  const meta = useMemo(() => pickContentMeta(contentMeta, type), [contentMeta, type])

  type PopulatedContent = Array<PickFrontmatter<T> & InjectedMeta>

  const [populatedContent, setPopulatedContent] = useState<PopulatedContent>(
    () => frontmatter as PopulatedContent
  )

  useEffect(() => {
    if (meta) {
      const mapped = frontmatter?.map((fm) => {
        const views = meta.find((meta) => meta.slug === cleanArticlesPrefix(fm.slug))?.views
        const likes = meta.find((meta) => meta.slug === cleanArticlesPrefix(fm.slug))?.likes
        return { ...fm, views, likes }
      })

      setPopulatedContent(mapped)
    }
  }, [meta, isLoading, frontmatter])

  return populatedContent
}

