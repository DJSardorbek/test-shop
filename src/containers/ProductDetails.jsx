/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable jsx-a11y/anchor-is-valid */
import axios from 'axios';
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { selectedProduct, removeSelectedProduct } from '../redux/actions/ProductActions';
import Loader from './Loader'

export default function ProductDetails() {
  const product = useSelector(state => state.product);
  const {image, title, price, category, description} = product;
  const {productId} = useParams();
  const dispatch = useDispatch();

  const fetchProductDetails = async () => {
    const response = await axios.get(`https://fakestoreapi.com/products/${productId}`)
    .catch(e => console.log('Error: ', e.message));
    dispatch(selectedProduct(response.data));
  }

  useEffect(() => {
    if(productId && productId !== '') fetchProductDetails();
    

    return () => {
      dispatch(removeSelectedProduct())
    }
  }, [productId])

  return (
    <div className='ui grid container'>
      {Object.keys(product).length === 0 ? (
        <Loader>

        </Loader>
      ):(
        <div className='ui placeholder segment'>
          <div className='ui two column stackable center aligned grid'>
            <div className='ui vertical divider'>AND</div>
            <div className='middle aligned row'>
              <div className='column lp'>
                <img src={image} alt={title} />
              </div>
              <div className='column rp'>
                <h1>{title}</h1>
                <h2>
                  <a className='ui teal tag label'>${price}</a>
                </h2>
                <h3 className='ui brown block header'>{category}</h3>
                <p>{description}</p>
                <div className='ui vertical animated button' tabIndex="0">
                  <div className='hidden content'>
                    <i className='shop icon'></i>
                  </div>
                  <div className='visible content'>Add To Cart</div>
                </div>
              </div>
            </div>

          </div>
        </div>
      )}
    </div>
  )
}
