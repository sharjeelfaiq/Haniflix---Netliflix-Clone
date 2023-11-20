import "./login.scss";
import Logo from "../../Assets/Images/Nav-logo.png"

export default function Login() {
  return (
    <div className="login">
      <div className="top">
        <div className="wrapper">
          <img
            className="logo"
            // src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png"
            src={Logo}
            width="100px"
            height="100px"
            alt=""
          />
        </div>
      </div>
      <div className="container">
        <form>
          <h1 style={{color:"#000"}}>Sign In</h1>
          <input type="email" placeholder="Email or phone number" style={{color:"#000"}} />
          <input type="password" placeholder="Password" style={{color:"#000"}} />
          <button className="loginButton">Sign In</button>
          <span style={{color:"#000"}}>
            New to Haniflix? <b>Sign up now.</b>
          </span>
          <small style={{color:"#000"}}>
            This page is protected by Google reCAPTCHA to ensure you're not a
            bot. <b>Learn more</b>.
          </small>
        </form>
      </div>
    </div>
  );
}
