import React from "react";
import MDList from "../Components/MDList";

const Story = (props) => {
  return (
    <div>
      <h3>안녕하세요. Story페이지 입니다.</h3>
      <MDList filePath={"post/story/list.md"} />
    </div>
  );
};

export default Story;
