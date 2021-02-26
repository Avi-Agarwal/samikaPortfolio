import React from "react";
import { blogSubTitle, blogText, blogTitle } from "../styles";
import { isMobile } from 'react-device-detect';


const BlogText  = ({ height, data }) => {
    return (
        <div style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'flex-start',
            maxHeight: isMobile ? '40vh' : height,
            alignItems: 'flex-start',
            minWidth: isMobile ? '85vw' : 400,
            maxWidth: isMobile ?  '85vw' : null,
            flex: isMobile  ? null : 1
        }}>
            <div id="blog-title" style={blogTitle}>{data.name}</div>
            <p id="blog-sub-title" style={blogSubTitle}>{data.medium + ' - ' +  data.author}</p>
            <p id="blog-description" style={blogText}>{data.description}</p>
        </div>
    )
};

export default BlogText;
