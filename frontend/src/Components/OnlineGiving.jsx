import React, { useState } from "react";
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";

const OnlineGiving = () => {
  const [showButtons, setShowButtons] = useState(false);

  const handlePayment = () => {
    setShowButtons(true);
  };

  return (
    <div className="App">
      <h2>ONLINE GIVING</h2>
      <img height="400" src="./online-giving.jpg" alt="online payment" />
      <p>
        <span className="amount"></span>
      </p>

      <button onClick={handlePayment} className="Payment-btn">
        Start Payment
      </button>

      {showButtons && (
        <PayPalScriptProvider
          options={{
            "client-id": "AbGektsflCF6n_BX4U0ToI4ZrAJ3seLqm8pCjlyMTkPGwgJIkJaGQzPGPWAfVCUvfXO9bJ_r1Zc6MMVp",
          }}
        >
          <PayPalButtons
            className="paypal-buttons"
            createOrder={(data, actions) => {
              return actions.order.create({
                purchase_units: [
                  {
                    amount: {
                      value: "500.00",
                      currency_code: "USD", // Correct placement of currency
                    },
                  },
                ],
              });
            }}
            onApprove={(data, actions) => {
              return actions.order.capture().then(function (details) {
                alert("Transaction completed by " + details.payer.name.given_name);
              });
            }}
          />
        </PayPalScriptProvider>
      )}
    </div>
  );
};

export default OnlineGiving;
