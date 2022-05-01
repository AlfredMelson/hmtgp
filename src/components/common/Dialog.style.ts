import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import { styled } from '@mui/material/styles';
import HMTSwatch from '../../styles/HMTSwatch';

export const DialogSx = styled(Dialog)(() => ({
  '& .MuiDialog-paper': {
    backgroundColor: HMTSwatch.Grey[600],
  },
}));

export const DialogContentSx = styled(DialogContent)(({ theme }) => ({
  ...theme.typography.body2,
  fontWeight: 500,
  paddingTop: '10px',
}));

export const DialogContentTextSx = styled(DialogContentText)(() => ({
  color: HMTSwatch.White[100],
  px: '30px',
  py: '20px',
  maxWidth: '530px',
}));
