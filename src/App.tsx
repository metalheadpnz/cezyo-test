import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Cart } from './pages/Cart/Cart'
import { Checkout } from './pages/Checkout/Checkout'
import { Recommendations } from './pages/Recommendations/Recommendations'
import { ProductPage } from './pages/ProductPage/ProductPage'
import { OrderHistory } from './pages/OrderHistory/OrderHistory'
import { Header } from './layout/Header.tsx'

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Recommendations />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/history" element={<OrderHistory />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/recommendations" element={<Recommendations />} />
        <Route path="/product/:id" element={<ProductPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
