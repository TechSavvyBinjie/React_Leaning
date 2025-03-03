import { useEffect, useState } from "react";

const FetchDate = () => {
  const [data, setData] = useState(null);
  const [error, seError] = useState(null);
  useEffect(() => {
    //执行请求，组件加载完成后执行一次
    fetch("https://api.xygeng.cn/one")
      .then((response) => {
        if (!response.ok) {
          throw new Error("网络请求错误");
        }
        return response.json();
      })
      .then((json) => {
        if (json.code == 200 && json.data) {
          setData(json.data);
        } else {
          seError(json.Error || "获取失败");
        }
      });
  }, []);
  if (error) return <p>{error}</p>;
  if (!data) return <p>数据正在加载中</p>;
  return (
    <div>
      <p>来源：{data.origin}</p>
      <p>作者：{data.name}</p>
      <p>标签：{data.tag}</p>
      <p>内容：{data.content}</p>
    </div>
  );
};

export default FetchDate;
