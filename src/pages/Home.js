import React from "react";
import Markdown from "../Components/MarkDown";
import { Link } from "react-router-dom";
import ReactMarkdown from "react-markdown";

const Home = (props) => {
  return (
    <div>
      <h3>안녕하세요. Home페이지 입니다.</h3>
      <ul>
        <Link to="/product/1">
          <li>1번상품</li>
        </Link>
        <Link to="/product/2">
          <li>2번상품</li>
        </Link>
      </ul>
      <Markdown filePath={"post/firstpost.md"} />
      <ReactMarkdown>
        "# Hello, Markdown!\n\nThis is a **React** component rendering Markdown.";
      </ReactMarkdown>
    </div>
  );
};

export default Home;
