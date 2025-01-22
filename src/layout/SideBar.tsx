import styled from 'styled-components'
import PackagesIcon from '../assets/icons/Packages.svg?react'
import { colors } from '../styles/colors.ts'

const Container = styled.div`
  width: 351px;
  position: relative;
`

const Inner = styled.div`
  border: 1px solid #ff2d87;
  border-radius: 20px;
  height: 143px;
  margin: 24px 24px 24px 15px;
  padding: 20px 10px 20px 97px;
`

const Packages = styled.div`
  position: absolute;
  top: 50px;
  left: 4px;
`
const Wrapper = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

const Text = styled.p`
  font-size: 20px;
  font-weight: 600;
  line-height: 26px;
  text-align: left;
  color: ${colors.accent};
  text-underline-position: from-font;
  text-decoration-skip-ink: none;
`

const Button = styled.button`
  width: 194px;
  min-width: 100px;
  border: none;
  border-radius: 51px;
  background-color: ${colors.accent};
  color: ${colors.background};
  height: 40px;

  font-size: 16px;
  font-weight: 600;
  line-height: 18px;
  text-align: center;
  text-underline-position: from-font;
  text-decoration-skip-ink: none;
`

export const SideBar = () => {
  return (
    <Container>
      <Inner>
        <Packages>
          <PackagesIcon />
        </Packages>
        <Wrapper>
          <Text>Получай товары БЕСПЛАТНО!</Text>
          <Button>Узнать подробнее</Button>
        </Wrapper>
      </Inner>
    </Container>
  )
}
