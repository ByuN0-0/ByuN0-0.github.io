import React from "react";
import MDList from "../Components/MDList";

const Home = (props) => {
  return (
    <div>
      <h3>안녕하세요. Home페이지 입니다.</h3>
      {/*<Markdown filePath={"post/firstpost.md"} />*/}
      --------- Home.js MDList test ---------
      <MDList filePath={"post/study/list.md"} />
      <MDList filePath={"post/story/list.md"} />
      --------- Home.js MDList test ---------
    </div>
  );
};

export default Home;
