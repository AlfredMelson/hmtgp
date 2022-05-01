import { alpha, styled } from '@mui/material/styles'
import TextField, { TextFieldProps } from '@mui/material/TextField'
import HMTSwatch from '../../styles/HMTSwatch'

/*
 * Change Autocomplete Styles in WebKit Browsers
 * @author Geoff Graham (Updated on Apr 26, 2019)
 * https://css-tricks.com/snippets/css/change-autocomplete-styles-webkit-browsers/
 */

export const TextFieldSx = styled((props: TextFieldProps) => <TextField required {...props} />)(
  ({ theme }) => ({
    '& .MuiOutlinedInput-root': {
      color: HMTSwatch.White[100],
      backgroundColor: HMTSwatch.Black[50],
      '& fieldset': {
        borderRadius: '4px',
        border: `1px solid ${HMTSwatch.Black[50]}`,
        transition: theme.transitions.create(['all'], {
          duration: theme.transitions.duration.standard,
          easing: theme.transitions.easing.easeInOut
        })
      },
      '&:hover fieldset': {
        border: `1px solid ${alpha(HMTSwatch.Gold[50], 0.5)}`
      },
      '&.Mui-focused fieldset': {
        border: `1px solid ${alpha(HMTSwatch.Gold[50], 0.8)}`
      },
      '&.Mui-selected fieldset': {
        border: `1px solid ${HMTSwatch.Gold[50]}`
      }
    },
    '& input:-webkit-autofill, & input:-webkit-autofill:hover, & input:-webkit-autofill:focus, & textarea:-webkit-autofill, & textarea:-webkit-autofill:hover, & textarea:-webkit-autofill:focus, & select:-webkit-autofill, & select:-webkit-autofill:hover, & select:-webkit-autofill:focus':
      {
        transition: 'background-color 600000s 0s, color 600000s 0s'
      }
  })
)
