import React, { Component } from 'react';
import Logo from '../../Assets/logo.svg'
import './Header.scss'

export default class Header extends Component {
    render() {
        return (
            <header className = "Header">
                <div className="Logo">
                    <img alt = "Huddle Logo" src = {Logo}/>
                </div>

                <div className="HeaderButton">
                    <button> Try It Free</button>
                </div>
            </header>
        )
    }
}
