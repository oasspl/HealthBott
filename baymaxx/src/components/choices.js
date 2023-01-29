import React from "react";
import { v4 as uuidv4 } from "uuid";

export default function Choices({ options, handleUserChoice }) {
  const choices = options ? options : ["yes", "no"];
  const btns = choices.map((op) => {
    return (
      <div key={uuidv4()}>
        <input
          type="radio"
          className="btn-check"
          name="btnradio"
          id={op}
          value={op}
          autoComplete="off"
          onChange={(e) => handleUserChoice(e.target.value)}
        />
        <label className="btn btn-outline-primary" htmlFor={op}>
          {op}
        </label>
      </div>
    );
  });

  return (
    <>
      <div className="row">
        <div
          className="btn-group"
          role="group"
          aria-label="Basic radio toggle button group"
        >
          {btns}
        </div>
      </div>
    </>
  );
}
