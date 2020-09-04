import React from 'react';
import GitHubLogo from '../Images/TechLogos/GitHubLogo.png';
import SpringLogo from '../Images/TechLogos/SpringLogo.png';
import JavaLogo from '../Images/TechLogos/JavaLogo.png';
import JavaScriptLogo from '../Images/TechLogos/JavaScriptLogo.png';
import HTMLLogo from '../Images/TechLogos/HTMLLogo.png';
import CSSLogo from '../Images/TechLogos/CSSLogo.png';
import ReactLogo from '../Images/TechLogos/ReactLogo.png';
import AngularLogo from '../Images/TechLogos/AngularLogo.png';
import NodeJSLogo from '../Images/TechLogos/NodeJSLogo.png';
import JSONLogo from '../Images/TechLogos/JSONLogo.png';
import DockerLogo from '../Images/TechLogos/DockerLogo.png';
import AWSLogo from '../Images/TechLogos/AWSLogo.png';
import JUnitLogo from '../Images/TechLogos/JUnitLogo.png';
import SQLLogo from '../Images/TechLogos/SQLLogo.png';
import NoSQLLogo from '../Images/TechLogos/NoSQLLogo.png';
import '../Images/TechLogos/TechLogos.css';

export default function TechLogos() {
    return (
        <div>
            <div className="TechInfo"><h1>Technologys that we work with!</h1></div>
            <div className="TechsLogo">
                <img className="Logos" src={GitHubLogo} alt="GitHub Logo" />
                <img className="Logos" src={SpringLogo} alt="Spring Logo" />
                <img className="Logos" src={JavaLogo} alt="Java Logo" />
                <img className="Logos" src={JavaScriptLogo} alt="JavaScript Logo" />
                <img className="Logos" src={HTMLLogo} alt="HTML Logo" />
                <img className="Logos" src={CSSLogo} alt="CSS Logo" />
                <img className="Logos" src={ReactLogo} alt="React Logo" />
                <img className="Logos" src={AngularLogo} alt="Angular Logo" />
                <img className="Logos" src={NodeJSLogo} alt="NodeJS Logo" />
                <img className="Logos" src={JSONLogo} alt="JSON Logo" />
                <img className="Logos" src={DockerLogo} alt="Docker Logo" />
                <img className="Logos" src={AWSLogo} alt="AWS Logo" />
                <img className="Logos" src={JUnitLogo} alt="JUnit Logo" />
                <img className="Logos" src={SQLLogo} alt="SQL Logo" />
                <img className="Logos" src={NoSQLLogo} alt="NoSQL Logo" />
            </div>
        </div>);
}