import React, { Component } from 'react'
import './Section2.scss'


import Image from '../../Assets/illustration-grow-together.svg'

export default class Section2 extends Component {
    render() {
        return (
            <div className = "Section2Container">
                <div className="Section2Content">
                    <div className="SectionText" id="Section2Text">
                        <h1> Grow Together</h1>
                        <p> Generate meaningful discussions with your audience and build a strong, loyal community. Think of the insightful conversations you miss out on with a feedback form.</p>
                    </div>

                    <div className="SectionImage" id="Section2Image">
                        <img src = {Image} alt = "Minimalistic image of man and woman starting a discussion"/>
                    </div>
                </div>
            </div>
        )
    }
}
