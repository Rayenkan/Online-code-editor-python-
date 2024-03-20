import React from "react";

const PyOutput = (props) => {
  return (
    <div>
      <textarea
        className="w-full h-full p-2 border mt-10vh border-gray-300 resize-none focus:outline-none"
        style={{ width: "95%", height: "80vh", marginTop: "1vh" }}
        value={props.execution}
      />
    </div>
  );
};
export default PyOutput;
