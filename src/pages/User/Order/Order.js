import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import React from "react";
import { PaymentCkeckoutForm } from "./PaymentCkeckoutForm";

const stripePromise = loadStripe(process.env.REACT_APP_PUBLISHABLE_KEY);

export const Order = () => {
  return (
    <div className="container mx-auto my-5 flex justify-center px-2 sm:px-0">
      <Elements stripe={stripePromise}>
        <PaymentCkeckoutForm />
      </Elements>
    </div>
  );
};
