import React, { Component } from 'react';
import './Footer.scss';
import Logo from '../../Assets/logo-white.svg';



export default class Footer extends Component {

    state = {
        email: '',
        error: ''
    }

    render() {
        return (
            <footer>
                <div className = "FooterLeft">

                    <img src = {Logo} alt = "Huddle logo in white" />
                    <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut rutrum lacus ut felis vehicula cursus.</p>
                    
                    <div className="FooterInfo">
                        <p> Phone: +1-543-123-4567</p>
                        <p> Email: example@huddle.com</p>
                    </div>

                </div>

                <div className = "FooterRight">
                    <h1> Newsletter </h1>
                    <p> To recieve tips on how to grow your community, sign up to our weekly newsletter.
                        We'll never sendyou spam or pass on your email address.</p>

                    <form>
                        <input type = "email" required placeholder = "Please enter your email"/>
                        <button> Subscribe </button>
                        <div className= "Error">
                            
                        </div>
                    </form>
                    
                </div>
            </footer>
                
        )
    }
}
