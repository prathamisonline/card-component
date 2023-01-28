// import React from "react";
import img from "/public/tech.jpg";
import "../styles.css";

export default function card() {
  return (
    <div className="card">
      <img
        className="card-img"
        src={img}
        alt="an iphone on a macbook with dramatic lighting"
      />
      <div className="card-content">
        <h2 className="card-title">
          7 tech tips and tricks that you need to know
        </h2>
        <p className="card-body">
          Using these 7 proven tips from experts in the industry, you can save
          time, money and more!
        </p>
        <div className="card-footer">
          <p className="card-read-time">
            <span>15 </span> minute <br /> read
          </p>

          <a href="abc.com" className="card-btn">
            read more
          </a>
        </div>
      </div>
    </div>
  );
}
