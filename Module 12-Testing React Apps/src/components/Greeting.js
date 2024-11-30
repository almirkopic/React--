import React, { useState } from "react";
import Output from "./Output";

function Greeting() {
  const [changedText, setChangedText] = useState(false);

  const setChangedTextHandler = () => {
    setChangedText(true);
  };

  return (
    <div>
      <h1>Hello World!</h1>
      {!changedText && <Output>Its good to see you</Output>}
      {changedText && <Output>Changed!</Output>}
      <button onClick={setChangedTextHandler}>Change Text!</button>
    </div>
  );
}

export default Greeting;
