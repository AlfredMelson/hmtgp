import AccessTimeIcon from '@mui/icons-material/AccessTime'
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined'
import { Chip as MuiChip } from '@mui/material'
import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import CardHeader from '@mui/material/CardHeader'
import Typography from '@mui/material/Typography'
import { format } from 'date-fns'
import * as React from 'react'
import { ArticleFrontmatter, InjectedMeta } from '../../../types/frontmatters'
import CloudinaryImg from '../../images/CloudinaryImg'

// interface ExpandMoreProps extends IconButtonProps {
//   expand: boolean
// }

// const ExpandMore = styled((props: ExpandMoreProps) => {
//   const { expand, ...other } = props
//   return <IconButton {...other} />
// })(({ theme, expand }) => ({
//   transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
//   marginLeft: 'auto',
//   transition: theme.transitions.create('transform', {
//     duration: theme.transitions.duration.shortest
//   })
// }))

type CardComponentProps = {
  article: ArticleFrontmatter & InjectedMeta
  checkChipped?: (chip: string) => boolean
} & React.ComponentPropsWithoutRef<'li'>

export default function CardComponent({ article }: CardComponentProps) {
  return (
    <Card>
      <CardHeader
        sx={{ color: 'white' }}
        title={article.title}
        subheader={format(new Date(article.lastUpdated ?? article.publishedAt), 'MMMM dd, yyyy')}
      />
      <CloudinaryImg
        className='pointer-events-none overflow-hidden'
        publicId={`theodorusclarence/banner/${article.banner}`}
        alt='Photo taken from unsplash'
        width={1200}
        height={(1200 * 2) / 5}
        aspect={{ height: 2, width: 5 }}
        preview={false}
      />
      <CardContent sx={{ color: 'white' }}>
        <Typography variant='body2'>{article.description}</Typography>
      </CardContent>
      <CardActions sx={{ color: 'white' }}>
        <MuiChip
          color='info'
          size='small'
          label={article.readingTime.text}
          icon={<AccessTimeIcon />}
        />
        {article.views && (
          <MuiChip
            color='info'
            size='small'
            label={`${article.views} views`}
            icon={<VisibilityOutlinedIcon />}
          />
        )}
      </CardActions>
      <CardActions>
        {article.chips.split(',').map((chip: any) => (
          <MuiChip color='info' size='small' label={chip} key={chip} />
        ))}
      </CardActions>
    </Card>
  )
}
