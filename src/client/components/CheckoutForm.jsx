import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  CardNumberElement,
  CardExpiryElement,
  CardCVCElement,
  injectStripe,
} from "react-stripe-elements";
import axios from "axios";
import "./CheckoutForm.scss";
import styled from "styled-components";

const TitleBar = styled.div`
  height: 125px;
  background-color: rgb(242, 242, 242);
  display: grid;
  grid-template-columns: 100px 1fr 1fr;
  margin-bottom: 10px;
  position: relative;
`;
const PictureDiv = styled.div`
  margin-left: 10px;
  size: 100%;
  & > img {
    width: 100%;
    max-height: 100%;
  }
`;
const TitleDiv = styled.div`
  bottom: 0;
  left: 100px;
  margin: 15px;
  position: absolute;
`;
const PriceDiv = styled.div`
  bottom: 0;
  right: 0;
  position: absolute;
  margin-right: 10px;
  margin-bottom: 15px;
`;

const CheckoutForm = (props, { selectedProduct, stripe, history }) => {
  //   if (selectedProduct === null) history.push("/");
  const [receiptUrl, setReceiptUrl] = useState("");
  const handleSubmit = async (event) => {
    event.preventDefault();
    const { token } = await stripe.createToken();
    const order = await axios.post("http://localhost:7000/api/stripe/charge", {
      amount: selectedProduct.price.toString().replace(".", ""),
      source: token.id,
      receipt_email: "customer@example.com",
    });
    setReceiptUrl(order.data.charge.receipt_url);
  };

  if (receiptUrl) {
    return (
      <div className="success">
        <h2>Payment Successful!</h2>
        <a href={receiptUrl}>View Receipt</a>
        <Link to="/">Home</Link>
      </div>
    );
  }
  return (
    <div className="checkout-form">
      <TitleBar>
        <PictureDiv>
          <img src={props.movie.poster} />
        </PictureDiv>
        <div>
          <TitleDiv>{props.movie.title}</TitleDiv>
        </div>
        <div>
          <PriceDiv>CA$4.99</PriceDiv>
        </div>
      </TitleBar>
      <form onSubmit={handleSubmit}>
        <label>
          Card details
          <CardNumberElement />
        </label>
        <label>
          Expiration date
          <CardExpiryElement />
        </label>
        <label>
          CVC
          <CardCVCElement />
        </label>
        <button type="submit" className="order-button">
          Pay now
        </button>
      </form>
    </div>
  );
};

export default injectStripe(CheckoutForm);
