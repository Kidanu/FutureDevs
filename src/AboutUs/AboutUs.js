import React, { Component } from 'react';
import LetterAvatars from '../Components/LetterAvatars';

import './AboutUs.css';

export default class AboutUs extends Component {
    render() {
        return (
            <div>
                <LetterAvatars />

                <div className="AboutUs">
                    <h1>About Us</h1>
                    <p>
                        We are three friends that started to become developers. We joined a Java Devloper program at higher vocational education (HVE) in Stockholm 2018.
                        After graduating from our education at EC-Utbildning in 2020 we wanted to present our knowledge.
            </p>
                    <p>
                        And with this webbpage we want to show projects that we have created together and also to be able to show future employers what technologies we have knowledge in and can work with.
            </p>
                </div>
            </div>
        );
    }
}
