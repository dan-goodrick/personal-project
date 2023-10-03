// https://github.com/sadmann7/skateshop.git

import {
  AddressElement,
  LinkAuthenticationElement,
  PaymentElement,
  useElements,
  useStripe,
} from "@stripe/react-stripe-js";
import CircularProgress from "@mui/material/CircularProgress";
import Button from "@mui/material/Button";
import { useEffect, useId, useState } from "react";
import { Toaster, toast } from "sonner";

// Docs: https://stripe.com/docs/payments/quickstart

export default function CheckoutForm({ amount, lastName }) {
  const id = useId();
  const stripe = useStripe();
  const elements = useElements();
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const URL = import.meta.env.VITE_URL;
  const successUrl = `${URL}checkout/success`;
  console.log(successUrl);

  useEffect(() => {
    if (!stripe) return;

    const clientSecret = new URLSearchParams(window.location.search).get(
      "payment_intent_client_secret"
    );

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

    if (!stripe || !elements) {
      // Stripe.js hasn't yet loaded.
      // Make sure to disable form submission until Stripe.js has loaded.
      return;
    }

    setIsLoading(true);
    setMessage(null);

    const { error } = await stripe.confirmPayment({
      //`Elements` instance that was used to create the Payment Element
      elements,
      confirmParams: {
        return_url: successUrl,
        receipt_email: email,
      },
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
    console.log("message", message, error);
    toast.error(message);

    setIsLoading(false);
  }

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
      <AddressElement
        id={`${id}-address-element`}
        options={{ mode: "shipping" }}
      />
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
        variant="secondary"
        disabled={!stripe || !elements || isLoading}
      >
        {isLoading && <CircularProgress />}
        Donate ${amount} to build a home for the {lastName} family.
      </Button>
      <Toaster />
    </form>
  );
}
