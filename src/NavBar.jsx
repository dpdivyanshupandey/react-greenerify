import { BrowserRouter as Router,NavLink, Link , Routes, Route} from "react-router-dom";
import './NavBar.css';
import Home from "./Components/Home";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Gallery from "./Components/Gallery";
import Logo from "./logo.png";    // Without making separate component file we can import any image.
function NavBar() {
  return (
    <Router>
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light" >
       <NavLink to ="/" className="navbar-logo" > <img src = {Logo} alt = "Logo" height = "65" width="85" /> </NavLink>
        <Link className="navbar-brand" to="/">Greenerify</Link>
        
        <div className="collapse navbar-collapse" id="navbarNav" >
          <ul className="navbar-nav">
            <li className="nav-item" style={{fontWeight:"bold"}}>
              <Link className="nav-link" to="/">Home</Link>
            </li>
            <li className="nav-item" style={{fontWeight:"bold"}}>
              <Link className="nav-link" to="/about">About</Link>
            </li>
            <li className="nav-item" style={{fontWeight:"bold"}}>
              <Link className="nav-link" to="/contact">Contact</Link>
            </li>
            <li className="nav-item" style={{fontWeight:"bold"}}>
              <Link className="nav-link" to="/gallery">Gallery</Link>
            </li>
          </ul>
        </div>
      </nav>

      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/contact" element={<Contact/>} />
        <Route path = "/gallery" element = {<Gallery/>}  />
        <Route path = "/*" element={<h1>Oops <br/>Page not Found!!</h1>} />
      </Routes>
    </div>
  </Router>
);
  
  }

export default NavBar;