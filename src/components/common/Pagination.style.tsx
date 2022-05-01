import Pagination, { PaginationProps } from '@mui/material/Pagination';
import { styled } from '@mui/material/styles';
import HMTSwatch from '../../styles/HMTSwatch';

export const PaginationSx = styled(
  (props: PaginationProps) => <Pagination {...props} />,
  {
    name: 'PaginationSx',
    slot: 'style',
  }
)(({ theme }) => ({
  ['.MuiPaginationItem-rounded ']: {
    width: '36px',
    height: '36px',
    borderRadius: '4px',
    fontWeight: 800,
    color: HMTSwatch.Blue[500],
    backgroundColor: 'transparent',
    transition: theme.transitions.create(['all'], {
      duration: theme.transitions.duration.standard,
      easing: theme.transitions.easing.easeInOut,
    }),
    '&:hover, &.Mui-focused': {
      color: HMTSwatch.Blue[400],
      backgroundColor: 'transparent',
    },
    '&.Mui-selected': {
      cursor: 'default',
      color: HMTSwatch.White[50],
      backgroundColor: 'transparent',
      '&:hover': {
        backgroundColor: 'transparent',
      },
    },
    '&.Mui-disabled': {
      color: 'transparent',
      backgroundColor: 'transparent',
    },
  },
}));
