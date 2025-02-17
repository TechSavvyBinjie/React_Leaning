import React from "react";

class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = { count: 0, day: 0, message: "签到" }; // 定义初始状态
  }

  increment = () => {
    this.setState({ count: this.state.count + 1 }); // 更新状态
  };
  increment1 = () => {
    this.setState({ day: this.state.day + 1, message: "已签到" }); // 更新状态
  };
  render() {
    const quotes = [
      {
        text: "人生最大的快乐是致力于一个自己认为伟大的目标。",
        author: "萧伯纳",
      },
      {
        text: "不要等待机会，而要创造机会。",
        author: "乔治·华盛顿",
      },
      {
        text: "只有那些敢于追求自己梦想的人，才能真正实现梦想。",
        author: "马丁·路德·金",
      },
      {
        text: "无论你觉得自己多么了不起，都永远不要小看别人的力量。",
        author: "苏格拉底",
      },
      {
        text: "成功并不是终点，失败也并非终结，只有勇气才是永恒。",
        author: "温斯顿·丘吉尔",
      },
      {
        text: "不要因为害怕失败而不敢尝试，因为失败是成功的垫脚石。",
        author: "托马斯·爱迪生",
      },
      {
        text: "决定一个人的伟大，不是他拥有什么，而是他是什么。",
        author: "林肯",
      },
      {
        text: "只有那些敢于冒险的人，才能真正实现自己的梦想。",
        author: "约翰·F·肯尼迪",
      },
      {
        text: "不要等待机会，而要创造机会。",
        author: "乔治·华盛顿",
      },
      {
        text: "人生最大的快乐是致力于一个自己认为伟大的目标。",
        author: "萧伯纳",
      },
      {
        text: "不要因为害怕失败而不敢尝试，因为失败是成功的垫脚石。",
        author: "托马斯·爱迪生",
      },
      {
        text: "决定一个人的伟大，不是他拥有什么，而是他是什么。",
        author: "林肯",
      },
      {
        text: "只有那些敢于冒险的人，才能真正实现自己的梦想。",
        author: "约翰·F·肯尼迪",
      },
      {
        text: "不要等待机会，而要创造机会。",
        author: "乔治·华盛顿",
      },
      {
        text: "人生最大的快乐是致力于一个自己认为伟大的目标。",
        author: "萧伯纳",
      },
      {
        text: "不要因为害怕失败而不敢尝试，因为失败是成功的垫脚石。",
        author: "托马斯·爱迪生",
      },
      {
        text: "决定一个人的伟大，不是他拥有什么，而是他是什么。",
        author: "林肯",
      },
      {
        text: "只有那些敢于冒险的人，才能真正实现自己的梦想。",
        author: "约翰·F·肯尼迪",
      },
      {
        text: "不要等待机会，而要创造机会。",
        author: "乔治·华盛顿",
      },
      {
        text: "人生最大的快乐是致力于一个自己认为伟大的目标。",
        author: "萧伯纳",
      },
      {
        text: "不要因为害怕失败而不敢尝试，因为失败是成功的垫脚石。",
        author: "托马斯·爱迪生",
      },
    ];
    let name = "杨凡";
    let work = "优质媒体作者";
    return (
      <div
        style={{
          display: "flex",
          marginLeft: "30px",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <div style={{ display: "flex" }}>
          <img
            src="https://public-cdn-oss.mosoteach.cn/avatar/2022/A0/28865c793f80fdfa5e327960961d20c8.jpg?v=1725255800&x-oss-process=style/s200x200"
            style={{
              width: "100px",
              height: "100px",
              borderRadius: "50%", // 设置为圆形
            }}
          ></img>
          <div style={{ marginLeft: "20px" }}>
            <div>{name}</div>
            <div
              style={{
                fontSize: "15px", // 字体大小
                color: "#00c3ff",
              }}
            >
              {work}
            </div>
            <div></div>
            <div>
              {quotes[this.state.count % 10].text}------
              {quotes[this.state.count % 10].author}
            </div>
            <button
              onClick={this.increment}
              style={{
                backgroundColor: "#00c3ff", // 背景颜色
                color: "#ffffff", // 字体颜色
                border: "none", // 移除边框
                borderRadius: "5px", // 圆角
                padding: "10px 20px", // 内边距
                cursor: "pointer", // 鼠标悬停时显示指针
                boxShadow: "0 2px 4px rgba(0, 0, 0, 0.2)", // 阴影
                outline: "none", // 移除焦点时的边框
                transition: "background-color 0.3s ease", // 平滑过渡效果
              }}
            >
              换一条
            </button>
          </div>
        </div>
        <button onClick={this.increment1}>{this.state.message}</button>
        <h2 style={{ marginRight: "50px" }}>已经签到 第 {this.state.day} 天</h2>
      </div>
    );
  }
}

export default MyComponent;
