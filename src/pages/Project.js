import React from "react";
import MDList from "../Components/MDList";
const Project = (props) => {
  return (
    <div>
      <h3>안녕하세요. Project페이지 입니다.</h3>
      <MDList filePath={"post/project/list.md"} />
    </div>
  );
};

export default Project;
