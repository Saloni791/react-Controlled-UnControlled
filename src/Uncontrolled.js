import React, { useRef, useState } from "react";

export default function Uncontrolled() {
  const inputRef = useRef("saloni");
  const [name, setName] = useState("saloni")

  const handleSubmitButton = () => {
    setName(inputRef.current.value)
  };
  return (
    <div className="App">
      <input type="text" ref={inputRef} />
      <input type="submit" value="submit" onClick={handleSubmitButton} />
      <div>{name}</div>
    </div>
  );
}