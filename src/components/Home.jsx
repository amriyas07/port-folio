import React from 'react';
import '../css/HomeStyle.css';
import MyImage from '../assets/EditImage.png';
import Resume from "../resume/SEResume.pdf";
function Home() {

  return (
    <header className="header container-fluid">
      <div className="header-container clear-fix">
        <div className="text-left">
          <h1>Hello everyone<br /> I'm <span className="Nam">Mohamed Riyasdeen</span></h1>
          <h3>I'm a Software Engineer </h3>
          <span className="gap"></span>
          {/* <h4>Close to completing my bachelor's degree, I have a strong foundation <span className="gap1"></span> in programming languages such as C, Java, Python, HTML5, CSS, and JavaScript. <span className="gap1"></span> Committed to continuous improvement, I hold multiple online certifications <span className="gap1"></span> in both front-end and back-end technologies.</h4>
          <h5>Eagerly seeking software development opportunities, I aim to seamlessly transition from <span className="gap1"></span> academia to the professional sphere, contributing technical skills and creativity <span className="gap1"></span> to dynamic teams for innovative projects.</h5> */}
          <a href={Resume} download="Resume.pdf"><button className='bts btn mb-3'>Download Resume</button></a>
          {/* <h2>Let's connect! If you're seeking a dedicated individual with a passion <span className="gap"></span> for coding, I'm excited to explore how I can bring value to your team.</h2> */}
        </div> 
        <div className="image-right">
          <div className="image-box">
          <img src={MyImage} alt="My Image" className="Images" />
          </div>
        </div>
      </div>
    </header>
  );
}

export default Home