import React from 'react'
import PropTypes from "prop-types";
import "../css/Contacts.css";
import MyIg from "../assets/EditImage.png";
function User(props){
    const openEmail = () => {
      window.location.href = 'mailto:amohamedriyasdeen@gmail.com';
    };
    const openDialpad = () => {
      window.location.href = 'tel:+916385462105';
    };
  return(
    <div className="container card-container">
      <span className={props.online ? "pro online":"pro offline"}>{props.online ? "ONLINE":"OFFLINE"}</span>
      <img src={MyIg} className="Mymg" alt="My Image"/>
      <h3>{props.names}</h3>
      <h3>{props.city}</h3>
      <p>{props.designation}</p>
      <p>Mob No: +{props.mob}</p>
      <div className='buttons'>
        <button className="btn btn-primary prim-btn" onClick={openDialpad}>Call</button>
        <button className="btn btn-success prim-btn" onClick={openEmail}>E-mail</button>
        <a href="https://www.linkedin.com/in/mohamed-riyasdeen/" target="_blank"><button className="btn btn-primary prim-btn">Linked In</button></a>
        <a href="https://github.com/amriyas07" target="_blank"><button className="btn btn-dark prim-btn">Git Hub</button></a>
      </div>
    </div>
  );
}
function Contact() {
  const date = new Date();
  const status = date.getHours()>=5 && date.getHours()<=22 ? true : false;
  return (
    <User names="Mohamed Riyasdeen A" city="villupuram" designation="Software Engineer" online={status} mob={916385462105}/>
  )
}
export default Contact
User.propTypes={
  names:PropTypes.string.isRequired,
  city:PropTypes.string.isRequired,
  designation:PropTypes.string.isRequired,
  online:PropTypes.bool.isRequired,
  mob:PropTypes.number.isRequired,
};