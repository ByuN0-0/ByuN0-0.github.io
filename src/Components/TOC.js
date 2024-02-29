import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquareGithub } from "@fortawesome/free-brands-svg-icons";
import { faSquareEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";

import "./TOC.css";
function TOC() {
  const [showTOC, setShowTOC] = useState(true);

  useEffect(() => {
    const handleResize = () => {
      setShowTOC(window.innerWidth > 800); // 화면 너비가 800px 이상이면 TOC 표시
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="toc-container" style={{ display: showTOC ? "block" : "none" }}>
      <div className="toc">
        <div className="author">
          <Link to="/about">
            <img className="author_avatar" src="img/profileimg.png" alt="profile img" />
          </Link>
          <div className="author_content">
            <Link to="/about" className="author_name">
              비연
            </Link>
            <div className="author_bio">화이팅</div>
          </div>
        </div>
        <div className="author_social">
          <div>
            <FontAwesomeIcon className="social_ico" icon={faLocationDot} />
            &nbsp;Seoul, Korea
          </div>
          <div>
            <FontAwesomeIcon className="social_ico" icon={faSquareEnvelope} />
            &nbsp;isly7959@gmail.com
          </div>
          <div>
            <a href="https://github.com/ByuN0-0" target="_blank" rel="noreferrer">
              <FontAwesomeIcon className="social_ico" icon={faSquareGithub} />
              &nbsp;github.com/ByuN0-0
            </a>
          </div>
          <div></div> {/*추가*/}
        </div>
        <nav className="nav_list">
          <ul className="nav_items">
            <li>
              <div className="sub_title">
                <Link to="/study">Study</Link>
              </div>
              <ul>
                <Link to="/study/machinelearning">머신러닝</Link>
              </ul>
              <ul>
                <Link to="/study/it">IT지식</Link>
              </ul>
            </li>
            <li>
              <div className="sub_title">
                <Link to="/project">Project</Link>
              </div>
            </li>
            <li>
              <div className="sub_title">
                <Link to="/story">Story</Link>
              </div>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default TOC;
