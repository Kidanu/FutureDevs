import React, { Component } from 'react';


import LetterAvatars from '../Components/LetterAvatars';

export default class Contacts extends Component {
    render() {
        return (
            <div className="Contacts">
                <LetterAvatars />
                <div className="lander">
                    <h1>Contacts page</h1>
                </div>
            </div>
        );
    }
}
