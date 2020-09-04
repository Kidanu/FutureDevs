import React, { Component } from 'react';
import LetterAvatars from '../Components/LetterAvatars';

export default class AboutUs extends Component {
    render() {
        return (
            <div className="About Us">
                <LetterAvatars />
                <div className="lander">
                    <h1>About Us page</h1>
                </div>
            </div>
        );
    }
}
