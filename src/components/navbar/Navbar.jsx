import { ArrowDropDown, Notifications, Search } from "@material-ui/icons";
import { useState } from "react";
import NavLogo1 from "../../Assets/Images/Nav-logo.png";
import NavLogo2 from "../../Assets/Images/left-logo.jpeg";
import "./navbar.scss";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  window.onscroll = () => {
    setIsScrolled(window.pageYOffset === 0 ? false : true);
    return () => (window.onscroll = null);
  };
  return (
    <div className={isScrolled ? "navbar scrolled" : "navbar"}>
      <div className="container">
        <div className="left" style={{width:"100%", height:"100px"}}>
          <img
            // src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png"
            src={NavLogo1}
            alt=""
            width={100}
            height={100}
          />
          <span>Homepage</span>
          <span>Series</span>
          <span>Movies</span>
          <span>New and Popular</span>
          <span>My List</span>
        </div>
        <div className="right">
          <Search className="icon" />
          <span>KID</span>
          <Notifications className="icon" />
          <img
            // src="https://images.pexels.com/photos/6899260/pexels-photo-6899260.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
            src={NavLogo1}
            alt=""
            width="50px"
            height="50px"
          />
          <div className="profile">
            <ArrowDropDown className="icon" />
            <div className="options">
              <span style={{color: "#000"}}>Settings</span>
              <span style={{color: "#000"}}>Logout</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
