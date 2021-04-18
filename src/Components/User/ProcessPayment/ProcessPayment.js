import React from "react";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import SimpleCartForm from "../SimpleCartForm/SimpleCartForm";
const stripePromise = loadStripe(
  "pk_test_51IgjaMAMhP5kN23LqJWFhR0VRjVXyQqdd2rIN34K9bLdUud804REBRbjzJNqx6OMHj2wVh6IsGwWwGPfRnmHSZJX00A5yTGSwQ"
);
const ProcessPayment = () => {
  return (
    <Elements stripe={stripePromise}>
      <SimpleCartForm></SimpleCartForm>
    </Elements>
  );
};

export default ProcessPayment;
