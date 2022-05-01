import { styled } from '@mui/material/styles';
import Typography, { TypographyProps } from '@mui/material/Typography';
import HMTSwatch from '../../styles/HMTSwatch';

export const TypoTextfieldSx = styled((props: TypographyProps) => (
  <Typography gutterBottom sx={{ ml: '10px' }} {...props} />
))(({ theme }) => ({
  ...theme.typography.body1,
  color: HMTSwatch.White[100],
}));
