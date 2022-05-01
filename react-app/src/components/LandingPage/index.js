import LoginForm from "../auth/LoginForm";
import SignUpForm from "../auth/SignUpForm";
import '../../index.css'

export default function LandingPage() {
    return (
    <div className="splashWrapper">
        {/* <Route path='/login' exact={true}> */}
            <LoginForm />
        {/* </Route> */}
        {/* <Route path='/sign-up' exact={true}> */}
            <SignUpForm />
        {/* </Route> */}
    </div>
    )
}
