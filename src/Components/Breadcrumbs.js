import React from "react";
import "./Breadcrumbs.css";
import { useLocation } from "react-router-dom";

function Breadcrumbs() {
  const location = useLocation();

  // 경로를 "/"로 분할하여 배열로 변환
  let pathArray = location.pathname.split("/").filter(Boolean);
  if (pathArray[0] !== "home") {
    pathArray.unshift("home"); // "home" 요소를 배열의 맨 앞에 추가합니다.
  }
  return (
    <nav className="breadcrumbs-container">
      <div className="breadcrumbs">
        {/* 각 경로 요소에 대한 링크를 생성 */}
        {pathArray.map((path, index) => (
          <span key={index}>
            <a href={`/${path}`}>{path}</a>
            {/* 경로 요소 사이에 구분자 추가 */}
            {index < pathArray.length - 1 && " / "}
          </span>
        ))}
      </div>
    </nav>
  );
}

export default Breadcrumbs;
