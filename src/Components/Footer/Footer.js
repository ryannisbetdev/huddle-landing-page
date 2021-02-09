import React, { Component } from 'react';
import './Footer.scss';
import Logo from '../../Assets/logo-white.svg';



export default class Footer extends Component {

    render() {
        return (
            <footer>

            <div className = "FooterRight">
                    <h1> Newsletter </h1>
                    <p> To recieve tips on how to grow your community, sign up to our weekly newsletter.
                        We'll never send you spam or pass on your email address.</p>

                    <form>
                        <input type = "email" required placeholder = "Enter your email"/>
                        <button> Subscribe </button>
                        <div className= "Error">
                            
                        </div>
                    </form>
                    
                </div>

                <div className = "FooterLeft">

                    <img src = {Logo} alt = "Huddle logo in white" />
                    <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut rutrum lacus ut felis vehicula cursus.</p>
                    
                    <div className="FooterInfo">
                        <p> Website developed by <a href = "https://ryannisbet.dev"> Ryan Nisbet</a></p>
                        <p> Design from <a href = "https://www.frontendmentor.io/challenges/huddle-landing-page-with-curved-sections-5ca5ecd01e82137ec91a50f2"> Frontend Mentor </a> </p>
                    </div>

                </div>

              
            </footer>
                
        )
    }
}
