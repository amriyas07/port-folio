import React from 'react'
import '../css/About.css';
function About() {
  return (
    <div className="demo container">
      <h1>About <span className="cms">Me</span></h1>
      <div className="Aboutxt">
      <h4>A Dedicated Computer Science Student Transforming Innovative Ideas into Impactful Digital Solutions. <br />
      <br />Eagerly seeking Software development opportunities, I aim to seamlessly transition from academia to the professional sphere, contributing technical skills and creativity to dynamic teams for innovative projects. </h4>
     <h3>Let's connect! If you're seeking a dedicated individual with a passion for coding, I'm excited to explore how I can bring value to your team.</h3>
      </div>
      <h2>Personal Details</h2>
    <table className="demo1 table table-hover table-info">
      <tbody>
        <tr>
          <th>Current location</th>
          <td>Vandimedu, Villupuram, Tamil Nadu-605 602</td>
        </tr>
        <tr>
          <th scope="row">Date of birth</th>
          <td>07-06-2003</td>
        </tr>
        <tr>
          <th scope="row">Gender</th>
          <td>Male</td>
        </tr>
        <tr>
          <th scope="row">Graduation</th>
          <td>
            <strong>Course:</strong> B.E(Computer Science and Engineering)<br />
            <strong>College:</strong> IFET College of Engineering, Villupuram<br />
            <strong>Year of passing:</strong> 2024<br />
            <strong>CGPA:</strong> 8.26
          </td>
        </tr>
        <tr>
          <th scope="row">Schooling</th>
          <td>
            <strong>Class XII:</strong><br />
            School Name: Sri Sarada Vidyalaya Matric Higher Secondary School<br />
            Board Name: State Board<br />
            Medium: English<br />
            Year of passing: 2020<br />
            Percentage: 58.2<br /><br />

            <strong>Class X:</strong><br />
            School Name: Sri Sarada Vidyalaya Matric Higher Secondary School<br />
            Board Name: State Board<br />
            Medium: English<br />
            Year of passing: 2018<br />
            Percentage: 71.4
          </td>
        </tr>
        <tr>
          <th scope="row">Languages Known</th>
          <td>Tamil, English</td>
        </tr>
      </tbody>
    </table>
  </div>
  );
}

export default About