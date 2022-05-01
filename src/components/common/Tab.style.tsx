import { styled } from '@mui/material/styles';
import Tab from '@mui/material/Tab';
import HMTSwatch from '../../styles/HMTSwatch';

export const TabStyle = styled(Tab, {
  name: 'Tab',
  slot: 'styled',
})(({ theme }) => ({
  minWidth: '127px',
  margin: '0 2px',
  fontWeight: 600,
  textTransform: 'none',
  borderRadius: '4px',
  color: HMTSwatch.Blue[500],
  backgroundColor: 'transparent',
  transition: theme.transitions.create(['color'], {
    duration: theme.transitions.duration.standard,
    easing: theme.transitions.easing.easeInOut,
  }),
  '&:hover, &.Mui-focused': {
    color: HMTSwatch.Blue[400],
  },
  '&.Mui-selected': {
    cursor: 'default',
    color: HMTSwatch.White[100],
  },
  '.indicator': {
    backgroundColor: 'transparent',
  },
  '&.MuiButtonBase-root, &.MuiTab-root': {
    minHeight: '30px',
    height: '48px',
  },
}));
