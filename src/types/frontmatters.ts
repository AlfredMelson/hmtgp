import { ReadTimeResults } from 'reading-time'

export type ArticleFrontmatter = {
  wordCount: number
  readingTime: ReadTimeResults
  slug: string
  englishOnly?: boolean
  title: string
  description: string
  banner: string
  publishedAt: string
  lastUpdated?: string
  chips: string
}

export type ContentType = 'article'

export type PickFrontmatter<T extends ContentType> = T extends 'article'
  ? ArticleFrontmatter
  : T extends 'library'
  ? LibraryFrontmatter
  : ProjectFrontmatter

export type InjectedMeta = { views?: number; likes?: number }

export type ArticleType = {
  code: string
  frontmatter: ArticleFrontmatter
}

export type LibraryFrontmatter = {
  slug: string
  title: string
  readingTime: ReadTimeResults
  description: string
  chips: string
}

export type LibraryType = {
  code: string
  frontmatter: LibraryFrontmatter
}

export type ProjectFrontmatter = {
  slug: string
  title: string
  publishedAt: string
  lastUpdated?: string
  description: string
  category?: string
  techs: string
  banner: string
  link?: string
  github?: string
  youtube?: string
}

export type ProjectType = {
  code: string
  frontmatter: ProjectFrontmatter
}

export type FrontmatterWithChips = ArticleFrontmatter
export type FrontmatterWithDate = ArticleFrontmatter | ProjectFrontmatter
export type Frontmatter = ProjectFrontmatter | ArticleFrontmatter | LibraryFrontmatter

