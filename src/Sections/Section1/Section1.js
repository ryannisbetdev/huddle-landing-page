import React, { Component } from 'react'
import './Section1.scss'
import Image from '../../Assets/screen-mockups.svg'

import Stat1Icon from '../../Assets/icon-communities.svg'
import Stat2Icon from '../../Assets/icon-messages.svg'

export default class Section1 extends Component {
    render() {
        return (
            <div className = "Section1Container">
                <h1> Build The Community Your Fans Will Love</h1>
                <p> Huddle re-imagines the way we build communities. You have a voice but so does your audience. Create connections with your users as you engage in genuine discussion.</p>
                <button>  Get Started For Free </button>

                <div className="Image">
                <img src = {Image} alt = "Screen mockups" />
                </div>

                <div className="StatsSection">
                    <div className="StatBox" id = "StatBox1">
                        <img src = {Stat1Icon} alt = "Icon showing 3 people standing"/>
                        <h1> 1.4k+</h1>
                        <p> Communities Formed</p>
                    </div>

                    <div className="StatBox" id = "StatBox2">
                        <img src = {Stat2Icon} alt = "Icon showing a message box"/>
                        <h1> 2.7m+</h1>
                        <p> Messages Sent</p>
                    </div>
                </div>
               
            </div>
        )
    }
}
