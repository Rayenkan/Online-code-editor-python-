import React from "react";

const PyCode = ({ sendDataToParent }) => {
  const handleChange = (e) => {
    sendDataToParent(e.target.value);
  };
  return (
    <div>
      <textarea
        className="w-full h-full p-2 border mt-10vh border-gray-300 resize-none focus:outline-none"
        style={{ width: "95%", height: "80vh", marginTop: "1vh" }}
        id=""
        placeholder="print('hello world')"
        onChange={(e) => handleChange(e)}
      />
    </div>
  );
};
export default PyCode;
