import React, { useState } from "react";
import "./AgeCalculator.css"; // Import your CSS file

function AgeCalculator() {
  const [dob, setDob] = useState("");
  const [age, setAge] = useState(null);

  const calculateAge = () => {
    const birthDate = new Date(dob);
    const today = new Date();
    const ageInMilliseconds = today - birthDate;
    const ageInYears = ageInMilliseconds / (1000 * 60 * 60 * 24 * 365.25);
    setAge(Math.floor(ageInYears));
  };

  return (
    <div className="age-calculator">
        <h1>Age Calculator</h1>
      <h3>Enter your date of birth:</h3>
      <input
        type="date"
        size="150px"
        value={dob}
        onChange={(e) => setDob(e.target.value)}
      /><br />
      <button
        className="calculate-button"
        onClick={calculateAge}
      >
        Calculate Age
      </button>
      {age !== null && (
        <p>You are {age} years old.</p>
      )}
    </div>
  );
}

export default AgeCalculator;
