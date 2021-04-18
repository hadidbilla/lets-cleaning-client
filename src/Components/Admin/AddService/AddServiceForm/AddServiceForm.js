import React, { useState } from "react";
import axios from "axios";
import { useForm } from "react-hook-form";
import "./AddServiceForm.css";
function AddServiceForm() {
  const { register, handleSubmit } = useForm();
  const [imageUrl, setImageUrl] = useState();
  const onSubmit = (data) => {
    const itemData = {
      name: data.name,
      title: data.title,
      price: data.price,
      img: imageUrl,
    };
    fetch("https://hidden-basin-82739.herokuapp.com/addService", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(itemData),
    }).then((res) => console.log("sever side", res));
  };
  const handlePicUpload = (event) => {
    const picData = new FormData();
    picData.set("key", "3db7fa98d0f1e5b21415db14460f0d44");
    picData.append("image", event.target.files[0]);
    axios
      .post("https://api.imgbb.com/1/upload", picData)
      .then(function (response) {
        setImageUrl(response.data.data.display_url);
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  return (
    <div className="row">
      <form onSubmit={handleSubmit(onSubmit)} class="row input-container">
        <div className="col-xs-12">
          <div className="styled-input wide">
            <input placeholder="name" {...register("name")} />
          </div>
        </div>
        <div className="col-xs-12">
          <div className="styled-input wide">
            <input placeholder="title" {...register("title")} />
          </div>
        </div>
        <div className="col-xs-12">
          <div className="styled-input wide">
            <input placeholder="price" {...register("price")} />
          </div>
        </div>
        <div class="col-xs-12">
          <div class="styled-input wide">
            <input name="img" onChange={handlePicUpload} type="file" />
          </div>
        </div>
        <div className="col-xs-12">
          <input class="submit-btn" type="submit" value="Add Product" />
        </div>
      </form>
    </div>
  );
}

export default AddServiceForm;
