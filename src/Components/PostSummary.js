import React from "react";
import { Link } from "react-router-dom";
import "./PostSummary.css";

const PostSummary = ({ title, date, link }) => {
  let linklist = link.split(", ");
  let strlink = "/";
  if (linklist.length > 1) {
    linklist.forEach((word) => {
      strlink += word + "/";
    });
  } else {
    strlink = link;
  }
  strlink = strlink + title;
  return (
    <Link to={strlink} className="post-summary">
      <h2>{title}</h2>
      <p>Date: {date}</p>
      <p>link: {link}</p>
    </Link>
  );
};

export default PostSummary;
