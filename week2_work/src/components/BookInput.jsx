import React, { useState } from "react";
import { DatePicker, Space } from "antd";
import "./BookInput.css"; // 引入CSS文件

const BookInput = ({ handleAdd }) => {
  const [form, setForm] = useState({
    title: "",
    author: "",
    date: "",
    url: "",
    description: "",
  });

  // 处理表单提交
  const handleSubmit = (e) => {
    e.preventDefault(); // 阻止表单默认提交行为
    console.log("提交的数据：", form);
    if (handleAdd(form))
      setForm({ title: "", author: "", date: "", url: "", description: "" });
  };

  // 处理普通输入框的值变化
  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  };

  // 处理日期选择器的值变化
  const onChange = (date, dateString) => {
    setForm({
      ...form,
      date: dateString,
    });
  };

  return (
    <form onSubmit={handleSubmit} className="book-input-form">
      <div className="form-group">
        <label className="form-label">书名：</label>
        <input
          type="text"
          name="title"
          value={form.title}
          onChange={handleChange}
          className="form-input"
        />
      </div>
      <div className="form-group">
        <label className="form-label">作者：</label>
        <input
          type="text"
          name="author"
          value={form.author}
          onChange={handleChange}
          className="form-input"
        />
      </div>
      <div className="form-group">
        <label className="form-label">出版日期：</label>
        <Space direction="vertical">
          <DatePicker onChange={onChange} className="form-date-picker" />
        </Space>
      </div>
      <div className="form-group">
        <label className="form-label">封面：</label>
        <input
          type="text"
          name="url"
          value={form.url}
          onChange={handleChange}
          className="form-input"
        />
      </div>
      <div className="form-group">
        <label className="form-label">简介：</label>
        <input
          type="text"
          name="description"
          value={form.description}
          onChange={handleChange}
          className="form-input"
        />
      </div>
      <button type="submit" className="form-submit-button">
        提交
      </button>
    </form>
  );
};

export default BookInput;
