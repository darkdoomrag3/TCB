import React, { useContext } from "react";
import "./ShopingCart.scss";
import { ReactComponent as ShopingIcon } from '../../assets/img/shoppingcart.svg';




const ShopingCart = () => {


    return (
        <div className="cart-icon" >
            <ShopingIcon className="shopping-icon" />
            <span className="item-count">5</span>
        </div>
    );
};

export default ShopingCart;