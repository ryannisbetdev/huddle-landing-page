import React, { Component } from 'react'
import './Section3.scss'

import Image from '../../Assets/illustration-flowing-conversation.svg'

export default class Section3 extends Component {
    render() {
        return (
            <div className = "Section3Container">
                <div className="SectionText" id = "Section3Text">
                    <h1> Flowing Conversations</h1>
                    <p> You wouldn't paginate a conversation in real life, so why do it online?
                        Our threads have just-in-time loading for a more natural flow.
                    </p>
                </div>

                <div className="SectionImage" id="Section3Image">
                    <img src = {Image} alt = "A group of people sitting at a table"/>
                </div>
            </div>
        )
    }
}
