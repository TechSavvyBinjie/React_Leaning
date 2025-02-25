import RegistForm from "./RegistForm";
import { useState } from "react";

const RegistPage = () => {
  const [inputValue, setInputValue] = useState("");
  const [inputValue2, setInputValue2] = useState("");
  const handleInputChange = (newValue, newValue1) => {
    setInputValue(newValue);
    setInputValue2(newValue1);
  };

  return (
    <>
      <RegistForm onInputChange3={handleInputChange} />
      <h1>提交的数据</h1>
      <h2>输入的姓名{inputValue}</h2>
      <h2>输入的邮箱{inputValue2}</h2>
    </>
  );
};
export default RegistPage;
