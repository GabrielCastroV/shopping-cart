import { useState } from 'react'
import './App.css'
import Products from './components/Products'
import { products as initialProducts } from './mocks/products.json'
import { Header } from './components/Header.jsx'
import { useFilters } from './hooks/useFilters.jsx'
import { Cart } from './components/Cart.jsx'
import { CartProvider } from './context/cart.jsx'

function App() {

  const [products] = useState(initialProducts)
  const { filterProducts } = useFilters();
  const filteredProducts = filterProducts(products);

  return (
    <CartProvider>
      <Header/>
      <Cart></Cart>
      <Products products={filteredProducts} />
    </CartProvider>
  )
}

export default App
