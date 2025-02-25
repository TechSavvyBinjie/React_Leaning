const Cards1 = ({ children, url }) => {
  return (
    <div
      style={{
        width: "200px",
        height: "325px",
        marginLeft: "20px",
        borderRadius: "10px", // 设置圆角
        border: "1px solid #ccc", // 设置细线描边，颜色为浅灰色
      }}
    >
      <h3 style={{ textAlign: "center" }}>{children[0]}</h3>
      <div
        style={{
          backgroundImage: `url(${url})`, // 设置背景图片
          backgroundSize: "cover", // 背景图片覆盖整个区域
          backgroundPosition: "center", // 背景图片居中
          height: "200px", // 设置高度（根据需要调整）
          width: "100%", // 设置宽度（根据需要调整）
          display: "flex", // 使内容居中
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {children[1]}
      </div>
      <div
        style={{ display: "flex", justifyContent: "center", marginTop: "5px" }}
      >
        <button
          style={{
            backgroundColor: "#f0f0f0", // 粉色背景
            color: "white", // 文字颜色为白色
            border: "none", // 移除边框
            borderRadius: "5px", // 圆角按钮
            padding: "10px 20px", // 内边距
            cursor: "pointer", // 鼠标悬停时显示手型
            boxShadow: "0 2px 4px rgba(0, 0, 0, 0.2)", // 添加阴影
            outline: "none", // 移除焦点时的轮廓
            fontSize: "16px", // 字体大小
          }}
        >
          {children[2]}
        </button>
      </div>
    </div>
  );
};

export default Cards1;
