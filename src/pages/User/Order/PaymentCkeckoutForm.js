import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import React from "react";
import toast from "react-hot-toast";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Button } from "../../../components/common/Button/Button";
import { Form } from "../../../components/common/Form/Form";
import {
  selectUserAccessToken,
  selectUserInfo,
} from "../../../features/auth/userAuthSelectors";
import { selectCartItems } from "../../../features/cart/cartSelectors";

export const PaymentCkeckoutForm = ({ shippingInfo }) => {
  const cartItems = useSelector(selectCartItems);
  const user = useSelector(selectUserInfo);
  const accessToken = useSelector(selectUserAccessToken);
  const stripe = useStripe();
  const elements = useElements();

  const navigate = useNavigate();

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
        `${process.env.REACT_APP_BASE_URL}/payment/create-payment-intent`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${accessToken}`,
          },
          body: JSON.stringify({ token, shippingInfo, cartItems, user }),
        }
      );
      // Handle the server response here
      if (response.status === 200) {
        toast.success("Payment SuccessFull");
        navigate("/my-order");
      } else {
        toast.error("Payment Field, Please Try Again");
      }
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      <div className="">
        <h2 className="text-2xl pb-4">Payment Details</h2>
        <CardElement />
        <Button
          type="submit"
          name="Pay Now"
          className="mt-5"
          disabled={!stripe}
        />
      </div>
    </Form>
  );
};
