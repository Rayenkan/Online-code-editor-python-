import React, { useState } from "react";

const PyCode = ({ mode, sendDataToParent }) => {
  const [code, setCode] = useState("");
  const handleChange = (e) => {
    setCode(e.target.value);
    sendDataToParent(e.target.value);
  };

  const handleTab = (event) => {
    const { selectionStart, selectionEnd } = event.target;
    if (event.key === "Tab") {
      event.preventDefault();
      const newCode =
        code.substring(0, selectionStart) + "  " + code.substring(selectionEnd);
      setCode(newCode);
      sendDataToParent(newCode);
    } else if (event.key === "Enter" && code[selectionStart - 1] === ":") {
      event.preventDefault();
      const newCode =
        code.substring(0, selectionStart) +
        "\n       " +
        code.substring(selectionEnd);
      setCode(newCode);
      sendDataToParent(newCode);
    }
  };

  return (
    <div class={mode}>
      <textarea
        className="mx-1 w-[98%] h-[30vh] md:min-h-[75vh] resize-none  p-2 border mt-2 border-gray-300 dark:bg-gray-900 dark:text-white  focus:outline-none"
        onChange={handleChange}
        onKeyDown={handleTab}
        value={code}
      />
    </div>
  );
};

export default PyCode;
