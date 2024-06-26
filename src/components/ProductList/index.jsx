/* eslint-disable react/prop-types */
import "./ProductList.scss";
import Product from "../Product";

// eslint-disable-next-line react/prop-types
function ProductList({ products }) {
  return (
    <div className="product-lists grid bg-whitesmoke my-3">
      {products.map((product) => {
        let discountedPrice =
          product.price - product.price * (product.discountPercentage / 100);

        return (
          <Product key={product.id} product={{ ...product, discountedPrice }} />
        );
      })}
    </div>
  );
}

export default ProductList;
