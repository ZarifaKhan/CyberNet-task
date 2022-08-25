import React from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { selectedProduct } from "./redux/actions/productActions";

const ProductCompanent = () => {
  const products = useSelector((state) => state.allProducts.products);
  const dispatch = useDispatch();
  const renderList = products.map((product) => {
    const { id, title, image, price, category } = product;
    return (
      <div
        className="four colomn wide"
        key={id}
        onClick={() => dispatch(selectedProduct(product))}
      >
        <Link to={`/product/${id}`}>
          <div className="ui link cards">
            <div className="card">
              <div className="image">
                <img src={image} alt={title} />
              </div>
              <div className="content">
                <div className="header">{title}</div>
                <div className="meta price">${price}</div>
                <div className="meta">{category}</div>
              </div>
            </div>
          </div>
        </Link>
      </div>
    );
  });

  return <>{renderList}</>;
};

export default ProductCompanent;
