import React from "react";
import "./Form.css";
import { Button } from "../Button/index.js";

export function Form({ onAddActivity }) {
  function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);
    // console.log(data);
    const inputObject = {
      name: data.name,
      isForGoodWeather: !!data.isForGoodWeather,
    };
    onAddActivity(inputObject);
    event.target.reset();
    event.target.elements.name.focus();
  }

  return (
    <form className="form" onSubmit={handleSubmit}>
      <h1>Add new activity</h1>
      <label htmlFor="form-input">Name</label>
      <input name="name" id="form-input" autoFocus></input>
      <label htmlFor="form-checkbox">Good weather activity</label>
      <input type="checkbox" name="isForGoodWeather" id="form-checkbox"></input>
      <Button />
    </form>
  );
}
