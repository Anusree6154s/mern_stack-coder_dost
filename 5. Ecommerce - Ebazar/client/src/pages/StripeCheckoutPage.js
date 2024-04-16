import React, { useEffect } from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

import CheckoutForm from "./CheckoutForm";
import "../styles/Stripe.css";
import { useDispatch, useSelector } from "react-redux";
import { makePaymentAsync, selectClientSecret, selectCurrentOrder } from "../features/orders/ordersSlice";

// Make sure to call loadStripe outside of a component’s render to avoid
// recreating the Stripe object on every render.
// This is your test publishable API key.
const stripePromise = loadStripe("pk_test_51OzsYKSEvg4ni96G0o8oXWwkoOKQ4IgvrNnPF86rxihl5866nDtsS6LzY8i6HEpgvukiPOgofvzO3qUj1yW1E1Wy00BsBbS4Jo");

export default function App() {
  //   const [clientSecret, setClientSecret] = useState("")
  const clientSecret = useSelector(selectClientSecret)
  const currentOrder = useSelector(selectCurrentOrder)
  const dispatch = useDispatch()

  useEffect(() => {
    // Create PaymentIntent as soon as the page loads
    //    if() setClientSecret(data.clientSecret));
    if (currentOrder) {
      console.log("current Order: ", currentOrder)
      dispatch(makePaymentAsync(currentOrder))
    }
  }, [currentOrder]);

  const appearance = {
    theme: 'stripe',
  };
  const options = {
    clientSecret,
    appearance,
  };
  console.log("client Secret in stripecheckout: ", clientSecret)
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