import { useEffect, useState } from "react";
import { PaymentElement, useStripe, useElements } from "@stripe/react-stripe-js";
import { Input, TextField } from "@mui/material";

export default function CheckoutForm() {
  const stripe = useStripe();
  const elements = useElements();

  const [donation, setDonation] = useState("$");
  const [message, setMessage] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (!stripe) {
      return;
    }

    const clientSecret = new URLSearchParams(window.location.search).get(
      "payment_intent_client_secret"
    );

    if (!clientSecret) {
      return;
    }

    stripe.retrievePaymentIntent(clientSecret).then(({ paymentIntent }) => {
      setMessage(paymentIntent.status === "succeeded" ? "Your payment succeeded" : "Unexpected error occurred");
    });
  }, [stripe]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    setIsLoading(true);

    const { error } = await stripe.confirmPayment({
      elements,
      confirmParams: {
        return_url: "http://localhost:8000/fundraising",
      }
    });

    if (error && (error.type === "card_error" || error.type === "validation_error")) {
      setMessage(error.message);
    }

    setIsLoading(false);
  };

  return (
    <form onSubmit={handleSubmit}>
      <p className="text-black mb-4">Complete your payment here!</p>
      <TextField
        margin="normal"
        required
        fullWidth
        prefix="$"
        decimalScale={0}
        id="donation"
        label="Donation Amount"
        autoFocus
        onChange={(e)=>setDonation(e.target.value)}
      />
      <PaymentElement />
      <button className='bg-black rounded-xl text-white p-2 mt-6 mb-2' disabled={isLoading || !stripe || !elements}>
        {isLoading ? "Loading..." : "Pay now"}
      </button>
      {message && <div>{message}</div>}
    </form>
  );
}
