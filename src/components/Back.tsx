import styled from 'styled-components'
import { FlexContainer } from './FlexContainer.tsx'
import { colors } from '../styles/colors.ts'
import ChevronLeft from '../assets/icons/chevron-left.svg?react'

const Wrapper = styled(FlexContainer)`
    color: ${colors.accent};
    align-items: center;
`

const Text = styled.p`
    font-size: 16px;
    font-weight: 600;
`


export const Back = () => {
  return (
    <Wrapper>
      <ChevronLeft/>
      <Text>Назад</Text>
    </Wrapper>
  )
}
