import React from "react";
import "./ErrorPage.css"
const ErrorPage = () =>{
    return (
        <div className="error-form-container">
            <div className="error-div-h2">
                <h2 className="error-h2">404</h2>
            </div>
            <div id="error-div-a">
                <a href="/" className="error-link">
                Return back home!
                </a>
            </div>
            <img src="https://vaporgames.s3.us-west-1.amazonaws.com/404errorpage.png" alt="oopsie" />
        </div>
    )
}

export default ErrorPage
