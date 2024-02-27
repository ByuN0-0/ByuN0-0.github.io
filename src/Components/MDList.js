import React, { useState, useEffect } from "react";
import PostSummary from "./PostSummary";

const MDList = ({ filePath }) => {
  const [markdownContent, setMarkdownContent] = useState("");
  const [postList, setPostList] = useState([]);
  let pathTag = filePath.split("/")[1];
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
    markdownContent.split("\n").forEach(async (line) => {
      try {
        if (line === "");
        else {
          const response = await fetch(`post/${pathTag}/${line}.md`);
          const markdownText = await response.text();
          let parts = markdownText.split("\n");
          let title = parts[0].split(": ")[1];
          let date = parts[1].split(": ")[1];
          let tag = parts[2].split(": ")[1];
          setPostList((postList) => [
            ...postList,
            <PostSummary key={title} title={title} date={date} tag={tag} />,
          ]);
        }
      } catch (error) {
        console.error("Error fetching markdown content:", error);
      }
    });
  }, [pathTag, markdownContent]);

  return (
    <div className="markdown-container">
      {/*<ReactMarkdown>{allMarkdownContent}</ReactMarkdown>*/}
      {postList}
    </div>
  );
};

export default MDList;
