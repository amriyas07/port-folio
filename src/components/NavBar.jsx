import React,{useState} from 'react';
import { Link } from 'react-router-dom';
import '@fortawesome/fontawesome-free/css/all.min.css';
import '../css/Nav.css';
function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <nav className="nav container-fluid">
    <div className="nav-left">
      <a href="#">Never quit</a>
    </div>
    <div className="nav-right">
      <div className="menu" onClick={()=> {
        setMenuOpen(!menuOpen);
      }}>
      <i className="fa fa-bars"></i>
      </div>
        <ul className={menuOpen ? "open":""}>
            <li><Link to="/" className="a"><span className="one">H</span>ome</Link></li>
            <li><Link to="/About" className="a"><span className="one">A</span>bout</Link></li>
            <li><Link to="/Skills" className="a"><span className="one">S</span>kills</Link></li>
            <li><Link to="/Projects" className="a"><span className="one">P</span>rojects</Link></li>
            <li><Link to="/Certificate" className="a"><span className="one">C</span>ertifications</Link></li>
            <li><Link to="/Contact" className="a"><span className="one">C</span>ontacts</Link></li>
        </ul>
    </div>
    </nav>
  )
}

export default NavBar