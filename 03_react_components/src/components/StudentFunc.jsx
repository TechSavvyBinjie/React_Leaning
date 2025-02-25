const StudentFunc = (props) => {
  return (
    <div>
      <h2>班级：{props.class}</h2>
      <h2>姓名：{props.name}</h2>
      <h2>性别：{props.gender}</h2>
      <h2>体重：{props.weight}</h2>
      <h2>身高：{props.height}</h2>
      <img src={props.avater} />
    </div>
  );
};

export default StudentFunc;
