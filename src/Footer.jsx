import React from "react";
import "./Footer.css";

export default function Footer() {
  return (
    <>
      <footer className="d-flex row mb-5 ">
        <div className="col-12">
          <img
            className="logo d-block mx-auto "
            src="/imgs/centred_s&s.svg"
            alt="logo"
          />
          <h2>WEDNESDAY 6TH AUGUST 2025</h2>
        </div>
        <div className="signature col-12 p-2 text-center">
          💻 Designed & Developed by
          <a className="ms-1" href="https://www.victoriaolusegun.com/">
            Victoria
          </a>
        </div>
      </footer>
    </>
  );
}
