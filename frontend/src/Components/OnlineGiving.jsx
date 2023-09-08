import React from "react";
import { useNavigate } from "react-router-dom";
import { FlutterWaveButton, closePaymentModal } from "flutterwave-react-v3";

const OnlineGiving = () => {
  const navigate = useNavigate();

  const config = {
    public_key: "FLWPUBK_TEST-03e5f75a62723b00ce018d8f4e4de775-X",
    tx_ref: Date.now(),
    amount: 300,
    currency: "NGN",
    payment_options: "card, mobilemoney, ussd",
    customer: {
      email: "ogahvicent54@mail.com",
      phone_number: "07037900018",
      name: "RCCG ABUNDANT LIFE PARISH",
    },
    customizations: {
      title: "RCCG ABUNDANT LIFE PARISH",
      description: "Payment for items in cart",
      logo:
        "https://st2.depositphotos.com/4403291/7418/v/450/depositphotos_74189661-stock-illustration-online-shop-log.jpg",
    },
  };

  const fwConfig = {
    ...config,
    text: "Pay with Flutterwave!",
    callback: (response) => {
      console.log(response);
      closePaymentModal(); // This will close the modal programmatically
      // You can handle the response and navigate to the success page as needed
      navigate("/success"); // Update with your success page route
    },

    style: {
      backgroundColor: "#007bff", // Button background color
      color: "#fff", // Button text color
      border: "none", // Remove button border
      padding: "10px 20px", // Button padding
      borderRadius: "5px", // Rounded corners
      fontSize: "18px", // Button font size
      cursor: "pointer", // Cursor on hover
    },
    hoverStyle: {
      backgroundColor: "#0056b3", // Button color on hover
    },
    
    onClose: () => {
      // Handle payment modal closure
      console.log("Payment modal closed.");
    },
  };

  return (
    <div className="online-giving-container">
      <h2 className="online-giving-header">ONLINE GIVING</h2>

      <div className="payment-button-container">
        <img src="./flutterwave-icon1.png" alt="Flutterwave Icon" />
        <img src="./flutterwave-icon1.png" alt="Flutterwave Icon" />
        <FlutterWaveButton {...fwConfig} className="payment-button" />
      </div>
    </div>
  );
};

export default OnlineGiving;
