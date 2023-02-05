import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setBasketShow } from "../redux/actions/ProductActions";

function Basket() {
  const buyedProducts = useSelector((state) => state.allProducts.buyedProducts);
  const dispatch = useDispatch();
  const handleBasketShow = (value) => {
    dispatch(setBasketShow(value))
  }
  return (
    <div style={{posiion: 'fixed', top:'0', left:'0', width:'100vw', height:'100vh'}}>
      <div class="ui list container text-center border">
        <div className="text-right d-flex justify-content-between" style={{cursor: 'pointer', padding:'10px'}}>
        <h3>Basket</h3>
        <span onClick={() => handleBasketShow(false)}>X</span>
        </div>
        {buyedProducts.map((product, index) => (
          <div class="item">
            <b>{index +1}</b>
            <b style={{margin: '0px 20px'}}>{product.title}</b>
            <b>${product.price}</b>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Basket;
