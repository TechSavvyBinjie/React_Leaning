const Cards1 = ({ children }) => {
  return (
    <div
      style={{
        marginLeft: "20px",
        borderRadius: "10px", // 设置圆角
        border: "1px solid #ccc", // 设置细线描边，颜色为浅灰色
      }}
    >
      <div>{children[0]}</div>
      <div style={{ display: "flex" }}>
        <div>{children[1]}</div>
        <div>
          <div>{children[2]}</div>
        </div>
      </div>
    </div>
  );
};
export default Cards1;
