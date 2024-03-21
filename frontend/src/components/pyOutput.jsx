import React from "react";

const PyOutput = (props) => {
  return (
    <div class={props.mode}> 
      <textarea
        className="mx-1 w-[98%] h-[30vh] md:min-h-[75vh] p-2 border mt-2 border-gray-300 dark:bg-gray-900 dark:text-white resize-none focus:outline-none"
        value={props.execution}
      />
    </div>
  );
};
export default PyOutput;
