import React from "react";
import { Link } from "react-router-dom";
import "./Breadcrumbs.css";
import { useLocation } from "react-router-dom";

function Breadcrumbs() {
  const location = useLocation();

  // 경로를 "/"로 분할하여 배열로 변환
  let pathArray = location.pathname.split("/").filter(Boolean);

  return (
    <nav className="breadcrumbs-container">
      <div className="breadcrumbs">
        <span>
          <Link to="/">Home</Link>
          {pathArray.length !== 0 && <span> /&nbsp;</span>}
        </span>
        {/* 나머지 경로 요소에 대한 링크를 생성 */}
        {pathArray.map((path, index) => (
          <span key={index}>
            {/* 현재 요소 이전까지의 경로를 만들기 위해 slice를 사용합니다. */}
            <Link to={`/${pathArray.slice(0, index + 1).join("/")}`}>{path}</Link>
            {/* 경로 요소 사이에 구분자 추가 */}
            {index < pathArray.length - 1 && " / "}
          </span>
        ))}
      </div>
    </nav>
  );
}

export default Breadcrumbs;
