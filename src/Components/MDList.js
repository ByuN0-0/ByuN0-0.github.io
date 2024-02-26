import React, { useState, useEffect } from "react";
import ReactMarkdown from "react-markdown";

const MDList = ({ filePath }) => {
  const [markdownContent, setMarkdownContent] = useState("");
  const [allMarkdownContent, setAllMarkdownContent] = useState("");

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

  useEffect(() => {
    let allMarkdownText = "";
    markdownContent.split("\n").forEach(async (line) => {
      try {
        if (line === "");
        else {
          const response = await fetch(`post/${line}.md`);
          const markdownText = await response.text();
          allMarkdownText += markdownText;
          setAllMarkdownContent(allMarkdownText);
        }
      } catch (error) {
        console.error("Error fetching markdown content:", error);
      }
    });
  }, [markdownContent]);

  return (
    <div className="markdown-container">
      <ReactMarkdown>{allMarkdownContent}</ReactMarkdown>
    </div>
  );
};

export default MDList;
