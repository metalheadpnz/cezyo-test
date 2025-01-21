import React from 'react'
import styled from 'styled-components'
import { breakpoints } from '../styles/breakpoints.ts'
import LocationIcon from '../assets/icons/pin.svg?react'
import SearchIcon from '../assets/icons/search.svg?react'
import BasketIcon from '../assets/icons/basket.svg?react'
import { Container } from '../components/Container.tsx'
import userPic from '../assets/images/user-pic.jpg'

// const HeaderContainer = styled.header`
//   display: flex;
//   justify-content: space-between;
//   align-items: center;
//   padding: 10px 20px;
//
//   @media (max-width: ${breakpoints.mobile}) {
//     flex-direction: column;
//     align-items: flex-start;
//   }
// `
//
// const Logo = styled.div`
//   font-size: 24px;
//   font-weight: bold;
// `
//
// const SearchBar = styled.input`
//   padding: 8px;
//   border-radius: 20px;
//   border: 1px solid #ccc;
//   width: 200px;
//
//   @media (max-width: ${breakpoints.mobile}) {
//     width: 100%;
//     margin-top: 10px;
//   }
// `
//
// const Cart = styled.div`
//   display: flex;
//   align-items: center;
//   position: relative;
// `
//
// const Profile = styled.div`
//   margin-left: 20px;
// `

const Location = styled.section``
const City = styled.div``
const Search = styled.div``
const SearchText = styled.input``
const SearchBtn = styled.button``
const CartBtn = styled.div``
const CartCounter = styled.div``
const UserPic = styled.div``

export const Header: React.FC = () => {
  const cartItemCount = '10+'
  return (
    <Container>
      <Location>
        <LocationIcon />
        <City>Пенза</City>
      </Location>
      <Search>
        <SearchText placeholder={'Поиск бренда, товара, категории...'} />
        <SearchBtn>
          <SearchIcon />
        </SearchBtn>
      </Search>
      <CartBtn>
        <BasketIcon />
        <CartCounter>{cartItemCount}</CartCounter>
      </CartBtn>
      <UserPic>
        <img src={userPic} alt="userPic" />
      </UserPic>
    </Container>
  )
}
