import { Link } from "react-router-dom";
import Item from "./Item";
import { Product } from "../data";
import { useSelector } from "react-redux";

const Products = () => {
  const cart = useSelector((state) => state.cart);

  const totalCartCount = cart.reduce(
    (total, product) => (total = total + product.count),
    0
  );

  return (
    <div>
      <h2>
        <span>Products</span>
        <Link to="/cart">My Cart({totalCartCount})</Link>
      </h2>

      {Product.map((product) => {
        return <Item product={product} key={product.id} />;
      })}
    </div>
  );
};

export default Products;
