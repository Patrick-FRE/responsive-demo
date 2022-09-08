import React from 'react';
import { ProductDesc } from './ProductDesc';
import { ProductImage } from './ProductImage';
import { ProductPurchase } from './ProductPurchase';
import { ProductGrid } from './ProductGrid';

import './styles/product.scss';

export const Product = ({
  productData: {
    imgURL,
    category,
    name,
    description,
    ratingURL,
    features,
    shade,
    price,
    crossSell,
  },
}) => (
  <main className="elc-product">
    <h4 className="elc-product___breadcrumb">{category}</h4>
    <div className="elc-product__detail">
      <div className="elc-product__detail-image">
        <ProductImage image={imgURL} />
      </div>
      <div className="elc-product__detail-des">
        <ProductDesc
          category={category}
          name={name}
          description={description}
          rating={ratingURL}
          features={features}
          shade={shade}
        />
        <hr className='elc-product__hr-mt' />
        <ProductPurchase price={price} />
      </div>
    </div>

    <div>
      <hr className='elc-product__hr-mt-lg' />
      <ProductGrid
        heading={crossSell.heading}
        cta1={crossSell.cta1}
        p1Name={crossSell.product1.name}
        p1Img={crossSell.product1.imgURL}
        p1Price={crossSell.product1.price}
        p2Name={crossSell.product2.name}
        p2Img={crossSell.product2.imgURL}
        p2Price={crossSell.product2.price}
        p3Name={crossSell.product3.name}
        p3Img={crossSell.product3.imgURL}
        p3Price={crossSell.product3.price}
        p4Name={crossSell.product4.name}
        p4Img={crossSell.product4.imgURL}
        p4Price={crossSell.product4.price}
      />
    </div>
  </main>
);
