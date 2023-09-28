import { useState, useEffect } from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "./CheckoutForm";
import axios from "axios";
const CLIENT_STRIPE_KEY = import.meta.env.VITE_CLIENT_STRIPE_KEY;
const stripePromise = loadStripe(CLIENT_STRIPE_KEY);

export default function StripeCheckout({amount}) {
  const [clientSecret, setClientSecret] = useState("");
  console.log("public key", CLIENT_STRIPE_KEY);
  useEffect(() => {
    axios
      .post("/api/create-payment-intent", {
        headers: { "Content-Type": "application/json" },
        body: { donation: amount*100 },
      })
      .then((res) => {
        console.log('response', res.data.clientSecret);
        if (res.statusText==='OK') {
         return setClientSecret(res.data.clientSecret)
        }
        throw new Error(`Network response was not ok`);
      })
      .catch((error) => {
        console.log("Error in checkout:", error);
      });
  }, []);

  const options = {
    clientSecret,
  };

  return (
    <div>
      {clientSecret && (
        <Elements options={options} stripe={stripePromise}>
          <CheckoutForm />
        </Elements>
      )}
    </div>
  );
}
