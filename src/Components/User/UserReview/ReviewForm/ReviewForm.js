import React, { useContext, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { UserContext } from "../../../../App";
import "./ReviewForm.css";

const ReviewForm = () => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  const { handleSubmit, register } = useForm();
  const onSubmit = (data) => {
    const form = { ...data, photo: loggedInUser.photo };
    fetch("https://hidden-basin-82739.herokuapp.com/AddReview", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });
  };
  return (
    <div class="container">
      <form onSubmit={handleSubmit(onSubmit)} id="contact">
        <h4>Review</h4>
        <fieldset>
          <input
            {...register("name")}
            placeholder="Your name"
            type="text"
            tabindex="1"
            required
            autofocus
          />
        </fieldset>
        <fieldset>
          <input
            {...register("email")}
            placeholder="Your Email Address"
            type="email"
            tabindex="2"
            required
          />
        </fieldset>
        <fieldset>
          <textarea
            {...register("message")}
            placeholder="Type your message here...."
            tabindex="5"
            required
          ></textarea>
        </fieldset>
        <fieldset>
          <button type="submit" id="contact-submit" data-submit="...Sending">
            Submit
          </button>
        </fieldset>
      </form>
    </div>
  );
};

export default ReviewForm;
