import { useState, useEffect } from "react";

const NewTime = () => {
  const [time, setTime] = useState(new Date().toLocaleTimeString());
  useEffect(() => {
    setTimeout(() => {
      setTime(new Date().toLocaleTimeString());
    }, 1000);
  }, [time]);
  return (
    <div>
      <h1>{time}</h1>
    </div>
  );
};

export default NewTime;
