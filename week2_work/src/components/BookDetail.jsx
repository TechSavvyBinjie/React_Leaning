import React, { useState } from "react";
import { Button, Modal } from "antd";
import { Image } from "antd";
const BookDetail = ({ isModalOpen, handleCancel, handleOk, book, onEdit }) => {
  return (
    <>
      <Modal
        title="图书的详情信息"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={[
          <Button
            key="edit"
            type="primary"
            onClick={onEdit}
            style={{ float: "left" }}
          >
            编辑
          </Button>,
          <Button key="cancel" onClick={handleCancel}>
            取消
          </Button>,
          <Button key="ok" type="primary" onClick={handleOk}>
            确认
          </Button>,
        ]}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          {/* 封面图片 */}
          <Image
            src={book.url}
            alt="Book Cover"
            width={200}
            style={{ marginBottom: 20 }}
          />

          {/* 书籍信息 */}
          <div style={{ textAlign: "center" }}>
            <h3>{book.title}</h3>
            <p>
              <strong>作者：</strong>
              {book.author}
            </p>
            <p>
              <strong>出版日期：</strong>
              {book.date}
            </p>
          </div>

          {/* 书籍简介 */}
          <div style={{ marginTop: 20, textAlign: "left", width: "100%" }}>
            <h4>简介：</h4>
            <p>{book.description || "暂无简介信息"}</p>
          </div>
        </div>
      </Modal>
    </>
  );
};
export default BookDetail;
