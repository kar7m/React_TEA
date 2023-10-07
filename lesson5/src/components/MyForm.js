import React, { useCallback, useState } from "react";

export default function MyForm(props) {
  const [inputValue, setInputValue] = useState("");

  const submitBtn = useCallback(
    (ev) => {
      ev.preventDefault();
      props.onSubmit(inputValue);
      setInputValue("");
    },
    [inputValue, props]
  );

  return (
    <div>
      <form onSubmit={submitBtn}>
        <input
          placeholder="Enter Your Task"
          className="task__input"
          type="text"
          onChange={(ev) => setInputValue(ev.target.value)}
          value={inputValue}
        />
        <button className="add__item__btn" type="submit">Add Item</button>
      </form>
    </div>
  );
}
