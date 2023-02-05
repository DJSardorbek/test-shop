/* eslint-disable react-hooks/exhaustive-deps */
import React from "react";
import ProductComponent from "./ProductComponent";
import axios from "axios";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setProduct } from "../redux/actions/ProductActions";
import Loader from "./Loader";
import Category from "./Category";
import Basket from "./Basket";

export default function ProductList() {
  const filteredProducts = useSelector((state) => state.allProducts.filteredProduct);
  const isBasketOpen = useSelector((state) => state.allProducts.isBasketOpen);
  const dispatch = useDispatch();

  const fetchProducts = async () => {
    const response = await axios
      .get("https://fakestoreapi.com/products")
      .catch((e) => console.log("Error: ", e.message));
    dispatch(setProduct(response.data));
  };

  useEffect(() => {
    fetchProducts();
  }, []);
  return (
    <>
      {isBasketOpen ? (
        <Basket/>
      ) :
      (
        <>
        <Category/>
        <div className="ui grid container">
          {filteredProducts.length === 0 ? <Loader /> : <ProductComponent />}
        </div>
        </>
      )}
    </>
  );
}
