import React, { useContext, useEffect, useState } from "react";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import { useParams } from "react-router";
import { UserContext } from "../../../App";
import "./SimpleCartForm.css";

const SimpleCartForm = () => {
  const { id } = useParams();
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  const [selectedService, setSelectedService] = useState();
  const [bookService, setBookService] = useState({});
  const [submitForm, setSubmitForm] = useState(false);
  useEffect(() => {
    fetch(`https://hidden-basin-82739.herokuapp.com/services/${id}`)
      .then((res) => res.json())
      .then((data) => setSelectedService(data));
  }, [id]);

  const stripe = useStripe();
  const elements = useElements();

  const handlePayment = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }
    const cardElement = elements.getElement(CardElement);
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card: cardElement,
    });

    if (error) {
      console.log("[error]", error);
    } else {
      const paymentDetails = {
        name: loggedInUser.name,
        email: loggedInUser.email,
        title: selectedService.title,
        description: selectedService.description,
        img: selectedService.img,
        price: selectedService.price,
        payment: paymentMethod,
        status: "pending",
      };
      setBookService(paymentDetails);
      setSubmitForm(true);
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    fetch("https://hidden-basin-82739.herokuapp.com/addBookService", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(bookService),
    });
  };

  return (
    <form onSubmit={handleSubmit} class="contact100-form validate-form">
      <span class="contact100-form-title">Send Us A Message</span>

      <div
        class="wrap-input100 validate-input"
        data-validate="Please enter your name"
      >
        <input
          class="input100"
          type="text"
          value={loggedInUser.name}
          name="name"
          placeholder={loggedInUser.name}
        />
        <span class="focus-input100"></span>
      </div>

      <div
        class="wrap-input100 validate-input"
        data-validate="Please enter your email: e@a.x"
      >
        <input
          class="input100"
          type="text"
          value={loggedInUser.email}
          name="email"
          placeholder={loggedInUser.email}
        />
        <span class="focus-input100"></span>
      </div>

      <div
        class="wrap-input100 validate-input"
        data-validate="Please enter your phone"
      >
        <input
          class="input100"
          type="text"
          name="title"
          placeholder={selectedService?.title}
          value={selectedService?.title}
        />
        <span class="focus-input100"></span>
      </div>
      {submitForm ? (
        <input className="btn btn-primary mt-4" type="submit" value="Submit " />
      ) : (
        <div class=" mt-3">
          <CardElement />
          {
            <button
              onClick={handlePayment}
              className="btn btn-primary mt-4"
              type="submit"
              disabled={!stripe}
            >
              Pay
            </button>
          }
        </div>
      )}
    </form>
  );
};
export default SimpleCartForm;
