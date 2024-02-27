import React from "react";
import { Link } from "react-router-dom";
import "./PostSummary.css";

const PostSummary = ({ title, date, tag }) => {
  return (
    <Link to={`/${tag}/${title}`} className="post-summary">
      <h2>{title}</h2>
      <p>Date: {date}</p>
      <p>Tag: {tag}</p>
    </Link>
  );
};

export default PostSummary;
