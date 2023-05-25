import React from "react";
import { Button } from "../Button/index.js";

export function Form({ onAddActivity }) {
  function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);
    console.log(data);
    onAddActivity(data);
    event.target.reset();
  }

  return (
    <form onSubmit={handleSubmit}>
      <h1>Add new activity</h1>
      <label htmlFor="form-input">Name</label>
      <input name="name" id="form-input"></input>
      <label htmlFor="form-checkbox">Good weather activity</label>
      <input type="checkbox" name="isForGoodWeather" id="form-checkbox"></input>
      <Button  />
    </form>
  );
}
