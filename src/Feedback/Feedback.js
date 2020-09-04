import React, { Component } from 'react';
import LetterAvatars from '../Components/LetterAvatars';

export default class Feedback extends Component {
    render() {
        return (
            <div className="Feedback">
                <LetterAvatars />
                <div className="lander">
                    <h1>Feedback page</h1>
                </div>
            </div>
        );
    }
}
