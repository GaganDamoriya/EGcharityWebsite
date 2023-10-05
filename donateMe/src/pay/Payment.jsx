import { useLocation } from "react-router-dom";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import StripeCheckout from "react-stripe-checkout";
import "./payment.css";

const Payment = (props) => {
  props.funcNav(false);
  const navigate = useNavigate();
  const location = useLocation();
  const formData = location.state && location.state.formData;

  const makepayment = (token) => {
    const body = {
      token,
      formData,
    };
    const headers = {
      "Content-Type": "application/json",
    };

    return fetch(`http://localhost:5000/payment`, {
      method: "POST",
      headers,
      body: JSON.stringify(body),
    })
      .then((response) => {
        console.log("RESPONSE", response);
        const { status } = response;
        if (status === 200) {
          navigate("/success");
        }
        console.log("STATUS", status);
      })
      .catch((err) => {
        navigate("/failed");
        console.log(err);
      });
  };

  props.funcNav(false);
  console.log(formData);
  return (
    <div className="paySection">
      <span className="title">Donate to Community</span>
      <StripeCheckout
        name="DonateMe"
        stripeKey="pk_test_51NklYdSJbGXIhNPP6lvtNsFWriVkYS9PbZA1j9wNQwgGIUrYyrvulU47pCLy9noCqlG2uAhFFWNW9fJIiaUJ0Sdq00uXZijvq1"
        token={makepayment}
        amount={formData.amount * 100}
      >
        <button className="btn">Donate ${formData.amount}</button>
      </StripeCheckout>
    </div>
  );
};

export default Payment;
