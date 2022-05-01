import { styled } from '@mui/material/styles'
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup'
import * as React from 'react'
import { ToggleButtonStyle } from './common/ToggleButton.style'

const StyledToggleButtonGroup = styled(ToggleButtonGroup)(({ theme }) => ({
  '& .MuiToggleButtonGroup-grouped': {
    margin: theme.spacing(0.5),
    border: 0,
    '&.Mui-disabled': {
      border: 0
    },
    '&:not(:first-of-type)': {
      borderRadius: theme.shape.borderRadius
    },
    '&:first-of-type': {
      borderRadius: theme.shape.borderRadius
    }
  }
}))

export type SortOption = {
  id: string
  name: string
}

type SortListboxProps = {
  selected: SortOption
  setSelected: (selected: SortOption) => void
  options: SortOption[]
}

export default function ArticleSorting({ selected, setSelected, options }: SortListboxProps) {
  const handleSort = (event: React.MouseEvent<HTMLElement>, option: SortOption) => {
    setSelected(option)
  }
  return (
    <StyledToggleButtonGroup
      size='small'
      value={selected}
      onChange={handleSort}
      exclusive
      aria-label='article sort'>
      {options.map((opt) => (
        <ToggleButtonStyle
          key={opt.id}
          value={opt}
          selected={selected === opt}
          aria-label={opt.name}
          disableRipple>
          {opt.name}
        </ToggleButtonStyle>
      ))}
    </StyledToggleButtonGroup>
  )
}
