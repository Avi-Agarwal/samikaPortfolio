import React from "react";
import {
    aboutTitle,
    aboutText,
} from "../styles";


const AboutLeftText  = ({ data, height }) => {
    return (
        <div style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'flex-start',
            height: height,
            alignItems: 'flex-start',
            minWidth: 400,
            maxWidth: 1100,
            flex: 1,
            paddingLeft: 30,
            paddingRight: 80,
        }}>
            <div id="About-title" style={aboutTitle}>{data.title}</div>
            <p id="About-description" style={aboutText}>{data.description}</p>
        </div>
    )
};

export default AboutLeftText;
