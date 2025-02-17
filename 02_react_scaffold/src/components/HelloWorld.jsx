import React from "react";

class HelloWorld extends React.Component {
  render() {
    const taskList = [
      {
        id: 1,
        name: "吃饭",
        completed: true,
      },
      {
        id: 2,
        name: "睡觉",
        completed: false,
      },
      {
        id: 3,
        name: "敲代码",
        completed: false,
      },
    ];
    const number = taskList.filter((item) => item.completed == true).length;
    return (
      <div>
        <h2>完成任务：{number}</h2>
        <div>
          {taskList.map((item) => {
            return (
              <div key={item.id}>
                {item.completed ? (
                  <div style={{ color: item.completed ? "green" : "red" }}>
                    <h2>任务id: {item.id}</h2>
                    <h2>名字：{item.name}</h2>
                  </div>
                ) : (
                  <div style={{ color: "red" }}>
                    <h2>任务id:{item.id}</h2>
                    <h2>名字：{item.name}</h2>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default HelloWorld;
