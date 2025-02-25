import { useState } from "react";
const RegistForm = ({ onInputChange3 }) => {
  const [inputValue8, setInputValue8] = useState("");
  const [inputValue9, setInputValue9] = useState("");
  const onInputChange1 = (newValue) => {
    console.log("触发了一次");
    setInputValue8(newValue);
  };
  const onInputChange2 = (newValue) => {
    setInputValue9(newValue);
  };
  const onInputChange = (inputValue, inputValue2) => {
    console.log("触发了一次1111");
    onInputChange3(inputValue, inputValue2);
  };
  return (
    <div>
      姓名：
      <input
        type="text"
        onChange={(e) => onInputChange1(e.target.value)}
        placeholder="请输入..."
      />
      邮箱：
      <input
        type="text"
        onChange={(e) => onInputChange2(e.target.value)}
        placeholder="请输入..."
      />
      <button onClick={() => onInputChange(inputValue8, inputValue9)}>
        提交
      </button>
    </div>
  );
};
export default RegistForm;
