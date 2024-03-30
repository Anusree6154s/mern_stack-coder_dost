import React, { useState, useEffect } from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

import CheckoutForm from "./CheckoutForm";
import { useSelector } from "react-redux";
import { selectCurrentOrder } from "../features/orders/ordersSlice";
import '../styles/Stripe.css';

// Make sure to call loadStripe outside of a component’s render to avoid
// recreating the Stripe object on every render.
// This is your test publishable API key.
const stripePromise = loadStripe("pk_test_51OzsYKSEvg4ni96G0o8oXWwkoOKQ4IgvrNnPF86rxihl5866nDtsS6LzY8i6HEpgvukiPOgofvzO3qUj1yW1E1Wy00BsBbS4Jo");

export default function StripeCheckout() {
  const [clientSecret, setClientSecret] = useState("");

  const currentOrder = useSelector(selectCurrentOrder)

  useEffect(() => {
    // Create PaymentIntent as soon as the page loads
    console.log("sent")
    fetch("http://localhost:8080/create-payment-intent", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ totalPrice :currentOrder.totalPrice , decription: "abc"}),
    })
      .then((res) => res.json())
      .then((data) =>{
        console.log("data: ", data)
        return setClientSecret(data.clientSecret)});
  }, []);

  const appearance = {
    theme: 'stripe',
  };
  const options = {
    clientSecret,
    appearance,
  };

  return (
    <div className="Stripe">
      {clientSecret && (
        <Elements options={options} stripe={stripePromise}>
          <CheckoutForm />
        </Elements>
      )}
    </div>
  );
}