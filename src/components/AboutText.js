import React from "react";
import {
    aboutTitle,
    aboutText, aboutLine,
} from "../styles";
import Grid from "@material-ui/core/Grid";


const AboutText  = ({ data, height }) => {
    return (
        <div style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            height: height,
            alignItems: 'flex-start',
            minWidth: 400,
            maxWidth: 1100,
            paddingLeft: 80,
            flex: 1,
        }}>
            <div id="About-title" style={aboutTitle}>{data.title}</div>
            <p id="About-description" style={aboutText}>{data.description}</p>
        </div>
    )
};

export default AboutText;
