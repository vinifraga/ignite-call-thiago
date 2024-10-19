import { Box, styled, Text } from '@ignite-ui/react'

export const ProfileBox = styled(Box, {
  marginTop: '$6',
  display: 'flex',
  flexDirection: 'column',
  gap: '$4',

  label: {
    display: 'flex',
    flexDirection: 'column',
    gap: '$2',
  },

  'label:first-of-type': {
    alignItems: 'center',
  },
})

export const FormAnnotation = styled(Text, {
  color: '$gray200',
})
