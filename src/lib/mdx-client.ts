import countBy from 'lodash/countBy'
import map from 'lodash/map'
import sortBy from 'lodash/sortBy'
import toPairs from 'lodash/toPairs'
import { Frontmatter, FrontmatterWithChips, FrontmatterWithDate } from '../types/frontmatters'

export function sortDateFn<T extends FrontmatterWithDate>(contentA: T, contentB: T) {
  return (
    new Date(contentB.lastUpdated ?? contentB.publishedAt).valueOf() -
    new Date(contentA.lastUpdated ?? contentA.publishedAt).valueOf()
  )
}

export function sortByDate<T extends FrontmatterWithDate>(contents: Array<T>) {
  return contents.sort(sortDateFn)
}

export function sortTitleFn<T extends Frontmatter>(contentA: T, contentB: T) {
  return contentA.title.localeCompare(contentB.title)
}

export function sortByTitle<T extends Array<Frontmatter>>(contents: T): T {
  return contents.sort((a, b) => (a.title > b.title ? 1 : b.title > a.title ? -1 : 0))
}

//  Get chips of each article and remove duplicates
export function getChips<T extends Array<FrontmatterWithChips>>(contents: T) {
  const chips = contents.reduce(
    (accChips: string[], content) => [...accChips, ...content.chips.split(',')],
    []
  )

  return map(sortBy(toPairs(countBy(chips)), 1), 0).reverse()
}

