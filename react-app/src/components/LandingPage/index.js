import LoginForm from "../auth/LoginForm";
import SignUpForm from "../auth/SignUpForm";
import './index.css'

export default function LandingPage() {
    return (
    <div className="splashWrapper">
        <div id="nav">
        <div id="navarea">
            <div id="div_logo"><img src="/images/vapor_logo.png" id="logo"></img></div>
            <div id="navbar">
                <div className="nav_nav" id="nav_store">STORE</div>
                <div className="nav_nav" id="nav_library">LIBRARY</div>
                <div className="nav_nav" id="nav_profile">PROFILE</div>
                <div className="nav_nav" id="nav_about">ABOUT</div>
                </div>
            <div id="loginnav">Login | Demo</div>
        </div>
        </div>
      <div id="page_content">
        <div id="signinform">
        <div id="signintext">
            SIGN IN
        </div>
        <div id="loginform">
            <LoginForm />
        </div>
        </div>
        <div id="signup">
        Join Vapor and discover thousands of games to play.
        <div id="steamcoffeepic">
        <img id="join_pc" src="/images/join_pc.png"></img>
        </div>
        It's free and easy to use.
        <div id="signup_button">
            <button id="join_vapor">Join Vapor</button>
        </div>

        </div>
      </div>
      <div id="footer">
          © 2022 Vapor. A Steam clone made by Jason Vien, Chris Mitzell, Jared Kunhart and Damian can fill in his own name.
        </div>
    </div>
    )
}
