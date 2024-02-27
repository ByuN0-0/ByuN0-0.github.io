import React from "react";
import MDList from "../Components/MDList";

const Study = (props) => {
  return (
    <div>
      <h3>안녕하세요. Study페이지 입니다.</h3>
      <MDList filePath={"post/study/list.md"} />
    </div>
  );
};

export default Study;
