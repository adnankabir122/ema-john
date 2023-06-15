
import './Cart.css'
const Cart = (props) => {
  const {cart} = props

  return (
    <section className="cart-section">
        <h4>Order Summary</h4> 

        <p>Selected Items : {cart.length}</p>
    </section>
  )
}

export default Cart
