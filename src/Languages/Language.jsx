import React from "react";
import "./Language.css";
const Language = () => {
  return (
    <>
      <div className="lang_section">
        <div className="lang_main_title_div">
          <span className="lang_main_title">Languages Known</span>
        </div>
        <div className="container cont">
          <div className="lang_title">
            <span>HTML</span>
          </div>
          <div class="progress">
            <div
              class="progress-bar"
              role="progressbar"
              style={{ width: "80%", backgroundColor: "orangered" }}
              aria-valuenow="25"
              aria-valuemin="0"
              aria-valuemax="100"
            ></div>
          </div>
          <div className="lang_title">
            <span>REACTJS</span>
          </div>
          <div class="progress">
            <div
              class="progress-bar"
              role="progressbar"
              style={{ width: "60%", backgroundColor: "skyblue" }}
              aria-valuenow="50"
              aria-valuemin="0"
              aria-valuemax="100"
            ></div>
          </div>
          <div className="lang_title">
            <span>Javascript</span>
          </div>
          <div class="progress">
            <div
              class="progress-bar bg-warning"
              role="progressbar"
              style={{ width: "65%" }}
              aria-valuenow="75"
              aria-valuemin="0"
              aria-valuemax="100"
            ></div>
          </div>
          <div className="lang_title">
            <span>CSS</span>
          </div>
          <div class="progress">
            <div
              class="progress-bar bg-progress"
              role="progressbar"
              style={{ width: "70%" }}
              aria-valuenow="100"
              aria-valuemin="0"
              aria-valuemax="100"
            ></div>
          </div>
          <div className="lang_title">
            <span>BOOTSTRAP</span>
          </div>
          <div class="progress">
            <div
              class="progress-bar"
              role="progressbar"
              style={{ width: "80%", backgroundColor: "purple" }}
              aria-valuenow="100"
              aria-valuemin="0"
              aria-valuemax="100"
            ></div>
          </div>
          <div className="lang_title">
            <span>PHP</span>
          </div>
          <div class="progress">
            <div
              class="progress-bar"
              role="progressbar"
              style={{
                width: "75%",
                backgroundColor: "rgba(196, 30, 196, 0.548)",
              }}
              aria-valuenow="100"
              aria-valuemin="0"
              aria-valuemax="100"
            ></div>
          </div>
          <div className="lang_title">
            <span>JAVA</span>
          </div>
          <div class="progress">
            <div
              class="progress-bar"
              role="progressbar"
              style={{ width: "55%", backgroundColor: "#f06007" }}
              aria-valuenow="100"
              aria-valuemin="0"
              aria-valuemax="100"
            ></div>
          </div>
          <div className="lang_title">
            <span>PYTHON</span>
          </div>
          <div class="progress">
            <div
              class="progress-bar"
              role="progressbar"
              style={{ width: "40%", backgroundColor: "#feff00" }}
              aria-valuenow="100"
              aria-valuemin="0"
              aria-valuemax="100"
            ></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Language;
