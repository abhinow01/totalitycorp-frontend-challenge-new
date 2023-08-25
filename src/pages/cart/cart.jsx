import React,{useContext,useState} from "react";
import {PRODUCTS} from '../../products.js';
import { CartItem } from './cart-item.jsx'; 
import { Shopcontext } from '../../context/shop-context.jsx';
import { useNavigate } from "react-router-dom";
import CheckoutModal from './CheckoutModal';
import './cart.css'
export const Cart = ()=>{
    const {cartItems,getTotalCartAmount} = useContext(Shopcontext);
    const totalAmount = getTotalCartAmount();
    const navigate = useNavigate();
    const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

    return <div className="cart">
        <div><h1>your cart items </h1></div>
        <div className="cartItems">
            {PRODUCTS.map((product)=>{
                if(cartItems[product.id] > 0){
                return <CartItem data={product}/>;
                }
            })}
        </div>
        {totalAmount>0?(
        <div className="checkout">
            <p>subtotal: ${totalAmount}</p>
            <button onClick={()=>navigate("/")}>Continue Shopping</button>
            <button onClick={openModal}>checkout</button>
        </div>
        ):( <h1>Your cart is empty</h1>)}


            {isModalOpen && <CheckoutModal closeModal={closeModal} />}

    </div>
};