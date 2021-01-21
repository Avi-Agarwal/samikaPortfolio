import React from "react";
import * as photoDirectory from "../assets/photoDirectory";
import Grid from "@material-ui/core/Grid";
import {findItemLength} from "../utils/gridUtils";
import {
    blogImage, blogSubTitle, blogText, blogTextAlign, blogTitle,
    blogWrapper, lineBreak,
} from "../styles";


const BlogText  = ({ height, data }) => {
    return (
        <div style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'flex-start',
            maxHeight: height,
            alignItems: 'flex-start',
            minWidth: 400,
            flex: 1
        }}>
            <div id="blog-title" style={blogTitle}>{data.name}</div>
            <p id="blog-sub-title" style={blogSubTitle}>{data.medium + ' - ' +  data.author}</p>
            <p id="blog-description" style={blogText}>{data.description}</p>
        </div>
    )
};

export default BlogText;
