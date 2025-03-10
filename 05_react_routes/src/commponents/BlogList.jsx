import React from "react";
import blogs from "../data/blog";
import { Table, Tag, Space } from "antd";
import "../styles/BlogList.css";

// 定义表格列
const columns = [
  {
    title: "Title",
    dataIndex: "title",
    key: "title",
    render: (text, record) => <a href={`/blog/${record.id}`}>{text}</a>,
  },
  {
    title: "Tags",
    dataIndex: "tags",
    key: "tags",
    render: (tags) => (
      <>
        {tags.map((tag) => (
          <Tag color="blue" key={tag}>
            {tag}
          </Tag>
        ))}
      </>
    ),
  },
  {
    title: "Action",
    key: "action",
    render: (_, record) => (
      <Space size="middle">
        <a href={`/blog/${record.id}`}>View</a>
      </Space>
    ),
  },
];

// 将 blogs 数据转换为 Table 的 dataSource 格式
const dataSource = blogs.map((blog) => ({
  key: blog.id,
  id: blog.id,
  title: blog.title,
  tags: blog.tags,
}));

const BlogList = () => {
  return (
    <div className="blog-list">
      <h2>Blog List</h2>
      <Table columns={columns} dataSource={dataSource} />
    </div>
  );
};

export default BlogList;
