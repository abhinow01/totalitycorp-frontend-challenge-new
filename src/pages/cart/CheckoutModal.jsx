import React, { useState,useContext } from "react";
import { Shopcontext } from '../../context/shop-context.jsx';
import './CheckoutModal.css';

const CheckoutModal = ({ closeModal }) => {
  const [shippingAddress, setShippingAddress] = useState("");
  const [contact, setContact] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("");
  const [paymentStatus, setPaymentStatus] = useState("");
  const {cartItems,getTotalCartAmount} = useContext(Shopcontext);
    const totalAmount = getTotalCartAmount();

  const handlePay = () => {
    // Simulating a payment process (timeout to mimic async operation)
    setTimeout(() => {
      setPaymentStatus("success");
    }, 2000);
  };

  const handleCancel = () => {
    setPaymentStatus("canceled");
  };

  return (
    <div className="modal">
        <div className="styling">
      <h2>Checkout</h2>
      <br />
      <p>Total Amount: ${totalAmount}</p>
      <br />
      
      <label>
        Shipping Address:
        <input
          type="text"
          value={shippingAddress}
          onChange={(e) => setShippingAddress(e.target.value)}
        />
      </label>
      <br />
      
      <label>
        Contact:
        <input
        className="contact"
          type="text"
          value={contact}
          onChange={(e) => setContact(e.target.value)}
        />
      </label>
      <br />
      
      <label>
        Payment Method:
        <select className="select"
          value={paymentMethod}
          onChange={(e) => setPaymentMethod(e.target.value)}
        >
          <option value="">Select Payment Method</option>
          <option value="creditCard">Credit Card</option>
          <option value="paypal">PayPal</option>
          <option value="bankTransfer">Bank Transfer</option>
        </select>
      </label>
      <br />
      <div className="buttons">
        <button onClick={handlePay}>Pay</button>
        <button onClick={handleCancel}>Cancel</button>
      </div>
      {paymentStatus === "success" && (
        <p className="payment-status">Payment Successful!</p>
      )}
      {paymentStatus === "canceled" && (
        <p className="payment-status">Payment Canceled.</p>
      )}
      <button className="close"onClick={closeModal}>Close</button>
      </div>
    </div>
  );
};

export default CheckoutModal;
