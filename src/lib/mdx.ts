/* eslint-disable @typescript-eslint/no-explicit-any */
import { readdirSync, readFileSync } from 'fs'
import { join } from 'path'
import matter from 'gray-matter'
import { bundleMDX } from 'mdx-bundler'
import readingTime from 'reading-time'
import rehypeAutolinkHeadings from 'rehype-autolink-headings'
import rehypePrism from 'rehype-prism-plus'
import rehypeSlug from 'rehype-slug'
import remarkGfm from 'remark-gfm'
import { ContentType, Frontmatter, PickFrontmatter } from '../types/frontmatters'

export async function getFiles() {
  return readdirSync(join(process.cwd(), 'src', 'contents', 'article'))
}

export async function getFileBySlug(type: ContentType, slug: string) {
  const mdxSource = slug
    ? readFileSync(join(process.cwd(), 'src', 'contents', type, `${slug}.mdx`), 'utf8')
    : readFileSync(join(process.cwd(), 'src', 'contents', `${type}.mdx`), 'utf8')

  console.log('mdxSource: ', mdxSource)

  const { code, frontmatter } = await bundleMDX({
    source: mdxSource,
    mdxOptions(options: any, _frontmatter: any) {
      options.remarkPlugins = [...(options.remarkPlugins ?? []), remarkGfm]
      options.rehypePlugins = [
        ...(options.rehypePlugins ?? []),
        rehypeSlug,
        rehypePrism,
        [
          rehypeAutolinkHeadings,
          {
            properties: {
              className: ['hash-anchor']
            }
          }
        ]
      ]
      return options
    }
  })

  return {
    code,
    frontmatter: {
      wordCount: mdxSource.split(/\s+/gu).length,
      readingTime: readingTime(mdxSource),
      slug: slug || null,
      ...frontmatter
    }
  }
}

export async function getAllFilesFrontmatter<T extends ContentType>(type: T) {
  const files = readdirSync(join(process.cwd(), 'src', 'contents', type))

  return files.reduce((allArticles: Array<PickFrontmatter<T>>, articleSlug) => {
    const source = readFileSync(join(process.cwd(), 'src', 'contents', type, articleSlug), 'utf8')
    const { data } = matter(source)

    const res = [
      {
        ...(data as PickFrontmatter<T>),
        slug: articleSlug.replace('.mdx', ''),
        readingTime: readingTime(source)
      },
      ...allArticles
    ]
    return res
  }, [])
}

// export async function getRecommendations(currSlug: string) {
//   const frontmatters = await getAllFilesFrontmatter('article')

//   // Get current frontmatter
//   const currentFm = frontmatters.find((fm) => fm.slug === currSlug)

//   // Remove currentFm and Bahasa Posts, then randomize order
//   const otherFms = frontmatters
//     .filter((fm) => !fm.slug.startsWith('id-') && fm.slug !== currSlug)
//     .sort(() => Math.random() - 0.5)

//   // Find with similar chips
//   const recommendations = otherFms.filter((op) =>
//     op.chips.split(',').some((p) => currentFm?.chips.split(',').includes(p))
//   )

//   // Populate with random recommendations if not enough
//   const threeRecommendations =
//     recommendations.length >= 3
//       ? recommendations
//       : [
//           ...recommendations,
//           ...otherFms.filter((fm) => !recommendations.some((r) => r.slug === fm.slug))
//         ]

//   // Only return first three
//   return threeRecommendations.slice(0, 3)
// }

// Get and order frontmatters by specified array

export function getFeatured<T extends Frontmatter>(contents: Array<T>, features: string[]) {
  // override as T because there is no typechecking on the features array
  return features.map((feat) => contents.find((content) => content.slug === feat) as T)
}

