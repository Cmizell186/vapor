import LoginForm from "../auth/LoginForm";
import './index.css'

export default function LandingPage() {
    return (
    <>
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
        <img id="join_pc" src="/static/images/join_pc.png" alt=""></img>
        </div>
        It's free and easy to use.
        <div id="signup_button">
            <button id="join_vapor"><a href="/signup">Join Vapor</a></button>
            <button id="join_vapor"><a href="/demo">Demo User</a></button>
        </div>
        </div>
      </div>
      <div id="footer">
          © 2022 Vapor. A Steam clone made by Jason Vien, Chris Mizell, Jared Kunhart and Damian Rojas.
        </div>
        </>
    )
}
