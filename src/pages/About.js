import React from 'react';
import AboutIcon1 from '../assets/photos/AboutIcon10.png'
import SaySmileIcon from '../assets/photos/SaySmileIcon.png'
import AboutIcon2 from '../assets/photos/AboutIcon2.png'
import {aboutWrapper, aboutWrapper1, columnWrapper, iconImage, iconPhoto, iconPhotoRight, wrapRow} from "../styles";
import Grid from "@material-ui/core/Grid";
import AboutText from "../components/AboutText";
import * as aboutData from '../data/aboutDirectory';
import AboutLeftText from "../components/AboutLeftText";

const About = () => {
    const rowPadding = 50;

    return (
        <div>
            <br/>
            <br/>
            <div style={{paddingLeft: 20, paddingRight: 20}}>
                <Grid container direction="column" justify="center" alignItems="center" spacing={4} >
                    <Grid item xs={12} wrap={"wrap"} style={{position: 'relative'}}>
                        <div style={wrapRow}>
                            <img src={aboutData.aboutDirectory[0].img} style={iconPhoto}/>
                            <AboutText data={aboutData.aboutDirectory[0]} height={365} />
                        </div>
                    </Grid>
                    <Grid item xs={12} wrap={"wrap"} style={{position: 'relative'}}>
                        <div style={wrapRow}>
                            <AboutLeftText data={aboutData.aboutDirectory[1]} height={365} />
                            <img src={aboutData.aboutDirectory[1].img} style={iconPhotoRight}/>
                        </div>
                    </Grid>
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
