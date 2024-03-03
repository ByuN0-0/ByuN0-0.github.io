import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom"; // useParams import 추가
import ReactMarkdown from "react-markdown";
import NotFound from "../pages/NotFound";

const MarkdownComponent = () => {
  const [markdownContent, setMarkdownContent] = useState("");
  const { category, link, title } = useParams(); // useParams 훅을 사용하여 URL 파라미터 추출

  useEffect(() => {
    const fetchMarkdownContent = async () => {
      try {
        const response = await fetch(`/post/${title}.md`); // 직접 URL 조합하여 사용
        const markdownText = await response.text();
        setMarkdownContent(markdownText);
      } catch (error) {
        console.error("Error fetching markdown content:", error);
      }
    };

    fetchMarkdownContent();
  }, [category, link, title]); // title이 변경될 때마다 useEffect 실행

  return (
    <div className="markdown-container">
      {markdownContent.split(" ")[0] === "<!DOCTYPE" ? (
        <NotFound />
      ) : (
        <ReactMarkdown>{markdownContent}</ReactMarkdown>
      )}
    </div>
  );
};

export default MarkdownComponent;
