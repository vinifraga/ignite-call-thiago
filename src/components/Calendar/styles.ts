import { styled, Text } from '@ignite-ui/react'

export const CalendarContainer = styled('div', {})

export const CalendarHeader = styled('div', {})

export const CalendarTitle = styled(Text, {})

export const CalendarActions = styled('div', {})

export const CalendarBody = styled('table', {})

export const CalendarDay = styled('button', {
  all: 'unset',
  width: '100%',
  aspectRatio: '1 / 1',
  background: '$gray600',
  textAlign: 'center',
  borderRadius: '$sm',
  cursor: 'pointer',
  '&:disabled': {
    cursor: 'default',
    background: 'none',
    opacity: 0.4,
  },
  '&:not(:disabled):hover': {
    background: '$gray500',
  },
  '&:focus': {
    outline: 'none',
    boxShadow: '0 0 0 2px $colors$gray100',
  },
})
