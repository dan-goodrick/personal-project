// https://github.com/sadmann7/skateshop.git

import {
  LinkAuthenticationElement,
  PaymentElement,
  useElements,
  useStripe,
} from "@stripe/react-stripe-js";
import CircularProgress from "@mui/material/CircularProgress";
import Button from "@mui/material/Button";
import { useEffect, useId, useState } from "react";


// Docs: https://stripe.com/docs/payments/quickstart

export default function CheckoutForm({ amount, candidate }) {
  const id = useId();
  const stripe = useStripe();
  const elements = useElements();
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const SUCCESS_URL = import.meta.env.ENV === 'production'?'checkout/success': import.meta.env.VITE_BASE_URL+"/checkout/success"
  console.log("donation amount", amount, candidate.fundsRaised);
  useEffect(() => {
    if (!stripe) return;

    const clientSecret = new URLSearchParams(window.location.search).get(
      "payment_intent_client_secret"
    );
    console.log("useEffect", clientSecret, stripe, elements);
    if (!clientSecret) return;

    stripe.retrievePaymentIntent(clientSecret).then(({ paymentIntent }) => {
      switch (paymentIntent?.status) {
        case "succeeded":
          setMessage("Payment succeeded!");
          break;
        case "processing":
          setMessage("Your payment is processing.");
          break;
        case "requires_payment_method":
          setMessage("Your payment was not successful, please try again.");
          break;
        default:
          setMessage("Something went wrong.");
          break;
      }
    });
  }, [stripe]);

  async function onSubmit(event) {
    event.preventDefault();
    
    console.log("stripe", event, stripe, elements);
    if (!stripe || !elements) {
      // Stripe.js hasn't yet loaded.
      // Make sure to disable form submission until Stripe.js has loaded.
      return;
    }

    setIsLoading(true);
    setMessage(null);

    // // send the donation to the DB
    // axios.put(`/api/record-donation/${candidate.candidateId}`, {
    //   amount: +amount + +candidate.fundsRaised,
    // }).then(
    //   console.log(`Recorded ${amount} added to ${candidate.fundsRaised} for ${candidate.lastName}`)
    // ).catch((err) => {
    //   console.error(`Unable to update funding`, err);
    // });

    // send the money to stripe
    const { error } = await stripe.confirmPayment({
      elements,
      confirmParams: {
        return_url: SUCCESS_URL, // should go to a confirmation page
        receipt_email: email,
      }
    });

    // This point will only be reached if there is an immediate error when
    // confirming the payment. Otherwise, your customer will be redirected to
    // your `return_url`. For some payment methods like iDEAL, your customer will
    // be redirected to an intermediate site first to authorize the payment, then
    // redirected to the `return_url`.

    if (error.type === "card_error" || error.type === "validation_error") {
      setMessage(error.message ?? "Something went wrong, please try again.");
    } else {
      setMessage("Something went wrong, please try again.");
    }
    // toast.error(message);

    setIsLoading(false);
  }
  console.log("amount", amount);
  return (
    <form
      id={`${id}-checkout-form`}
      aria-labelledby={`${id}-checkout-form-heading`}
      onSubmit={(...args) => onSubmit(...args)}
    >
      <LinkAuthenticationElement
        id={`${id}-link-authentication-element`}
        onChange={(e) => setEmail(e.value.email)}
      />
      {/* <AddressElement
        id={`${id}-address-element`}
        options={{ mode: "shipping" }}
      /> */}
      <PaymentElement
        id={`${id}-payment-element`}
        options={{
          layout: "tabs",
        }}
      />
      <Button
        type="submit"
        size="large"
        aria-label="Donate"
        disabled={!stripe || !elements || isLoading}
      >
        {isLoading && <CircularProgress />}
        Donate ${amount} to build a home for the {candidate.lastName} family.
      </Button>
      {/* <Toaster /> */}
    </form>
  );
}
