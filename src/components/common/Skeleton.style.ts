import Skeleton from '@mui/material/Skeleton';
import { styled } from '@mui/material/styles';
import HMTSwatch from '../../styles/HMTSwatch';

export const SkeletonSx = styled(Skeleton)(() => ({
  bgcolor: HMTSwatch.Gold[50],
  borderRadius: '4px',
}));
