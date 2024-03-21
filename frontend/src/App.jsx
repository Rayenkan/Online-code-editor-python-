// App.js

import React, { useState } from "react";
import axios from "axios";
import "./App.css";
import PyCode from "./components/pyCode";
import PyOutput from "./components/pyOutput";

function App() {
  const [code, setCode] = useState("");
  const [execution, setExecution] = useState("");
  const [mode, setMode] = useState("light");

  const handleMode = () => {
    setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
  };

  const handleData = (data) => {
    setCode(data);
  };

  const handleCode = () => {
    axios
      .get("http://127.0.0.1:5000/Output", {
        params: {
          data: code,
        },
      })
      .then((res) => {
        setExecution(res.data.execution);
      });
  };

  return (
    <div
      className={` flex flex-col ${
        mode === "dark" ? "bg-gray-900 text-white" : "bg-white text-black"
      }`}
    >
      <div>
        <p className="text-3xl md:text-4xl ml-2 pt-3 text-blue-600 font-semibold">
          Python Compiler
        </p>
        <hr className="mt-4 shadow-2xl bg-gray-600 shadow-black dark:shadow-white" />
      </div>
      <div className="flex-grow flex flex-col md:flex-row">
        <div className="flex-grow justify-center items-center">
          <span className="absolute md:mt-5 text-2xl lg:text-3xl ml-2 mt-4  dark:text-white font-medium">
            Your Code
          </span>
          <div className="flex justify-end mt-3 mr-5 ">
            <button
              className={`px-6 py-2 rounded-lg ${
                mode === "dark"
                  ? "bg-gray-300 text-gray-900"
                  : "bg-blue-500 text-white"
              } 
            border border-transparent hover:bg-opacity-75 focus:outline-none`}
              onClick={handleCode}
            >
              Run
            </button>
            <button
              className={`ml-4 p-2 rounded-full ${
                mode === "dark" ? "text-gray-500" : "text-yellow-500"
              } 
            hover:bg-blue-600 dark:hover:bg-gray-700 focus:outline-none`}
              onClick={handleMode}
            >
              {mode === "dark" ? (
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"></path>
                </svg>
              ) : (
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
                  ></path>
                </svg>
              )}
            </button>
          </div>
          <PyCode  sendDataToParent={handleData} mode={mode} />
        </div>
        <div className="flex-grow">
          <p className="text-2xl md:mt-5 lg:text-3xl ml-2 mt-4  dark:text-white font-medium">
            Output
          </p>
          <PyOutput execution={execution} mode={mode} />
        </div>
      </div>
    </div>
  );
}

export default App;
