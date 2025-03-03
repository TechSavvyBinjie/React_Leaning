import { useState } from "react";

const TableList = () => {
  const [list, setIsList] = useState([{ name: "吃饭", state: "true" }]);
  const [task, setTask] = useState("");
  const change = (e) => {
    setTask(e.target.value);
  };
  const add = () => {
    setIsList([...list, { name: task, state: false }]);
  };

  return (
    <div>
      <input onChange={change}></input>
      <button onClick={add}>添加</button>
      <ul>
        {list.map((item, index) => (
          <li
            key={index}
            style={{
              textDecoration: item.state ? "line-through" : "none",
            }}
          >
            {item.name}——{item.state ? "完成" : "没完成"}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TableList;
