import React from 'react';
import {
    Link
} from "react-router-dom";
import PhotoGallery from "../components/PhotoGallery";
import {Box} from "@material-ui/core";
import {boxPadding} from "../styles";

const Portfolio = () => {
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
