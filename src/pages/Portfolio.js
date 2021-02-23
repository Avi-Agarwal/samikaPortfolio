import React from 'react';
import PhotoGallery from "../components/PhotoGallery";
import {Box} from "@material-ui/core";
import {isMobile} from 'react-device-detect';

const Portfolio = () => {
    if (isMobile){
        console.log('ON MOBILE');
    }
    else {
        console.log('NOT ON MOBILE');
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
