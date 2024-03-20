import { useState } from "react";
import axios from "axios";
import "./App.css";
import PyCode from "./components/pyCode";
import PyOutput from "./components/pyOutput";

function App() {
  const [code, setCode] = useState("");
  const [execution, setExecution] = useState("");
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
    <div className="App">
      <table
        className="ml-[2%] w-full mt-7"
        width={"100%"}
        style={{ marginTop: "28px", border: "solid" }}
        border={1}
      >
        <tr>
          <td>
            <div class="flex m-auto items-center">
              <p className="text-left pl-5 text-xl ">Your Code</p>{" "}
              <button
                class="m-auto my-1 cursor-pointer transition-all bg-blue-500 text-white px-6 py-1 rounded-lg border-blue-600 border-b-[2px] hover:brightness-110  hover:border-b-[2px]active:border-b-[2px] active:brightness-90 active:translate-y-[1px]"
                onClick={handleCode}
              >
                Run
              </button>{" "}
            </div>
          </td>
          <td className="text-left pl-5 text-xl"> Output</td>
        </tr>
        <tr>
          <td>
            <PyCode sendDataToParent={handleData} />
          </td>
          <td>
            <PyOutput execution={execution} />
          </td>
        </tr>
      </table>
    </div>
  );
}

export default App;
