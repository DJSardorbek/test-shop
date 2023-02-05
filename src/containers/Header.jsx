/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { setBasketShow } from "../redux/actions/ProductActions";

export default function Header() {
  const buyedProducts = useSelector((state) => state.allProducts.buyedProducts);
  const dispatch = useDispatch();
  const handleBasketShow = (value) => {
    dispatch(setBasketShow(value))
  }
  return (
    <div class="ui pointing menu" style={{padding: '10px 30px'}}>
        <Link class="item">Venturis</Link>
        <Link class="item active">Home page</Link>
        <Link class="item">Products</Link>
        <Link class="item">About us</Link>
        <Link class="item">Contact</Link>
        <div class="right menu">
        <button class="ui primary basic button">Log in</button>
        <button class="ui primary basic button">Sign up</button>
        <button class="ui primary basic button" onClick={() => handleBasketShow(true)}>Basket ({buyedProducts.length})</button>
      </div>
    </div>
  );
}
