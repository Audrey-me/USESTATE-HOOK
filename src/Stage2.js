import React from "react";

const Stage2 = ({ response1, form, setForm }) => {
  return (
    <div style={{ marginTop: "40px" }}>
      {(() => {
        switch (response1) {
          default:
          case "100":
            return <p>Brace up! with determination you will excel. </p>;

          case "500":
            return <p> Congratulations! you are almost done. </p>;

          case "Excellent":
            return <p> You Rock. </p>;

          case "void":
            return <p>Oh no!! sorry for that experience. </p>;
        }
      })()}
      <button onClick={() => setForm(form - 1)}>Previous</button>
    </div>
  );
};

export default Stage2;
