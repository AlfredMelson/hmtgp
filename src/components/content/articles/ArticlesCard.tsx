import { Chip as MuiChip } from '@mui/material'
import clsx from 'clsx'
import { format } from 'date-fns'
import * as React from 'react'
import { HiOutlineClock, HiOutlineEye } from 'react-icons/hi'
import { ArticleFrontmatter, InjectedMeta } from '../../../types/frontmatters'
import Chip from '../../content/Chip'
import CloudinaryImg from '../../images/CloudinaryImg'
import UnstyledLink from '../../links/UnstyledLink'
import CardComponent from './CardComponent'

type ArticlesCardProps = {
  article: ArticleFrontmatter & InjectedMeta
  checkChipped?: (chip: string) => boolean
} & React.ComponentPropsWithoutRef<'li'>

export default function ArticlesCard({
  article,
  className,
  checkChipped,
  onClick
}: ArticlesCardProps) {
  return (
    <li className='w-full' onClick={onClick}>
      <UnstyledLink href={`/articles/${article.slug}`}>
        <CardComponent article={article} />
      </UnstyledLink>
    </li>
  )
}

