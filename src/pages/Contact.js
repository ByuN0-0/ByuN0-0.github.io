import React from "react";
import "./Contact.css"; // Contact 페이지의 CSS 파일을 임포트합니다.

const Contact = () => {
  return (
    <div className="contact-container">
      <h2>Contact Me</h2>
      <div className="contact-info">
        <p>
          Email: <a href="mailto:isly7959@gmail.com">isly7959@gmail.com</a>
        </p>
        <p>
          Instagram:{" "}
          <a href="https://www.instagram.com/byun.ej/" target="_blank" rel="noreferrer">
            @byun.ej
          </a>
        </p>
        <p>
          Github:{" "}
          <a href="https://github.com/ByuN0-0" target="_blank" rel="noreferrer">
            ByuN0-0
          </a>
        </p>
        <p>Location: 대한민국 서울</p>
      </div>
    </div>
  );
};

export default Contact;
