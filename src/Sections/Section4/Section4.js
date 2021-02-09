import React, { Component } from 'react';
import './Section4.scss'
import Image from '../../Assets/illustration-your-users.svg'

export default class Section4 extends Component {
    render() {
        return (
            <div className = "Section4Container">


                <div className="SectionImage" id="Section4Image">
                    <img src = {Image} alt = "Minimalistic image of man and woman starting a discussion"/>
                </div>

                <div className="SectionText" id="Section4Text">
                    <h1> Your Users</h1>
                    <p> It takes no time at all to integrate Huddle with your app's authentication solution. This means, once signed in to your app, your users can start chatting immediately.</p>
                </div>
        </div>
        )
    }
}
