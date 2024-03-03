import React from "react";
import MDList from "../Components/MDList";

const Home = (props) => {
  return (
    <div className="home">
      {/*<Markdown filePath={"post/firstpost.md"} />*/}
      <MDList />
    </div>
  );
};

export default Home;
