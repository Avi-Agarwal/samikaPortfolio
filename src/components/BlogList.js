import React, {useEffect, useState} from "react";
import * as photoDirectory from "../assets/photoDirectory";
import Grid from "@material-ui/core/Grid";
import {findItemLength} from "../utils/gridUtils";
import {
    blogImage, blogSubTitle, blogText, blogTextAlign, blogTitle,
    blogWrapper, lineBreak,
} from "../styles";
import BlogTextWrapper from "./BlogTextWrapper";
import BlogText from "./BlogTextWrapper";




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