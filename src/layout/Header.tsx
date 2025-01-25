import styled from 'styled-components'
import LocationIcon from '../assets/icons/pin.svg?react'
import SearchIcon from '../assets/icons/search.svg?react'
import BasketIcon from '../assets/icons/basket.svg?react'
import { FlexContainer } from '../components/FlexContainer.tsx'
import userPic from '../assets/images/user-pic.jpg'
import { colors } from '../styles/colors.ts'

const HeaderContainer = styled(FlexContainer)`
  min-height: 5.125rem;
  //flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  gap: 1.14rem;
  padding: 0 2rem;
  width: 100%;
`

const React = styled.p`
  font-size: 37px;
  font-weight: 700;
`

const Location = styled.section`
  display: flex;
  gap: 0.25rem;
`

const City = styled.div`
    color: ${colors.secondary};
    max-width: 10rem;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;

`

const Search = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.5rem;
  flex-grow: 1;
  padding: 0.28rem 0.28rem 0.28rem 1.5rem;
  height: 3.57rem;
  border: 1px solid ${colors.buttonBackground};
  border-radius: 36px;
  max-width: 1000px;
`
const SearchText = styled.input`
  color: ${colors.secondary};
  font-size: 16px;
  background: transparent;
  border: none;
  padding: 0;
  outline: none;
  width: 100%;
`

const SearchBtn = styled.button`
  border: none;
  background-color: ${colors.buttonBackground};
  width: 6.7rem;
  border-radius: 41px;
  cursor: pointer;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  svg {
    vertical-align: middle;
    color: ${colors.secondary};
  }
`

const IconBlock = styled.div`
  display: flex;
  gap: 1.5rem;
`

const CartBtn = styled.div`
  color: ${colors.secondary};
  border: 1px solid;
  width: 3.57rem;
  height: 3.57rem;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
`

const CartCounter = styled.div`
  position: absolute;
  top: -14%;
  left: 60%;

  display: flex;
  align-items: center;
  justify-content: center;

  width: 2.2rem;
  height: 2.2rem;

  background-color: ${colors.background};
  color: ${colors.accent};
  font-weight: 600;

  border-radius: 50%;
`

const UserPic = styled.div`
  border-radius: 50%;
  overflow: hidden;
  width: 3.57rem;
  height: 3.57rem;

  img {
    width: 100%;
    height: 100%;
  }
`

export const Header: React.FC = () => {
  const city = 'Петропавловск-Камчатский'
  const cartItemCount = '10+'

  return (
    <HeaderContainer>
      <React>React</React>
      <Location>
        <LocationIcon />
        <City>{city}</City>
      </Location>
      <Search>
        <SearchText
          type="text"
          disabled
          value={'Поиск бренда, товара, категории...'}
        />
        <SearchBtn>
          <SearchIcon />
        </SearchBtn>
      </Search>
      <IconBlock>
        <CartBtn>
          <BasketIcon />
          <CartCounter>{cartItemCount}</CartCounter>
        </CartBtn>
        <UserPic>
          <img src={userPic} alt="userPic" />
        </UserPic>
      </IconBlock>
    </HeaderContainer>
  )
}
