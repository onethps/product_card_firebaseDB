import React from 'react';
import { useSelector } from "react-redux";
import CartItem from "pages/CartPage/CartItem/CartItem";
import { itemsInCart } from "selectors/selectors";
import SubmitOrder from "pages/CartPage/SubmitOrder/SubmitOrder";
import s from './CartPage.module.scss'

const CartPage = () => {
  const cartItems = useSelector(itemsInCart)

  return (
    <div className={s.root}>
      <div className={s.cartItemsBox}>
      {cartItems.map((product) => <CartItem key={product.id} product={product}/>)}
      </div>
      <div className={s.orderBox}>
      <SubmitOrder/>
      </div>
    </div>
  );
};

export default CartPage;