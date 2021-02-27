import React from 'react';
import photoBar from '../assets/photos/photoBar.png'
import {barPhoto, cardStyle, contactHeader, contactText, emailText} from "../styles";
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import EmailIcon from "../assets/EmailLogo";
import ComputerIcon from "../assets/ComputerLogo";
import { Nav} from "react-bootstrap";
import LinkedInContact from "../assets/LinkedInContact";
import InstagramContact from "../assets/InstagramContact";
import { isMobile } from 'react-device-detect';

const Contact = () => {

    return (
        <div style={{display: 'flex', flexDirection: "column", alignItems: "center", justifyContent: 'flex-start', paddingRight: 0, paddingLeft: 0 }}>
            <br/>
            <img src={photoBar} style={barPhoto} />
            <div style={{display: 'flex', flexDirection:'row', justifyContent: 'space-around', alignItems: 'flex-start', width: isMobile ? '80vw' : '100%', position: "absolute", height: '100%', top: '25vh', flexWrap: "wrap"}} >
                <Card style={cardStyle}>
                    <CardContent style={{width: '100%'}}>
                        <div style={{paddingRight: 20, paddingLeft: 20}}>
                            <EmailIcon />
                            <div style={contactHeader} >
                                Contact me via Email
                            </div>
                            <div style={contactText}>
                                Please feel free to send me an email regarding any inquiries!
                            </div>
                            <br/>
                            <div style={{paddingTop: 15}}>
                                <a style={emailText} href="mailto:samika7agarwal@gmail.com" target="_blank">
                                    Samika7Agarwal@gmail.com
                                </a>
                            </div>
                            <div style={{paddingTop: 15}}>
                                <a style={emailText} href="mailto:saysmile@gmail.com" target="_blank">
                                    SaySmile@gmail.com
                                </a>
                            </div>
                        </div>
                    </CardContent>
                </Card>
                <Card style={cardStyle}>
                    <CardContent style={{width: '100%'}}>
                        <ComputerIcon/>
                        <div style={contactHeader}>
                            Contact or visit my Social Media
                        </div>
                        <div style={contactText}>
                            You can find additional artwork or more details of my experience on my social media!
                        </div>
                        <br/>
                        <div style={{display: 'flex', flexDirection:'row', justifyContent: 'center', alignItems: 'center', width: '100%', paddingTop: 20}}>
                            <Nav.Link href="https://www.linkedin.com/in/samika-agarwal-609999202/" target="_blank">
                                <LinkedInContact/>
                            </Nav.Link>
                            <Nav.Link href="https://www.instagram.com/ssamiika/" target="_blank">
                                <InstagramContact/>
                            </Nav.Link>
                        </div>
                    </CardContent>
                </Card>
            </div>
            <br/>
        </div>
    );
}

export default Contact;
