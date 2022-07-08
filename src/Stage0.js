import React, { useState } from "react";

const Stage0 = ({ form, setForm, response, setResponse }) => {
  // setting error state to check for errors in our component
  const [error, setError] = useState("");

  function handleNext() {
    if (response) {
      setForm(form + 1);
    } else {
      setError("ÿou have to pick an option");
    }
  }
  return (
    <div>
      <label>1. Are you a Graduate or a Student?</label>
      <div style={{ marginTop: "40px" }}>
        <input
          type="radio"
          name="response"
          value={response}
          onClick={() => setResponse("graduate")}
        />
        <label>Graduate</label>
        <br />

        <input
          type="radio"
          name="response"
          value={response}
          onClick={() => setResponse("Student")}
        />
        <label>Student</label>

        {error && (
          <p
            style={{
              marginTop: "15px",
              padding: "10px",
              textAlign: "center",
              color: "gray",
              border: "1px solid #afba15"
            }}
          >
            {error}
          </p>
        )}
      </div>
      <div style={{ marginTop: "40px" }}>
        <button onClick={() => setForm(form - 1)}>Previous</button>
        <button onClick={handleNext}>Next</button>
      </div>
    </div>
  );
};

export default Stage0;
