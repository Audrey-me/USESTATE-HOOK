import React, { useState } from "react";

const Stage1 = ({ response, setResponse1, form, setForm, response1 }) => {
  const [error, setError] = useState("");

  function handleNext() {
    if (response1) {
      setForm(form + 1);
    } else {
      setError("ÿou have to pick an option");
    }
  }

  return (
    <>
      {response === "Student" ? (
        <div style={{ marginTop: "40px" }}>
          <label>2. What level are you currently in ?</label>

          <div style={{ marginTop: "20px" }}>
            <input
              type="radio"
              name="response"
              value={response1}
              onClick={() => setResponse1("100")}
            />
            <label>100</label>
            <br />

            <input
              type="radio"
              value={response1}
              name="response"
              onClick={() => setResponse1("200")}
            />
            <label>200</label>
            <br />

            <input
              type="radio"
              value={response1}
              name="response"
              onClick={() => setResponse1("300")}
            />
            <label>300</label>
            <br />

            <input
              type="radio"
              value={response1}
              name="response"
              onClick={() => setResponse1("400")}
            />
            <label>400</label>
            <br />

            <input
              type="radio"
              value={response1}
              name="response"
              onClick={() => setResponse1("500")}
            />
            <label>500</label>

            {error && (
              <p
                style={{
                  marginTop: "15px",
                  textAlign: "center",
                  color: "gray",
                  border: "1px solid #afba15"
                }}
              >
                {error}
              </p>
            )}
          </div>
        </div>
      ) : (
        <div>
          <label>2. How was your Undergraduate Studies? </label>
          <div style={{ marginTop: "40px" }}>
            <input
              type="radio"
              name="response"
              value={response1}
              onClick={() => setResponse1("Excellent")}
            />
            <label>Excellent</label>
            <br />

            <input
              type="radio"
              name="response"
              value={response1}
              onClick={() => setResponse1("Good")}
            />
            <label>Good</label>
            <br />

            <input
              type="radio"
              name="response"
              value={response1}
              onClick={() => setResponse1("Poor")}
            />
            <label>Poor</label>
            <br />

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
        </div>
      )}

      <div style={{ marginTop: "40px" }}>
        <button onClick={() => setForm(form - 1)}>Previous</button>
        <button onClick={handleNext}>Next</button>
      </div>
    </>
  );
};

export default Stage1;
