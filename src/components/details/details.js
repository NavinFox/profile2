
import React from "react";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import "./details.css";
import data from "../../profile.json";

const details = () => {
  console.log("inside details", data);
  return (
    <div className="details">
      <div className="qualification">
        <h2>EDUCATION</h2>
        <div className="education">
          <h3>{data.profile.education} <span>2019</span></h3>
          <p>{data.profile.institute}</p>
        </div>
        <div className="education">
          <h3>
          {data.profile.education1} <span>2022</span>{" "}
          </h3>
          <p>{data.profile.institute1}</p>
        </div>
      </div>

      <div className="lang">
        <h2>LANGUAGES</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing</p>
        <div className="progress">
          <div className="pro" style={{ width: 100, height: 100 }}>
            <CircularProgressbar value={90} text="English" />
          </div>
          <div className="pro" style={{ width: 100, height: 100 }}>
            <CircularProgressbar value={66} text="Kannada" />
          </div>
          <div className="pro" style={{ width: 100, height: 100 }}>
            <CircularProgressbar value={20} text="Hindi" />
          </div>
        </div>
      </div>

      <div className="experience">
        <h2>EXPERIENCE</h2>
        <div className="exp">
          <h3>
          {data.profile.experience} <span>2022</span>
          </h3>
          <p className="text1">
          {data.profile.p1}
          </p>
          <p className="text1">
          {data.profile.p2}
          </p>
          <p className="text1">
          {data.profile.p3}
          </p>
        </div>
        <div className="exp">
          <h3>
          {data.profile.experience1} <span>2019</span>
          </h3>
          <p className="text1">
          {data.profile.p4}
          </p>
          <p className="text1">
          {data.profile.p5}
          </p>
          <p className="text1">
          {data.profile.p6}
          </p>
          <p className="text1">
          {data.profile.p7}
          </p>
        </div>
      </div>
    </div>
  );
};

export default details;