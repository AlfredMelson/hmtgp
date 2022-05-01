import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp'
import MuiAccordion, { AccordionProps } from '@mui/material/Accordion'
import MuiAccordionDetails from '@mui/material/AccordionDetails'
import MuiAccordionSummary, { AccordionSummaryProps } from '@mui/material/AccordionSummary'
import { styled } from '@mui/material/styles'
import Typography from '@mui/material/Typography'
import * as React from 'react'

const Accordion = styled((props: AccordionProps) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  border: `1px solid ${theme.palette.divider}`,
  '&:not(:last-child)': {
    borderBottom: 0
  },
  '&:before': {
    display: 'none'
  }
}))

const AccordionSummary = styled((props: AccordionSummaryProps) => (
  <MuiAccordionSummary
    expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: '0.9rem' }} />}
    {...props}
  />
))(({ theme }) => ({
  backgroundColor:
    theme.palette.mode === 'dark' ? 'rgba(255, 255, 255, .05)' : 'rgba(0, 0, 0, .03)',
  flexDirection: 'row-reverse',
  '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
    transform: 'rotate(90deg)'
  },
  '& .MuiAccordionSummary-content': {
    marginLeft: theme.spacing(1)
  }
}))

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  borderTop: '1px solid rgba(0, 0, 0, .125)'
}))

type SortMenuProps = {
  children: React.ReactNode
}

export default function SortMenu({ children }: SortMenuProps) {
  const [expanded, setExpanded] = React.useState<boolean>(false)

  return (
    <Accordion
      onChange={() => setExpanded(!expanded)}
      sx={{ backgroundColor: 'transparent', color: 'white' }}>
      <AccordionSummary aria-controls='panel1d-content' id='panel1d-header'>
        <Typography variant='body1'>Sort Menu</Typography>
      </AccordionSummary>
      <AccordionDetails sx={{ backgroundColor: '#000', px: 10, borderRadius: '4px' }}>
        {children}
      </AccordionDetails>
    </Accordion>
  )
}
