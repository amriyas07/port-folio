import React from "react";
import "../css/Projects.css";
import Earth from "../assets/Quake.jpeg";
import Ml from "../assets/ML.png";
import Qrc from "../assets/QRC.png";
function Project() {
  return (
    <div className="container cdm">
      <div className="card stsize">
        <img
          src={Earth}
          className="card-img-top stimg-size"
          alt="Project Image"
        />
        <div className="card-body tex">
          <h3 className="card-title">
            SEISMIC TREMOR ALERT AND DOWNPOUR CAUTION{" "}
          </h3>
          <p className="card-text">
            The goal of this project is to identify seismic tremors and
            downpours so that we can issue real-time alert warnings when they
            may result in earthquakes and rain.
          </p>
          {/* <div className="aligns">
          <a href="#" className="btn btn-success">
            Click
          </a>
          </div> */}
        </div>
      </div>

      <div className="card stsize">
        <img
          src={Qrc}
          className="card-img-top stimg-size"
          alt="Project Image"
        />
        <div className="card-body tex">
          <h3 className="card-title">REACTQR GENERATOR</h3>
          <p className="card-text">
            Developed a QR Code Generator using ReactJS, showcasing proficiency
            in front-end development. Integrated APIs seamlessly for enhanced
            functionality, highlighting adaptability and technical skill.
            Empowered users to generate QR codes effortlessly, demonstrating a
            commitment to practical web solutions.
          </p>
          {/* <div className="aligns">
            <a href="#" className="btn btn-success">
              Click
            </a>
          </div> */}
        </div>
      </div>

      <div className="card stsize">
        <img
          src={Ml}
          className="card-img-top stimg-size"
          alt="Project Image"
        />
        <div className="card-body tex">
          <h3 className="card-title">
            MACHINE LEARNING BASED AUTOMATED GRADING SYSTEM FOR STUDENT EXAM
            PAPERS USING A HANDWRITTEN TEXT RECOGNITION TECHNIQUE.
          </h3>
          <p className="card-text">
            The goal of this project is to use machine learning to automate the
            process of descriptive paper evaluation.
          </p>
          {/* <div className="aligns">
          <a href="#" className="btn btn-success">
            Click
          </a>
          </div> */}
        </div>
      </div>

    </div>
  );
}

export default Project;
