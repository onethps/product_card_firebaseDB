import React from 'react';
import s from "./CartItem.module.scss";
import { IProduct } from "store/product/productSlice";
import { useAppDispatch } from "utils/redux-utils";
import { minusItemAC, plusItemAC } from "store/cart/cartSlice";

type CartItemType = {
  product: IProduct
}

const CartItem= ({product}:CartItemType) => {
  const dispatch = useAppDispatch()
  const {name, adds, photo,  count} = product

  const incrementCountItems = () => {
    dispatch(plusItemAC(product))
  }

  const decrementCountItems = () => {
    dispatch(minusItemAC(product))
  }


  return (
    <div className={s.root}>
      <img alt={'coffeePic'} src={photo}/>

      <div className={s.textBlock}>
        <h2>{name}</h2>
        <h3>{adds}</h3>
      </div>

      <div className={s.countBlock}>
        <button onClick={decrementCountItems}>-</button>
        <h2>{count}</h2>
        <button onClick={incrementCountItems}>+</button>
      </div>


    </div>
  );
};

export default CartItem;