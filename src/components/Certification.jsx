import React from 'react';
import '../css/Certificate.css';
import JavaCer from '../assets/certfied/java.jpeg';
import webdesign from '../assets/certfied/webdesign.png';
import CCer from '../assets/certfied/C.png';
import PythonCer from '../assets/certfied/Python.jpeg';
import SQLCer from '../assets/certfied/SQL.png';
import UiUx from '../assets/certfied/UIUX.png';
import PowerBi from '../assets/certfied/BI.png';
function Certification() {
  return (
    <div className="containers">
      <div className="box divs"><p>Responsive Web Design</p><a href="https://www.freecodecamp.org/certification/fcc7f548afa-d9f4-4e21-a237-6fcd418b93be/responsive-web-design" target="_blank"><img src={webdesign} className="img" alt="This is My SQL Certificate"/></a></div>
        <div className="box divs"><p>UI/UX</p><a href="https://olympus.mygreatlearning.com/courses/55928/certificate" target="_blank"><img src={UiUx} className="img" alt="This is My SQL Certificate"/></a></div>
        <div className="box divs"><p>SQL</p><a href="https://www.skillrack.com/faces/free/certificate.xhtml?t=cert&id=435165&key=UHT" target="_blank"><img src={SQLCer} className="img" alt="This is My SQL Certificate"/></a></div>
        <div className="box divs"><p>Java</p><a href="https://www.skillrack.com/faces/free/certificate.xhtml?t=cert&id=453014&key=UOU" target="_blank"><img src={JavaCer} className="img" alt="This is My Java Certificate"/></a></div>
        <div className="box divs"><p>Python</p><a href="https://www.skillrack.com/faces/free/certificate.xhtml?t=cert&id=449127&key=VPH" target="_blank"><img src={PythonCer} className="img" alt="This is My Python Certificate"/></a></div>
        <div className="box divs"><p>C</p><a href="https://www.skillrack.com/faces/free/certificate.xhtml?t=cert&id=456087&key=DPJ" target="_blank"><img src={CCer} className="img" alt="This is My C Certificate"/></a></div>
        {/* <div className="box"><p>This is Nature</p><img src={} alt="Nature Image 7"/></div>
        <div className="box"><p>This is Nature</p><img src={} alt="Nature Image 8"/></div>
        <div className="box"><p>This is Nature</p><img src={} alt="Nature Image 9"/></div> */}
    </div>
  );
}

export default Certification