import React from "react";
import "./TOC.css";
function TOC() {
  return (
    <div className="toc-container">
      <div className="toc">
        <img className="author_avatar" src="img/profileimg.png" alt="profile img" />
        <div className="author_content">
          <div className="author_name">비연</div>
          <div className="author_bio">화이팅</div>
        </div>
        <div className="author_social">지역이메일깃허브인스타</div>
        <ol>
          <li>Study</li>
          <li>Tech</li>
        </ol>
      </div>
    </div>
  );
}

export default TOC;
