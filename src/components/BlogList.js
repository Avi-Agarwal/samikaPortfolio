import React from "react";
import * as photoDirectory from "../assets/photoDirectory";
import Grid from "@material-ui/core/Grid";
import {blogImage, blogImageMobile, blogWrapper, blogWrapperMobile, lineBreak} from "../styles";
import BlogText from "./BlogTextWrapper";
import { isMobile } from 'react-device-detect';




export default function BlogList() {

    const [imageHeight, setImageHeight] = React.useState(500);

    return (
        <div>
            <Grid container spacing={1}>
                {photoDirectory.photoDirectory
                    .map((piece, index) => (
                        <Grid item xs={12} style={{position: 'relative'}}>
                            <div style={blogWrapper} >
                                <img  id={`blog-image-${piece.name}`} src={piece.src} style={blogImage} />
                                {
                                    console.log(document.getElementById(`blog-image-${piece.name}`))
                                }
                                <BlogText height={imageHeight} data={piece}/>
                            </div>
                            <br/>
                            <hr style={lineBreak}/>
                            <br/>
                        </Grid>
                    ))}
            </Grid>
        </div>
    );
}