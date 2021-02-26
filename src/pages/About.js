import React from 'react';
import AboutIcon1 from '../assets/photos/AboutIcon10.png'
import SaySmileIcon from '../assets/photos/SaySmileIcon.png'
import AboutIcon2 from '../assets/photos/AboutIcon2.png'
import {aboutBorder, aboutWrapper1, columnWrapper, iconImage, iconPhoto, iconPhotoRight, wrapRow} from "../styles";
import Grid from "@material-ui/core/Grid";
import AboutText from "../components/AboutText";
import * as aboutData from '../data/aboutDirectory';
import AboutLeftText from "../components/AboutLeftText";
import { isMobile } from 'react-device-detect';

const About = () => {

    return (
        <div>
            <br/>
            <div style={aboutBorder}>
                <Grid container direction="column" justify="center" alignItems="center" spacing={4} >
                    <Grid item xs={12} wrap={"wrap"} style={{position: 'relative'}}>
                        <div style={wrapRow}>
                            <img src={aboutData.aboutDirectory[0].img} style={iconPhoto}/>
                            <AboutText data={aboutData.aboutDirectory[0]} height={365} />
                        </div>
                    </Grid>
                    {
                        isMobile ? (
                                <Grid item xs={12} wrap={"wrap"} style={{position: 'relative'}}>
                                    <div style={wrapRow}>
                                        <img src={aboutData.aboutDirectory[1].img} style={iconPhoto}/>
                                        <AboutText data={aboutData.aboutDirectory[1]} height={365} />
                                    </div>
                                </Grid>
                            ) : (
                                <Grid item xs={12} wrap={"wrap"} style={{position: 'relative'}}>
                                    <div style={wrapRow}>
                                        <AboutLeftText data={aboutData.aboutDirectory[1]} height={365} />
                                        <img src={aboutData.aboutDirectory[1].img} style={iconPhotoRight}/>
                                    </div>
                                </Grid>
                            )
                    }
                    <Grid item xs={12} wrap={"wrap"} style={{position: 'relative'}}>
                        <div style={wrapRow}>
                            <img src={aboutData.aboutDirectory[2].img} style={iconPhoto}/>
                            <AboutText data={aboutData.aboutDirectory[2]} height={365} />
                        </div>
                    </Grid>
                </Grid>
            </div>
            <br/>
        </div>
    );
}

export default About;
