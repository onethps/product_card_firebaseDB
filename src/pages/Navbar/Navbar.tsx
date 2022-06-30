import React from 'react';
import s from './Navbar.module.scss';
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { PATH } from "routes/AppRoutes";
import { itemsInCart, totalPrice } from "selectors/selectors";

function Navbar() {
  const navigate = useNavigate()

  const itemsInCartList = useSelector(itemsInCart)
  const total = useSelector(totalPrice)

  const totalCartItems = itemsInCartList.length

  return (
    <div className={s.root}>
      <span>Total : ${total}</span>
      <div className={s.buttonBlock}>
        <button onClick={() => navigate(PATH.CART)}>Cart</button>
        {totalCartItems > 0 && <div className={s.countBlock}><span>{totalCartItems}</span></div>}
      </div>
    </div>
  );
}

export default Navbar;
