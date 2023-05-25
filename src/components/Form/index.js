import React from "react";
import { Button } from "../Button/index.js"

export function Form() {
  return (
    <form>
      <h1>Add new activity</h1>
      <label htmlFor="form-input">Name</label>
      <input name ="form-input" id="form-input"></input>
      <label htmlFor="form-input">Good weather activity</label>
      <input type="checkbox"></input>
      <Button />

    </form>
  );
}
