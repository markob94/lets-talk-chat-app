import React, { useState } from "react";
import "./Input.css";

const Input = (props) => {
  // State to keep track of the input text
  const [text, setText] = useState("");

  // Handler for input change event
  const onChange = (e) => {
    setText(e.target.value);
  };

  // Handler for form submission
  const onSubmit = (e) => {
    e.preventDefault();
    // Clear the input text and pass it to the parent component
    setText("");
    props.onSendMessage(text);
  };

  return (
    <div className="Input">
      <form onSubmit={onSubmit}>
        <input
          onChange={onChange}
          value={text}
          type="text"
          placeholder="Enter your message and press ENTER"
          autoFocus={true}
        />
        <button disabled={!text}>Send</button>
      </form>
    </div>
  );
};

export default Input;
