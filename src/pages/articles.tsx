import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined'
import { Container, Chip as MuiChip, Stack, Typography } from '@mui/material'
import clsx from 'clsx'
import { InferGetStaticPropsType } from 'next'
import { ChangeEvent, useEffect, useState } from 'react'
import ArticleSorting, { SortOption } from '../components/ArticleSorting'
import {
  ArticleContainerStack,
  CRUDHeaderGroupSx,
  IconButtonSx,
  SubmitButtonSx,
  TextFieldSx
} from '../components/common'
import ArticlesCard from '../components/content/articles/ArticlesCard'
import ContentPlaceholder from '../components/content/ContentPlaceholder'
import Seo from '../components/Seo'
import SortMenu from '../components/SortMenu'
import useInjectContentMeta from '../hooks/useInjectContentMeta'
import useLoaded from '../hooks/useLoaded'
import { getFromSessionStorage } from '../lib/helper'
import { getAllFilesFrontmatter } from '../lib/mdx'
import { getChips, sortByDate, sortDateFn } from '../lib/mdx-client'
import { ArticleFrontmatter, InjectedMeta } from '../types/frontmatters'

const sortOptions: Array<SortOption> = [
  {
    id: 'date',
    name: 'Sort by date'
  },
  {
    id: 'views',
    name: 'Sort by views'
  }
]

export default function IndexPage({
  articles,
  chips
}: InferGetStaticPropsType<typeof getStaticProps>) {
  /** Lazy init from session storage to preserve preference on revisit */
  const [sortOrder, setSortOrder] = useState<SortOption>(
    () => sortOptions[Number(getFromSessionStorage('Articles-sort')) || 0]
  )

  console.log('sortOrder', sortOrder)
  const isLoaded = useLoaded()

  const populatedArticles = useInjectContentMeta('article', articles)

  const [articleSearch, setArticleSearch] = useState<string>('')
  const [filteredArticles, setFilteredArticles] = useState<
    Array<ArticleFrontmatter & InjectedMeta>
  >(() => [...articles])

  const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
    setArticleSearch(e.target.value)
  }
  const clearSearch = () => setArticleSearch('')

  useEffect(() => {
    const results = populatedArticles.filter(
      (article) =>
        article.title.toLowerCase().includes(articleSearch.toLowerCase()) ||
        article.description.toLowerCase().includes(articleSearch.toLowerCase()) ||
        // Check if splitted search contained in chip
        articleSearch
          .toLowerCase()
          .split(' ')
          .every((chip) => article.chips.includes(chip))
    )

    if (sortOrder.id === 'date') {
      results.sort(sortDateFn)
      sessionStorage.setItem('Articles-sort', '0')
    } else if (sortOrder.id === 'views') {
      results.sort((a, b) => (b?.views ?? 0) - (a?.views ?? 0))
      sessionStorage.setItem('Articles-sort', '1')
    }

    setFilteredArticles(results)
  }, [articleSearch, sortOrder.id, populatedArticles])

  const currentArticles = filteredArticles.filter((p) => !p.slug.startsWith('id-'))

  const toggleChip = (chip: string) => {
    // If chip is already there, then remove
    if (articleSearch.includes(chip)) {
      setArticleSearch((s) =>
        s
          .split(' ')
          .filter((t) => t !== chip)
          ?.join(' ')
      )
    } else {
      // append chip
      setArticleSearch((s) => (s !== '' ? `${s.trim()} ${chip}` : chip))
    }
  }

  // Currently available chips based on filtered articles
  const filteredChips = getChips(currentArticles)

  // Show if not disabled and selected
  const checkChipped = (chip: string) => {
    return filteredChips.includes(chip) && articleSearch.toLowerCase().split(' ').includes(chip)
  }

  // Sort state
  const [sortVisability, setSortVisability] = useState<boolean>(false)

  // Error message display transition
  const [searchAlertError, setSearchAlertError] = useState('')
  const [searchErrorMessage, setSearchErrorMessage] = useState('')

  // Search textfield state
  const [searchVisability, setSearchVisability] = useState<boolean>(false)
  const [searchHelperText, setSearchHelperText] = useState<string>('')

  const [searchInitiated, setSearchInitiated] = useState<boolean>(false)

  // handle setting and updating error message and state
  useEffect(() => {
    return () => {
      // reset alert when search state changes
      setSearchAlertError('')
      setSearchErrorMessage('')
    }
  }, [articleSearch])

  const closeSearch = (event: any) => {
    if (event.keyCode === 27 || event.currentTarget === event.target) {
      setSearchVisability(false)
      setArticleSearch('')
    }
  }

  // window.addEventListener('keydown', (event) => closeSearch(event))

  return (
    <div className='article-background'>
      <ArticleContainerStack>
        <Seo
          templateTitle='Articles'
          description='Thoughts, mental models, and tutorials about front-end development. Rebuild your mental model so front-end development can be predictable.'
        />

        <main>
          <section
            className={clsx(isLoaded && 'fade-in-start')}
            onClick={(event) => closeSearch(event)}>
            <Container maxWidth='lg'>
              <Typography variant='h5' data-fade='0' sx={{ textAlign: 'center' }}>
                Published Articles
              </Typography>
              <SortMenu>
                <form>
                  <Stack
                    direction='row'
                    justifyContent='space-between'
                    alignItems='center'
                    sx={{ my: 20, backgroundColor: '#000' }}>
                    <div>
                      {chips.map((chip) => (
                        <MuiChip
                          color='info'
                          size='small'
                          label={checkChipped(chip) ? chip : chip}
                          key={chip}
                          onClick={() => toggleChip(chip)}
                          disabled={!filteredChips.includes(chip)}
                        />
                      ))}
                    </div>
                    {!searchVisability ? (
                      <IconButtonSx
                        sx={{ height: '40px' }}
                        onClick={() => setSearchVisability(!searchVisability)}>
                        <SearchOutlinedIcon />
                      </IconButtonSx>
                    ) : (
                      <TextFieldSx
                        autoFocus
                        id='search'
                        type='text'
                        error={searchHelperText !== ''}
                        onChange={handleSearch}
                        value={articleSearch}
                        helperText={searchHelperText}
                        placeholder='Search...'
                        sx={{ margin: 0 }}
                      />
                    )}
                    {searchInitiated && (
                      <CRUDHeaderGroupSx
                        onClick={() => {
                          clearSearch()
                        }}>
                        Clear Search
                      </CRUDHeaderGroupSx>
                    )}
                    <ArticleSorting
                      selected={sortOrder}
                      setSelected={setSortOrder}
                      options={sortOptions}
                    />
                  </Stack>
                </form>
              </SortMenu>
              <ul className='mt-4 grid gap-4 sm:grid-cols-2 xl:grid-cols-3' data-fade='5'>
                {currentArticles.length > 0 ? (
                  currentArticles.map((article) => (
                    <ArticlesCard
                      key={article.slug}
                      article={article}
                      checkChipped={checkChipped}
                    />
                  ))
                ) : (
                  <ContentPlaceholder />
                )}
              </ul>
            </Container>
          </section>
        </main>
      </ArticleContainerStack>
    </div>
  )
}

export async function getStaticProps() {
  const files = await getAllFilesFrontmatter('article')
  const articles = sortByDate(files)

  // Accumulate chips and remove duplicate
  const chips = getChips(articles)

  return { props: { articles, chips } }
}

