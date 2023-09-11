import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import React from "react";
import { Button } from "../../../components/common/Button/Button";
import { Form } from "../../../components/common/Form/Form";

export const PaymentCkeckoutForm = ({ shippingInfo }) => {
  const stripe = useStripe();
  const elements = useElements();

  const handleSubmit = async (e) => {
    // Block native form submission.
    e.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    // Handle payment submission here using Stripe API
    const { token, error } = await stripe.createToken(
      elements.getElement(CardElement)
    );

    if (error) {
      console.error(error);
    } else {
      // Send the token to your server for payment processing and saving the shipping info
      const response = await fetch(
        "http://localhost:5000/api/payment/create-payment-intent",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ token, shippingInfo }),
        }
      );
      // Handle the server response here

      console.log(response);
      alert("success");
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      <div className="">
        <h2 className="text-2xl pb-4">Payment Details</h2>
        <CardElement />
        <Button type="submit" name="Pay Now" />
      </div>
    </Form>
  );
};
