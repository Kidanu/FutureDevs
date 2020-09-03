import React, { Component } from "react";
import { Button } from 'react-bootstrap';

export default class Home extends Component {
    goTo(){
        
    }
    render() {
        return (
            <div className="Home">
                <div className="lander">
                    <h1>PPP page</h1>
                    <p>A simple app showing react button click navigation</p>
                    <form>
                        <Button variant="btn btn-success" to="/">Click button to view products</Button>
                    </form>
                </div>
            </div>
        );
    }
}