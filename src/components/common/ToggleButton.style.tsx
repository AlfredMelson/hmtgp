import { styled } from '@mui/material/styles'
import ToggleButton from '@mui/material/ToggleButton'
import HMTSwatch from '../../styles/HMTSwatch'

export const ToggleButtonStyle = styled(ToggleButton, {
  name: 'ToggleButton',
  slot: 'style'
})(({ theme }) => ({
  height: '36px',
  color: HMTSwatch.Blue[500],
  backgroundColor: 'transparent',
  border: 'none',
  transition: theme.transitions.create(['color'], {
    duration: theme.transitions.duration.standard,
    easing: theme.transitions.easing.easeInOut
  }),
  '&:hover, &.Mui-focused ': {
    color: HMTSwatch.Blue[400]
  },
  '&.Mui-selected': {
    cursor: 'default',
    color: HMTSwatch.White[50]
  },
  '&.Mui-disabled': {
    color: 'transparent'
  }
}))
