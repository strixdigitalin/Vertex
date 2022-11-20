import axios from "axios";
import React, { useState, useEffect } from "react";
import { base_URL, getOrder } from "./Payment/APi/ORders";

const PaymentButton = () => {
  const [values, setValues] = useState({
    amount: 0,
    orderId: "",
    error: "",
    success: false,
  });

  const { amount, orderId, success, error } = values;
  useEffect(() => {
    createOrder();
  }, []);

  const createOrder = () => {
    getOrder((response) => {
      console.log(response);
      if (response.error) {
        setValues({ ...values, error: response.error, success: false });
      } else {
        alert(response.id);
        setValues({
          ...values,
          error: "",
          success: true,
          orderId: response.id,
          amount: response.amount,
        });
      }
    });
  };

  useEffect(() => {
    if (amount > 0 && orderId != "") {
      showRazoryPay();
    }
  }, [amount]);

  const showRazoryPay = () => {
    const form = document.createElement("form");
    form.setAttribute("action", `${base_URL}/api/payment/callback`);
    form.setAttribute("method", "POST");
    const script = document.createElement("script");
    script.src = "https://checkout.razorpay.com/v1/checkout.js";
    script.setAttribute("data-key", "rzp_live_XVo1ue3IK3yAAY");
    script.setAttribute("data-amount", amount);
    script.setAttribute("data-name", "Clever Coder");
    script.setAttribute("data-prefill.contact", "9678452132");
    script.setAttribute("data-prefill.email", "abc@gmail.com");
    script.setAttribute("data-order_id", orderId);
    script.setAttribute("data-prefill.name", "Lalit Patel");
    // script.setAttribute("data-image", `http://localhost:5000/logo`);
    script.setAttribute("data-buttontext", "Buy NOW!!!");
    let paymentbutton = document.getElementById("paymentbutton");
    paymentbutton.appendChild(form);
    form.appendChild(script);
    const input = document.createElement("input");
    input.type = "hidden";
    input.custom = "Hidden Element";
    input.name = "hidden";
    form.appendChild(input);
  };
  return (
    <div>
      {amount === 0 && orderId == "" && <h1>Loading...</h1>}
      <div id="paymentbutton" onClick={showRazoryPay}>
        Buu
      </div>
    </div>
  );
};

export default PaymentButton;
