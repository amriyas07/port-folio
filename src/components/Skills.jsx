import React from "react";
import "../css/Skill.css";
import cico from "../assets/Icons/c.png";
import cssico from "../assets/Icons/css.png";
import pyico from "../assets/Icons/python.png";
import jvico from "../assets/Icons/java.png";
import jsico from "../assets/Icons/jscript.png";
import rjsico from "../assets/Icons/reactjs.png";
import htico from "../assets/Icons/htl.png";
import vsico from "../assets/Icons/visual.png";
import fgico from "../assets/Icons/figma.png";
import cvico from "../assets/Icons/canva.png";
import sqlico from "../assets/Icons/db.png";
import xdico from "../assets/Icons/xd.png";
import xmpico from "../assets/Icons/XAMPP.png";
import msqlico from "../assets/Icons/mysql.png";
import bico from "../assets/Icons/boot5.png";
import lara from "../assets/Icons/lara.png";
import postman from "../assets/Icons/postman-icon.png"
import phplogo from "../assets/Icons/php.png";

function Skills() {
  return (
    <div className="conts container-fluid">
      <h1>Skills</h1>
      <h2>TECHNICAL SKILLS</h2>
      <div className="Tskill">
        <div className="Tskill-text">
          <p>HTML5</p>
          <p>CSS </p>
          <p>JavaScript</p>
          <p>BootStrap</p>
          <p>Php</p>
          <p>React JS</p>
          <p>SQL</p>
          <p>Java (Core)</p>
          <p>Python Programming</p>
        </div>
        {/* <div className="Nskill-text">
          <p>Communication</p>
          <p>Team Work</p>
          <p>Time Management</p>
          <p>Problem-Solving</p>
          <p>Adaptability</p>
          <p>Hard Work</p>
        </div> */}
        <div className="skill-icon">
        <img src={htico} className="size" alt="icon" />
        <img src={cssico} className="size" alt="icon" />
        <img src={jsico} className="size" alt="icon" />
        <img src={bico} className="size" alt="icon" />
        <img src={phplogo} className="size" alt="icon" />
        <img src={rjsico} className="size" alt="icon" />
        <img src={sqlico} className="size cg" alt="icon" />
        <img src={jvico} className="size" alt="icon" />
        <img src={pyico} className="size" alt="icon" />
        </div>

        <div className="skill-progress">
          <div className="gaps progress" style={{ height:"23px" }}>
            <div
              className="progress progress-bar progress-bar-success progress-bar-striped pbs pb1"
              role="progressbar"
              aria-valuenow="40"
              aria-valuemin="0"
              aria-valuemax="100"
              style={{ height:"23px" }}
            >
            HTML5 
            </div>
          </div>

          <div className="gaps progress" style={{ height:"23px" }}>
            <div
              className="progress progress-bar progress-bar-success progress-bar-striped pbs pb2"
              role="progressbar"
              aria-valuenow="40"
              aria-valuemin="0"
              aria-valuemax="100"
              style={{height:"23px" }}
            >
            CSS  
            </div>
          </div>

          <div className="gaps progress" style={{ height:"23px" }}>
            <div
              className="progress progress-bar progress-bar-success progress-bar-striped pbs pb3"
              role="progressbar"
              aria-valuenow="40"
              aria-valuemin="0"
              aria-valuemax="100"
              style={{ height:"23px"}}
            >
            JavaScript 
            </div>
          </div>

          <div className="gaps progress" style={{ height:"23px" }}>
            <div
              className="progress progress-bar progress-bar-success progress-bar-striped pbs pb4"
              role="progressbar"
              aria-valuenow="40"
              aria-valuemin="0"
              aria-valuemax="100"
              style={{ height:"23px" }}
            >
            BootStrap 
            </div>
          </div>

          <div className="gaps progress" style={{ height:"23px" }}>
            <div
              className="progress progress-bar progress-bar-success progress-bar-striped pbs pb4"
              role="progressbar"
              aria-valuenow="40"
              aria-valuemin="0"
              aria-valuemax="100"
              style={{ height:"23px" }}
            >
            Php
            </div>
          </div>

          <div className="gaps progress" style={{ height:"23px" }}>
            <div
              className="progress progress-bar progress-bar-success progress-bar-striped pbs pb5"
              role="progressbar"
              aria-valuenow="40"
              aria-valuemin="0"
              aria-valuemax="100"
              style={{ height:"23px" }}
            >
            React JS 
            </div>
          </div>

          <div className="gaps progress" style={{ height:"23px" }}>
            <div
              className="progress progress-bar progress-bar-success progress-bar-striped pbs pb6"
              role="progressbar"
              aria-valuenow="40"
              aria-valuemin="0"
              aria-valuemax="100"
              style={{ height:"23px" }}
            >
            SQL 
            </div>
          </div>

          <div className="gaps progress" style={{ height:"23px" }}>
            <div
              className="progress progress-bar progress-bar-success progress-bar-striped pbs pb7"
              role="progressbar"
              aria-valuenow="40"
              aria-valuemin="0"
              aria-valuemax="100"
              style={{ height:"23px" }}
            >
            Java (Core) 
            </div>
          </div>

          <div className="gaps progress" style={{ height:"23px" }}>
            <div
              className="progress progress-bar progress-bar-success progress-bar-striped pbs pb8"
              role="progressbar"
              aria-valuenow="40"
              aria-valuemin="0"
              aria-valuemax="100"
              style={{ height:"23px" }}
            >
            Python Programming 
            </div>
          </div>

        </div>
      </div>

      <hr />

      <h2>Tools</h2>
      <div className="Tools">
        <div className="Tool-text">
          <p>Figma</p>
          <p>Adobe XD</p>
          <p>Postman</p>
          <p>Canva</p>
          <p>VsCode</p>
          <p>MySQL</p>
          <p>Xampp</p>
        </div>
        <div className="skill-icon">
        <img src={fgico} className="size" alt="icon" />
          <img src={xdico} className="size" alt="icon" />
          <img src={postman} className="size" alt="icon" />
          <img src={cvico} className="size" alt="icon" />
          <img src={vsico} className="size" alt="icon" />
          <img src={msqlico} className="size" alt="icon" />
          <img src={xmpico} className="size" alt="icon" />
        </div>
      </div> 

      <hr />

      <h2>FRAMEWORK</h2>
      <div className="Fwork">
        <div className="Fwork-text">
          <p>Laravel</p>
        </div>
        <div className="skill-icon">
        <img src={lara} className="size" alt="icon" />
        </div>
      </div>


      <hr />
      <h2>NON - TECHNICAL SKILLS</h2>
      <div className="Nskill">
        <div className="Nskill-text">
          <p>Communication</p>
          <p>Team Work</p>
          <p>Time Management</p>
          <p>Problem-Solving</p>
          <p>Adaptability</p>
          <p>Hard Work</p>
        </div>
      </div>
    </div>
  );
}

export default Skills;
