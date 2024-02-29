import React from "react";
import MDList from "../Components/MDList";

const Home = (props) => {
  return (
    <div className="home">
      {/*<Markdown filePath={"post/firstpost.md"} />*/}
      <MDList filePath={"post/study/list.md"} />
      <MDList filePath={"post/story/list.md"} />
      <MDList filePath={"post/project/list.md"} />
    </div>
  );
};

export default Home;
