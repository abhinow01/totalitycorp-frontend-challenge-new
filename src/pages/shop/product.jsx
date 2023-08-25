import React, { useContext } from "react";
import { Shopcontext } from "../../context/shop-context";
export const Product = (props)=>{
const {id,productName,price,productImage} = props.data;
const {addToCart, cartItems} = useContext(Shopcontext);
const cartItemAmount = cartItems[id];
return (<div className="product">
    <img src={productImage} />
    <div className="description">
        <p>
            <b>{productName}</b>
        </p>
        <p>
            <b>${price}</b>
        </p>
    </div>
    <button className="addToCartBttn" onClick={()=>addToCart(id)}>Add to cart{cartItemAmount>0 && <>({cartItemAmount})</>}</button>
</div>
);
};