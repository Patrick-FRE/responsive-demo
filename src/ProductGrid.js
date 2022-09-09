import React from 'react';
import { ProductImage } from './ProductImage';

export const ProductGrid = ({ heading, cta1, p1Name, p1Img, p1Price, p2Name, p2Img, p2Price, p3Name, p3Img, p3Price, p4Name, p4Img, p4Price }) =>
  <section className="elc-product-grid">
    <h2 className="elc-product-grid__title">{heading}</h2>
    <div className="elc-product-grid-items">
      <div className="elc-product-grid-items__item">
        <ProductImage image={p1Img} />
        <div className="elc-product-grid-items__item__des">
          <h1>{p1Name}</h1>
          <h4>{p1Price}</h4>
          <button className="elc-btn elc-btn-outlined">{cta1}</button>
        </div>
      </div>
      <div className="elc-product-grid-items__item">
        <ProductImage image={p2Img} />
        <div className="elc-product-grid-items__item__des">
          <h1>{p2Name}</h1>
          <h4>{p2Price}</h4>
          <button className="elc-btn elc-btn-outlined">{cta1}</button>
        </div>
      </div>
      <div className="elc-product-grid-items__item">
        <ProductImage image={p3Img} />
        <div className="elc-product-grid-items__item__des">
          <h1>{p3Name}</h1>
          <h4>{p3Price}</h4>
          <button className="elc-btn elc-btn-outlined">{cta1}</button>
        </div>
      </div>
      <div className="elc-product-grid-items__item">
        <ProductImage image={p4Img} />
        <div className="elc-product-grid-items__item__des">
          <h1>{p4Name}</h1>
          <h4>{p4Price}</h4>
          <button className="elc-btn elc-btn-outlined">{cta1}</button>
        </div>
      </div>
    </div>
  </section>
