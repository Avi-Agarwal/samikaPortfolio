import React from 'react';
import PhotoGallery from "../components/PhotoGallery";
import {Box} from "@material-ui/core";
import { isMobile } from 'react-device-detect';

const Portfolio = () => {
    return (
        <div>
            { isMobile ? (null) : (<br/>) }
            <Box >
                <PhotoGallery/>
            </Box>
        </div>
    );
}

export default Portfolio;
