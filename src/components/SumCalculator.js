import React, { useState, useEffect } from "react";

function SumCalculator() {
  const [numbers, setNumbers] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [sum, setSum] = useState(0);

  useEffect(() => {
    let isMounted = true;

    // simulate async calculation with setTimeout
    const timer = setTimeout(() => {
      if (isMounted) {
        const total = numbers.reduce((acc, num) => acc + num, 0);
        setSum(total);
      }
    }, 0);

    return () => {
      isMounted = false;
      clearTimeout(timer);
    };
  }, [numbers]);

  const handleAddNumber = () => {
    if (inputValue.trim() === "" || isNaN(inputValue)) return;
    setNumbers([...numbers, parseInt(inputValue)]);
    setInputValue("");
  };

  return (
    <div>
      <h2>➕ Sum Calculator</h2>

      <input
        type="number"
        value={inputValue}
        placeholder="Enter a number"
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button onClick={handleAddNumber}>Add Number</button>

      <h3>Numbers: {numbers.join(", ")}</h3>
      <h3>Total Sum: {sum}</h3>
    </div>
  );
}

export default SumCalculator;
