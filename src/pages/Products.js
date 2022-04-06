import { Link } from "react-router-dom";

const Products = () => {
  return (
    <section>
      <ul>
        <li>
          <Link to="/products/book">Book</Link>
        </li>
        <li>
          <Link to="/products/pen">Pen</Link>
        </li>
        <li>
          <Link to="/products/bag">Bag</Link>
        </li>
      </ul>
    </section>
  );
};

export default Products;
