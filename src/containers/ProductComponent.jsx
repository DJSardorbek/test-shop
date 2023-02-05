import React from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { addProductToBasket } from '../redux/actions/ProductActions';

export default function ProductComponent() {
  const dispatch = useDispatch();
  const addToBasket = (product) => {
    dispatch(addProductToBasket(product));
  }

  const filteredProducts = useSelector(state => state.allProducts.filteredProduct);
  const renderList = filteredProducts.map((product) => {
    const {id, image, title, price, category } = product;
    return (
      <div className='four wide column' key={id}>
        <div className='ui link cards' style={{width: 294}}>
              <div className='card' style={{height: 550}}>
                  <div className='image'>
                    <img src={image} alt={title} style={{height: 350, width: 280}} />
                  </div>
                  <div className='content'>
                      <div className='header'>
                        {title}
                      </div>
                      <div className='meta price'>$ {price}</div>
                      <div className='meta'>{category}</div>
                  </div>
                  <div class="extra content text-center">
                    <button class="ui primary basic button" onClick={() => addToBasket(product)}>Buy now</button>
                  </div>
              </div>
            </div>
      </div>
    )
  })
  return (
    <>
      {renderList}
    </>
  )
}
