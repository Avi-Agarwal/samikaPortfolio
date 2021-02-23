import React from 'react';
import {
    Link
} from "react-router-dom";
import PhotoGallery from "../components/PhotoGallery";
import {Box} from "@material-ui/core";
import {isMobile} from 'react-device-detect';

const Portfolio = () => {
    const tstText = 'Hello This is my Portfolio';
    console.log(tstText);
    if (isMobile){
        console.log('ON MOBILE');
    }

    return (
        <div>
            <br/>
            <Box >
                <PhotoGallery/>
            </Box>
        </div>
    );
}

export default Portfolio;
