import { Route, Routes } from 'react-router-dom'
import { Recommendations } from '../pages/Recommendations/Recommendations.tsx'
import { Cart } from '../pages/Cart/Cart.tsx'
import { OrderHistory } from '../pages/OrderHistory/OrderHistory.tsx'
import { Checkout } from '../pages/Checkout/Checkout.tsx'
import { ProductPage } from '../pages/ProductPage/ProductPage.tsx'
import styled from 'styled-components'

const Container = styled.div`
    height: 100%;
    padding: 2rem;
`

export const MainContent = () => (
  <Container>
    <Routes>
      <Route path="/" element={<Recommendations />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/history" element={<OrderHistory />} />
      <Route path="/checkout" element={<Checkout />} />
      <Route path="/recommendations" element={<Recommendations />} />
      <Route path="/product/:id" element={<ProductPage />} />
    </Routes>
  </Container>
)
