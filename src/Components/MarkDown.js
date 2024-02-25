import React, { useState, useEffect } from "react";
import ReactMarkdown from "react-markdown";

const MarkdownComponent = ({ filePath }) => {
  const [markdownContent, setMarkdownContent] = useState("");

  useEffect(() => {
    const fetchMarkdownContent = async () => {
      try {
        const response = await fetch(filePath);
        const markdownText = await response.text();
        setMarkdownContent(markdownText);
      } catch (error) {
        console.error("Error fetching markdown content:", error);
      }
    };

    fetchMarkdownContent();
  }, [filePath]);

  return (
    <div className="markdown-container">
      <ReactMarkdown>{markdownContent}</ReactMarkdown>
    </div>
  );
};

export default MarkdownComponent;
