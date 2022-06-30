import React, { FC, useEffect } from "react";
import { IProduct } from "store/product/productSlice";
import s from "./Product.module.scss"
import { useAppDispatch } from "utils/redux-utils";
import { useSelector } from "react-redux";
import { itemsInCart, totalPrice } from "selectors/selectors";
import { plusItemAC } from "store/cart/cartSlice";


type ProductCurrentType = {
  product: IProduct
}


export const Product:FC<ProductCurrentType> = ({product}) => {
  const dispatch = useAppDispatch()


  const onAddProductInCartHandle = () => {
    dispatch(plusItemAC(product))
  }

  return (
    <div>
      <div className={s.productBg}>
        <img
          alt={'coffeePhoto'}
          src={product.photo}
          className={s.productPhoto}
        />
        <div className={s.productDesc}>
          <h3>{product.name}</h3>
          <h4>{product.adds}</h4>
          <div className={s.priceBlock}>
            <h2>${product.price}</h2>
            <button onClick={onAddProductInCartHandle}>+</button>
          </div>
        </div>
      </div>
    </div>
  );
};