import React from 'react';

import caret from './images/caret.png';
import minus from './images/minus.png';
import plus from './images/plus.png';

export const ProductPurchase = ({ price }) => (
  <section className="elc-product-purchase">
    <div className="elc-product-purchase__quantity">
      <div>
        <span>
          Quantity
        </span>
        <img
          src={minus}
          alt="Decrease Quantity"
        />
        <span>1</span>
        <img src={plus} alt="Increase Quantity" />
      </div>
      <div>
        One Time Purchase
        <img className="elc-product-purchase__quantity-arrow" src={caret} alt="Select Frequency" />
      </div>
    </div>
    <div className="elc-product-purchase__price">{price}</div>
    <button className="elc-product-purchase__action elc-btn" name="AddToBag">Add To Bag</button>
  </section>
); 
