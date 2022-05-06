import SignUpForm from "../auth/SignUpForm";
import './index.css'

export default function SignUpPage() {
    return (
    <>
      <div id="signup_page_content">
        <div id="signup_form">
        <div id="signup_text">
            CREATE YOUR ACCOUNT
        </div>
        <div id="sign_up_form">
            <SignUpForm />
        </div>
        </div>
      </div>
      <div id="footer">
          © 2022 Vapor. A Steam clone made by Jason Vien, Chris Mizell, Jared Kunhart and Damian Rojas.
        </div>
    </>
    )
}
