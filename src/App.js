import React, { useState } from "react";
import Uncontrolled from "./Uncontrolled"

export default function App() {
  const [inputValue, setInputValue] = useState("saloni");
  const handleInputChange = (e) => {
    setInputValue(e.target.value)
  }
  const handleSubmitButton = () => {
    alert(inputValue);
  };
  return (
    <div className="App">
      <input onChange={handleInputChange} />
      <input type="submit" value="submit" onClick={handleSubmitButton}/>
      <div>{inputValue}</div>
      <Uncontrolled/>
    </div>
  );
}