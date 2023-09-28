import { useState, useEffect } from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "./CheckoutForm";
import axios from "axios";
const CLIENT_STRIPE_KEY = import.meta.env.VITE_CLIENT_STRIPE_KEY
const stripePromise = loadStripe(CLIENT_STRIPE_KEY);

export default function StripeCheckout() {
  const [clientSecret, setClientSecret] = useState("");
console.log("public key", CLIENT_STRIPE_KEY);
  useEffect(() => {
    axios.post("/api/create-payment-intent", {
      headers: { "Content-Type": "application/json" },
      body: { donation: 300 },
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error("Network response was not ok");
        }
        return res.json();
      })
      .then((data) => setClientSecret(data.clientSecret))
      .catch((error) => {
        console.log(error);
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
