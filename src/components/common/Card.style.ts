import Card from '@mui/material/Card';
import { styled } from '@mui/material/styles';
import HMTSwatch from '../../styles/HMTSwatch';

export const CardSx = styled(Card)(({ theme }) => ({
  backgroundColor: HMTSwatch.Grey[800],
  [theme.breakpoints.only('xs')]: {
    borderRadius: '0px',
    minWidth: '100%',
  },
  [theme.breakpoints.up('sm')]: {
    borderRadius: '4px',
    minWidth: '600px',
  },
}));
