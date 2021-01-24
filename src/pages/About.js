import React from 'react';
import AboutIcon1 from '../assets/photos/AboutIcon10.png'
import SaySmileIcon from '../assets/photos/SaySmileIcon.png'
import AboutIcon2 from '../assets/photos/AboutIcon2.png'
import {aboutWrapper, aboutWrapper1, columnWrapper, iconImage, iconPhoto, iconPhotoRight} from "../styles";
import Grid from "@material-ui/core/Grid";
import AboutText from "../components/AboutText";
import * as aboutData from '../data/aboutDirectory';
import AboutLeftText from "../components/AboutLeftText";

const About = () => {

    return (
        <div>
            <br/>
            <br/>
            <div style={{paddingLeft: 20, paddingRight: 20}}>
                <Grid container spacing={8} direction={"column"} wrap={"wrap"}>
                    <Grid container item xs={12} spacing={4} wrap={"wrap"}>
                        <Grid container item xs={4} justify={"flex-end"}>
                            <img src={aboutData.aboutDirectory[0].img} style={iconPhoto}/>
                        </Grid>
                        <Grid container item xs={8} justify={"flex-start"} wrap={"wrap"}>
                            <AboutText data={aboutData.aboutDirectory[0]} height={365} />
                        </Grid>
                    </Grid>
                    <Grid container item xs={12} spacing={4} wrap={"wrap"}>
                        <Grid container item xs={8} justify={"flex-end"}>
                            <AboutLeftText data={aboutData.aboutDirectory[1]} height={365} />
                        </Grid>
                        <Grid container item xs={4} justify={"flex-start"}>
                            <img src={aboutData.aboutDirectory[1].img} style={iconPhoto}/>
                        </Grid>
                    </Grid>
                    <Grid container item xs={12} spacing={4} wrap={"wrap"}>
                        <Grid container item xs={4} justify={"flex-end"}>
                            <img src={aboutData.aboutDirectory[2].img} style={iconPhoto}/>
                        </Grid>
                        <Grid container item xs={8} justify={"flex-start"}>
                            <AboutText data={aboutData.aboutDirectory[2]} height={365} />
                        </Grid>
                    </Grid>
                </Grid>
            </div>
        </div>
    );
}

export default About;
