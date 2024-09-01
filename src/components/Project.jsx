import React from "react";
import "../css/Projects.css";
import MobileApp from "../assets/app.png";
import Ml from "../assets/ML.png";
import Qrc from "../assets/QRC.png";
function Project() {
  return (
    <div className="container cdm">
      <div className="card stsize">
        <img
          src={MobileApp}
          className="card-img-top stimg-size"
          alt="Project Image"
        />
        <div className="card-body tex">
          <h3 className="card-title">
          ENHANCING COMMUNITY LIVING THROUGH SEAMLESS LOCAL SERVICES AND TRUSTED PROVIDERS{" "}
          </h3>
          <p className="card-text">
          The project aims to create a digital platform connecting local service providers with customers using OutSystems. It simplifies access to
          essential services, particularly beneficial for newcomers, promoting community and convenience.
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
