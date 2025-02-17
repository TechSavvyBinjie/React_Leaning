import React from "react";

class HelloWorld extends React.Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 }; // 定义初始状态
  }
  increment = () => {
    this.setState({ count: this.state.count + 1 }); // 更新状态
  };
  render() {
    const colors = [
      "#FF5733", // 橙红色
      "#33FF57", // 绿色
      "#3357FF", // 蓝色
      "#FF33A1", // 粉红色
      "#FFD633", // 黄色
      "#33FFD6", // 青色
      "#A133FF", // 紫色
    ];
    return (
      <div>
        <h2 style={{ color: colors[this.state.count % 6] }}>
          你已经点击{this.state.count}次
        </h2>
        <button onClick={this.increment}>点击改变</button>
        <div>
          {this.state.count > 5 ? <h2>你已经成就彩虹大师</h2> : <h2></h2>}
        </div>
      </div>
    );
  }
}

export default HelloWorld;
