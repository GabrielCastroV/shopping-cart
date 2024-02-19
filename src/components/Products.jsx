/* eslint-disable react/prop-types */
import '../styles/products.css'
import { AddToCartIcon, RemoveFromCartIcon } from './Icons' 
import { useCart } from '../hooks/useCart.jsx'

const Products = ({ products }) => {

  const { addToCart, cart } = useCart();
  console.log(addToCart);

  const checkProductInCart = product => {
    return cart.some(item => item.id === product.id)
  }

  return (
    <main className='products'>
      <ul>
        {
          products.slice(0, 10).map(product => {

            const isProductInCart = checkProductInCart(product)
            return (
              <li key={product.id}>
                <img src={product.thumbnail} alt={product.title}/>
                <div>
                  <strong>{product.title}</strong> - {product.price}$
                </div>
                <div>
                  <button onClick={() => addToCart(product)}>
                    {
                      isProductInCart ? <RemoveFromCartIcon/> : <AddToCartIcon/>
                    }
                  </button>
                </div>
              </li>
              )
            }
          )
        }
      </ul>
    </main>
  )
}

export default Products