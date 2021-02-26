import React from "react";
import {
    aboutTitle,
    aboutText, aboutLine,
} from "../styles";
import { isMobile } from 'react-device-detect';


const AboutText  = ({ data, height }) => {
    return (
        <div style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            height: isMobile ? '35vh' : height,
            alignItems: isMobile ? 'flex-start' : 'center',
            minWidth: isMobile ? '80vw' : 400,
            maxWidth: isMobile ?  '80vw' : 1100,
            flex: isMobile  ? null : 1,
        }}>
            <div id="About-title" style={aboutTitle}>{data.title}</div>
            <p id="About-description" style={aboutText}>{data.description}</p>
        </div>
    )
};

export default AboutText;
