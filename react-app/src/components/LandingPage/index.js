import LoginForm from "../auth/LoginForm";
import SignUpForm from "../auth/SignUpForm";
import './index.css'

export default function LandingPage() {
    return (
    <div className="splashWrapper">

        <div id="navarea">
            <div id="div_logo"><img src="/images/vapor_logo.png" id="logo"></img></div>
            <div id="navbar">STORE COMMUNITY ABOUT SUPPORT</div>
            <div id="loginnav">login, demo</div>
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
        Coffee picture
        </div>
        <div id="signup_button">
            Join Vapor
        </div>

        </div>
      </div>
    </div>
    )
}
