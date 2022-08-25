import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux/es/exports";
import {
  selectedProduct,
  remevoSelectedProduct,
} from "./redux/actions/productActions";

const ProductDetail = () => {
  const { productId } = useParams();
  //console.log(productId);
  const product = useSelector((state) => state.product);
  console.log({ product });
  const { image, title, price, category, description } = product;
  console.log(productId);

  const dispatch = useDispatch();
  //console.log(productId);

  const fetchProductDetail = async () => {
    try {
      const res = await axios.get(
        `https://fakestoreapi.com/products/${productId}`
      );
      // console.log(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    if (productId && productId !== "") fetchProductDetail(productId);
    return () => {
      dispatch(remevoSelectedProduct());
    };
  }, [productId]);

  return (
    <div className="ui grid container" style={{}}>
      {!product ? (
        <div>...Loading</div>
      ) : (
        <div style={{}} className="ui placeholder segment">
          <div className="ui two column stackable center aligned grid">
            <div className="ui vertical divider">AND</div>
            <div className="middle aligned row">
              <div className="column lp">
                <img className="ui fluid image" src={image} />
              </div>
              <div className="column rp">
                <h1>{title}</h1>
                <h2>
                  <a className="ui teal tag label">${price}</a>
                </h2>
                <h3 className="ui brown block header">{category}</h3>
                <p>{description}</p>
                <div className="ui vertical animated button" tabIndex="0">
                  <div className="hidden content">
                    <i className="shop icon"></i>
                  </div>
                  <div className="visible content">Add to Cart</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductDetail;
