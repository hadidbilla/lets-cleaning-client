import React, { useEffect, useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useForm } from "react-hook-form";

const AdminForm = () => {
  const [formSubmit, setFormSubmit] = useState();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    fetch("https://hidden-basin-82739.herokuapp.com/insertAdmin", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
  };
  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <Form.Group controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control
          style={{ backgroundColor: "purple" }}
          {...register("email")}
          name="email"
          type="email"
          placeholder="Enter email"
        />
      </Form.Group>
      <input className="btn btn-primary" type="submit" value="Submit" />
    </Form>
  );
};

export default AdminForm;
