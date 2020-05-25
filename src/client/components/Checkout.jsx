import React, { useEffect } from "react";
import { StripeProvider, Elements } from "react-stripe-elements";
import CheckoutForm from "./CheckoutForm.jsx";

function Checkout(props, { selectedProduct, history }) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <StripeProvider apiKey="pk_test_ZIUMUkicCPsAgkK53qhLhq9L00VvpIvI7R">
      <Elements>
        <CheckoutForm movie={props.movie} />
      </Elements>
    </StripeProvider>
  );
}

export default Checkout;
