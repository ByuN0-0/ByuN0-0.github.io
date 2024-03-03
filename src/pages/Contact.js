import React from "react";
import "./Contact.css"; // Contact 페이지의 CSS 파일을 임포트합니다.
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquareGithub } from "@fortawesome/free-brands-svg-icons";
import { faSquareEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { faSquareInstagram } from "@fortawesome/free-brands-svg-icons";
const Contact = () => {
  return (
    <div className="contact-container">
      <h2>Contact Me</h2>
      <div className="contact-info">
        <p>
          <FontAwesomeIcon className="social_ico" icon={faLocationDot} /> Location: 대한민국 서울
        </p>
        <p>
          <FontAwesomeIcon className="social_ico" icon={faSquareEnvelope} /> Email:{" "}
          <a href="mailto:isly7959@gmail.com">isly7959@gmail.com</a>
        </p>
        <p>
          <FontAwesomeIcon className="social_ico" icon={faSquareInstagram} /> Instagram:{" "}
          <a href="https://www.instagram.com/byun.ej/" target="_blank" rel="noreferrer">
            @byun.ej
          </a>
        </p>
        <p>
          <FontAwesomeIcon className="social_ico" icon={faSquareGithub} /> Github:{" "}
          <a href="https://github.com/ByuN0-0" target="_blank" rel="noreferrer">
            ByuN0-0
          </a>
        </p>
        <p>
          /&lt;&gt; Baekjoon:{" "}
          <a href="https://www.acmicpc.net/user/islyee" target="_blank" rel="noreferrer">
            islyee
          </a>
        </p>
      </div>
    </div>
  );
};

export default Contact;
