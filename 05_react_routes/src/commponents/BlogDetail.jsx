import React from "react";
import { useParams } from "react-router-dom";
import blogs from "../data/blog";
import "../styles/BlogDetail.css";

const BlogDetail = () => {
  const { blogIndex } = useParams();
  const blog = blogs[blogIndex];

  return (
    <div className="blog-detail">
      <h1>{blog.title}</h1>
      <img src={blog.image} alt={blog.title} className="blog-image" />
      <p className="blog-published-date">Published on: {blog.publishedDate}</p>
      <p className="blog-abstract">{blog.abstract}</p>
      <h2>{blog.content}</h2>
    </div>
  );
};

export default BlogDetail;
