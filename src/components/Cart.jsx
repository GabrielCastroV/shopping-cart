import { useId } from "react";
import { ClearCartIcon, CartIcon } from "./Icons";
import '../styles/cart.css'

export const Cart = () => {

    const cartCheckboxId = useId();

  return (
    <>
        <label htmlFor={cartCheckboxId} className='cart-button'>
            <CartIcon/>
        </label>
        <input type="checkbox" hidden id={cartCheckboxId} />

        <aside className="cart">
            <ul>
                <li>
                    <img src="" alt="" />
                    <div>
                        <strong>iPhone</strong> - $1200
                    </div>

                    <footer>
                        <small>
                            Qty: 1
                        </small>
                        <button>+</button>
                    </footer>
                </li>
            </ul>

            <button>
                <ClearCartIcon/>
            </button>
        </aside>
    </>
  )
}
