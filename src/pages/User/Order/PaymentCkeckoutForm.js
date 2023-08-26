import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import React, { useEffect, useState } from "react";
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

  const [clientSecret, setClientSecret] = useState("");

  useEffect(() => {
    // Create PaymentIntent as soon as the page loads
    fetch("http://localhost:5000/api/payment/create-payment-intent", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ items: [{ id: "xl-tshirt" }], amount: 10 }),
    })
      .then((res) => res.json())
      .then((data) => setClientSecret(data.clientSecret));  
  }, []);

  console.log(clientSecret);

  const handleSubmit = async (event) => {
    // Block native form submission.
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    const card = elements.getElement(CardElement);

    if (card == null) {
      return;
    }

    try {
      const { error, paymentMethod } = await stripe.createPaymentMethod({
        type: "card",
        card,
      });

      if (error) {
        console.error("[error]", error);
        // Display an error message to the user
      } else {
        console.log("[PaymentMethod]", paymentMethod);

        // Now confirm the payment using the clientSecret
        const { paymentIntent, error: confirmError } =
          await stripe.confirmCardPayment(clientSecret, {
            payment_method: {
              card: card,
              billing_details: {
                name: "sabbir",
              },
            },
          });

        if (confirmError) {
          console.error("[confirmError]", confirmError);
          // Display an error message to the user
        } else {
          console.log("[paymentIntent]", paymentIntent);
          // Payment successful, you can redirect or show a success message
        }
      }
    } catch (err) {
      console.error("An unexpected error occurred:", err);
      // Display a general error message to the user
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
