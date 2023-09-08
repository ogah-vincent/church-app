import React from "react";

const PaymentSuccess = () => {
  return (
    <div className="success-container">
      <div className="success-message">
        <h2>Payment Successful!</h2>
        <p>Thank you for your purchase. Your payment was successful.</p>
      </div>
      <div className="order-summary">
        <h3>Order Summary</h3>
        <ul>
          <li>Item 1 - NGN100.00</li>
          <li>Item 2 - NGN200.00</li>
          <li>Shipping - NGN25.00</li>
          <li>Total Amount Paid - NGN325.00</li>
        </ul>
      </div>
      <div className="action-buttons">
        <button className="continue-shopping-btn">Continue Shopping</button>
        <button className="view-order-history-btn">View Order History</button>
      </div>
    </div>
  );
};

export default PaymentSuccess;
