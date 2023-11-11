import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { removeFromCart, increase, decrease } from "../redux";

const Cart = () => {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const totalCartAmount = cart
    .reduce(
      (total, product) =>
        (total = total + parseInt(product.price * product.count)),
      0
    )
    .toFixed(2);

  const totalCartCount = cart.reduce(
    (total, product) => (total = total + product.count),
    0
  );
  return (
    <div>
      <h2>
        <Link to="/">Products</Link> <span>My Cart({totalCartCount})</span>
      </h2>

      <h3>Total Cart Amount: &#x24;{totalCartAmount}</h3>

      {cart.map((product) => (
        <div className="product" key={product.id}>
          <img src={product.thumbnail} alt={product.title} />
          <div>
            <h4>{product.title}</h4>
            <p>Description: {product.description}</p>
            <p>Price: &#x24;{product.price}</p>
            <p>Total: &#x24;{(product.price * product.count).toFixed(2)}</p>
            <p>You have a total of {product.count} in your cart.</p>
            <button onClick={() => dispatch(decrease(product.id))}>-</button>
            <button onClick={() => dispatch(removeFromCart(product.id))}>
              Remove
            </button>
            <button onClick={() => dispatch(increase(product.id))}>+</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Cart;
