import React, { useState } from "react";

const PyCode = ({mode ,  sendDataToParent }) => {
  const [code, setCode] = useState("");
  const handleChange = (e) => {
    setCode(e.target.value);
    sendDataToParent(e.target.value);
  };

  const handleTab = (event) => {
    if (event.key === "Tab") {
      event.preventDefault();
      const { behindCurson, aheadCursor } = event.target;
      const newCode =
        code.substring(0, behindCurson) +
        "  " +
        code.substring(aheadCursor);
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
      />
    </div>
  );
};

export default PyCode;
