import IconButton from '@mui/material/IconButton';
import { styled } from '@mui/material/styles';
import HMTSwatch from '../../styles/HMTSwatch';

export const IconButtonSx = styled(IconButton)(({ theme }) => ({
  color: HMTSwatch.Blue[500],
  backgroundColor: 'transparent',
  transition: theme.transitions.create(['all'], {
    duration: theme.transitions.duration.standard,
    easing: theme.transitions.easing.easeInOut,
  }),
  '&:hover, &.Mui-focused, &.Mui-selected': {
    color: HMTSwatch.Blue[400],
  },
}));
