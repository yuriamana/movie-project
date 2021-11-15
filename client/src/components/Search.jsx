import React from "react";

export default function Search(props) {
  return (
    <input
      className="input mb-6"
      type="text"
      placeholder={props.placeholder}
      onChange={props.handleChange}
    />
  );
}