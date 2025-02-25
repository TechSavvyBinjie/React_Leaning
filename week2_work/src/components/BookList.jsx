import React, { useState } from "react";
import { Card } from "antd";
import { DeleteOutlined } from "@ant-design/icons";
import { Button } from "antd";
import BookInput from "./BookInput";
import BookDetail from "./BookDetail";
import { Form, message, Input, Modal } from "antd";
const { Meta } = Card;

const BookList = () => {
  const [books, setBooks] = useState([
    {
      author: "J.K. Rowling",
      title: "Harry Potter",
      date: "1997-06-26",
      description: "《哈利·波特》系列是关于魔法世界的奇幻冒险故事。",
      url: "https://public-cdn-oss.mosoteach.cn/avatar/2022/A0/28865c793f80fdfa5e327960961d20c8.jpg?v=1725255800&x-oss-process=style/s300x300",
    },
    {
      author: "George Orwell",
      title: "1984",
      date: "1949-06-08",
      description: "《1984》是一部描绘极权主义社会的经典反乌托邦小说。",
      url: "https://tse3-mm.cn.bing.net/th/id/OIP-C.Md86Wi2EYiKHNPldRZiD4gHaEo?w=314&h=196&c=7&r=0&o=5&dpr=1.3&pid=1.7",
    },
    {
      author: "Jane Austen",
      title: "Pride and Prejudice",
      date: "1813-01-28",
      description: "《傲慢与偏见》是一部描写爱情与婚姻的经典小说。",
      url: "https://tse2-mm.cn.bing.net/th/id/OIP-C.eweR2lVso9JKy_kO5JtznwHaEt?w=307&h=196&c=7&r=0&o=5&dpr=1.3&pid=1.7",
    },
    {
      author: "F. Scott Fitzgerald",
      title: "The Great Gatsby",
      date: "1925-04-10",
      description: "《了不起的盖茨比》是一部描绘美国梦的经典小说。",
      url: "https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png",
    },
    {
      author: "Harper Lee",
      title: "To Kill a Mockingbird",
      date: "1960-07-11",
      description: "《杀死一只知更鸟》是一部探讨种族与正义问题的小说。",
      url: "https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png",
    },
  ]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [book, setBook] = useState("");
  const showModal = (item) => {
    setIsModalOpen(true);
    setBook(item);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  // 删除书籍的函数
  const handleDelete = (index) => {
    setBooks(books.filter((_, i) => i !== index));
  };
  const handleAdd = (form) => {
    if (form.author.trim() && form.title.trim() && form.date.trim()) {
      setBooks([...books, form]);
      alert("添加成功");
      return true;
    } else {
      alert("请填写完整的书籍信息！");
      return false;
    }
  };
  const [isEditing, setIsEditing] = useState(false); // 是否处于编辑模式
  const [editForm] = Form.useForm(); // 编辑表单的 Form 实例
  const handleEdit = () => {
    setIsEditing(true);
    editForm.setFieldsValue(book); // 将当前书籍数据填充到表单
  };
  const handleSaveEdit = () => {
    editForm.validateFields().then((values) => {
      const updatedBooks = books.map((book1) =>
        book1.title === book.title ? values : book1
      );
      console.log(updatedBooks);
      setBooks(updatedBooks);
      setIsEditing(false); // 退出编辑模式
      message.success("书籍信息已更新！");
    });
  };
  return (
    <>
      <h2>书籍增添</h2>
      <BookDetail
        isModalOpen={isModalOpen}
        handleOk={handleOk}
        handleCancel={handleCancel}
        book={book}
        onEdit={handleEdit}
      />
      <BookInput handleAdd={handleAdd} />
      <h2 style={{ textAlign: "center" }}>书籍列表</h2>
      <div style={{ display: "flex", flexWrap: "wrap", gap: "16px" }}>
        {books.map((book, index) => (
          <Card
            key={index}
            hoverable
            style={{ width: 240, height: 500, margin: "8px" }}
            cover={
              <img
                onClick={() => {
                  showModal(book);
                }}
                alt="example"
                src={book.url} // 使用占位图
                style={{ width: "100%", height: "300px", objectFit: "cover" }}
              />
            }
            actions={[
              <Button
                key={index}
                type="text"
                icon={<DeleteOutlined />}
                onClick={() => {
                  handleDelete(index);
                }}
                danger
              >
                Delete
              </Button>,
            ]}
          >
            <Meta
              title={book.title}
              description={
                <div>
                  <p>Author: {book.author}</p>
                  <p>Date: {book.date}</p>
                </div>
              }
              onClick={() => {
                showModal(book);
              }}
            />
          </Card>
        ))}
      </div>
      {isEditing && (
        <Modal
          title="编辑书籍信息"
          open={isEditing}
          onOk={handleSaveEdit}
          onCancel={() => setIsEditing(false)}
        >
          <Form form={editForm} layout="vertical">
            <Form.Item
              label="书名"
              name="title"
              rules={[{ required: true, message: "请输入书名！" }]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              label="作者"
              name="author"
              rules={[{ required: true, message: "请输入作者！" }]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              label="出版日期"
              name="date"
              rules={[{ required: true, message: "请输入出版日期！" }]}
            >
              <Input />
            </Form.Item>
            <Form.Item label="简介" name="description">
              <Input.TextArea rows={4} />
            </Form.Item>
            <Form.Item label="封面链接" name="url">
              <Input />
            </Form.Item>
          </Form>
        </Modal>
      )}
    </>
  );
};

export default BookList;
