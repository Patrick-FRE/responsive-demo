import React from 'react';

export const ProductImage = ({ image }) =>
  <figure className='elc-product-img-wrapper'>
    <img className='elc-product-img' src={image} alt="Product" />
  </figure>
