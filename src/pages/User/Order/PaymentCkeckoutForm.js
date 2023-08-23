import {
  CardElement,
  useElements,
  useStripe,
} from "@stripe/react-stripe-js";
import React, { useState } from "react";
import { Button } from "../../../components/common/Button/Button";
import { Form } from "../../../components/common/Form/Form";
import { FormInput } from "../../../components/common/FormInput/FormInput";

export const PaymentCkeckoutForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");
  const [address, setAddress] = useState("");

  const stripe = useStripe();
  const elements = useElements();

  const handleSubmit = async (event) => {
    // Block native form submission.
    event.preventDefault();

    if (!stripe || !elements) {
      // Stripe.js has not loaded yet. Make sure to disable
      // form submission until Stripe.js has loaded.
      return;
    }

    // Get a reference to a mounted CardElement. Elements knows how
    // to find your CardElement because there can only ever be one of
    // each type of element.
    const card = elements.getElement(CardElement);

    if (card == null) {
      return;
    }

    // Use your card Element with other Stripe.js APIs
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });

    if (error) {
      console.log("[error]", error);
    } else {
      console.log("[PaymentMethod]", paymentMethod);
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      <div className="">
        <h2 className="text-2xl pb-4">Shpping Details</h2>
        <FormInput
          label="Your Name"
          type="text"
          name="name"
          placeholder="Enter your name here"
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <FormInput
          label="Your Email"
          type="email"
          name="email"
          placeholder="Enter your email here"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <FormInput
          label="Your Phone Number"
          type="number"
          name="number"
          placeholder="Enter your phone number here"
          required
          value={number}
          onChange={(e) => setNumber(e.target.value)}
        />
        <FormInput
          label="Your Address"
          type="text"
          name="adress"
          placeholder="Enter your adress here"
          required
          value={address}
          onChange={(e) => setAddress(e.target.value)}
        />

        <h2 className="text-2xl pb-4">Payment Details</h2>
        {/* <PaymentElement /> */}
        <CardElement
          options={{
            style: {
              base: {
                fontSize: "16px",
                color: "#424770",
                "::placeholder": {
                  color: "#aab7c4",
                },
              },
              invalid: {
                color: "#9e2146",
              },
            },
          }}
        />
        <Button name="Payment" />
      </div>
    </Form>
  );
};
