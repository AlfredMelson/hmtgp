import Button, { ButtonProps } from '@mui/material/Button'
import { alpha, styled } from '@mui/material/styles'
import HMTSwatch from '../../styles/HMTSwatch'

export const SubmitButtonSx = styled((props: ButtonProps) => (
  <Button size='medium' variant='contained' type='submit' {...props} />
))(() => ({
  textTransform: 'capitalize',
  color: alpha(HMTSwatch.Gold[50], 0.8),
  backgroundColor: HMTSwatch.Black[50],
  '&:hover, &.Mui-focused, &.Mui-selected': {
    color: HMTSwatch.Gold[50],
    backgroundColor: HMTSwatch.Black[100]
  },
  '&.Mui-disabled': {
    color: HMTSwatch.Grey[600],
    backgroundColor: HMTSwatch.Black[100]
  }
}))

export const LogoNameGroupingSx = styled(Button, {
  name: 'LogoNameGrouping',
  slot: 'style'
})(() => ({
  cursor: 'default',
  textTransform: 'none',
  color: HMTSwatch.Gold[50],
  borderColor: 'transparent',
  backgroundColor: 'transparent',
  '&:hover, &.Mui-focused, &.Mui-selected': {
    color: HMTSwatch.Gold[50],
    borderColor: 'transparent',
    backgroundColor: 'transparent'
  }
}))

export const CRUDHeaderGroupSx = styled(Button, {
  name: 'CRUDHeaderGroup',
  slot: 'style'
})(() => ({
  maxWidth: '530px',
  cursor: 'default',
  textTransform: 'none',
  color: HMTSwatch.White[50],
  borderColor: 'transparent',
  backgroundColor: 'transparent',
  '&:hover, &.Mui-focused, &.Mui-selected': {
    color: HMTSwatch.White[50],
    borderColor: 'transparent',
    backgroundColor: 'transparent'
  }
}))
