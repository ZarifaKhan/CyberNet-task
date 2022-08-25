import React, { useEffect } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux/es/exports";
import ProductCompanent from "./ProductCompanent";
import { setProducts } from "./redux/actions/productActions";
import { ActionTypes } from "./redux/contants/action-types";

const ProductListing = () => {
  const products = useSelector((state) => state);
  console.log(products);
  const dispatch = useDispatch();

  /*const fetchProducts = () => {
    const response = fetch("https://fakestoreapi.com/products/1")
      .then((response) => response.json())
      .then((response) => console.log(response));

    dispatch(setProducts(response.data));
  };*/
  const fetchProducts = async () => {
    try {
      const res = await axios.get("https://fakestoreapi.com/products");
      console.log({ res });
      dispatch(setProducts(res.data));
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    fetchProducts();
  }, []);
  //console.log("Products", products);

  return (
    <div className="ui grid container">
      <ProductCompanent />
    </div>
  );
};

export default ProductListing;
