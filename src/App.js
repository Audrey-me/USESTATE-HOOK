import React, { useState, useEffect } from "react";
import Stage0 from "./Stage0.js";
import Stage1 from "./Stage1.js";
import Stage2 from "./Stage2.js";

const App = () => {
  //the form state handles the different stages on switch
  const [form, setForm] = useState(0);
  // stage 0
  const [response, setResponse] = useState("");
  //stage 1
  const [response1, setResponse1] = useState("");
  // stage 2
  const [response2, setResponse2] = useState("");

  // usually we would put a function inside useEffect to trigger
  // whenever a specified thing changes,but if you leave the function empty it
  // will just re-render the component or state
  // here it is re-rendering the form state

  useEffect(() => {}, [form]);

  return (
    <div style={{ textAlign: "center" }}>
      <h1> Learning Hooks in react</h1>
      <p> rendering different forms based on users input.</p>

      {/* the form switches */}
      {/* using immediate invoked function IIFE  */}

      {(() => {
        switch (form) {
          default:
          case 0:
            return (
              <Stage0
                form={form}
                setForm={setForm}
                response={response}
                setResponse={setResponse}
              />
            );

          case 1:
            return (
              <Stage1
                form={form}
                setForm={setForm}
                response={response}
                response1={response1}
                setResponse1={setResponse1}
              />
            );

          case 2:
            return (
              <Stage2
                form={form}
                setForm={setForm}
                response1={response1}
                response2={response2}
                setResponse2={setResponse2}
              />
            );
        }
      })()}
    </div>
  );
};

export default App;
