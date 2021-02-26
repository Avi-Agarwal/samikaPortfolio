import React from 'react';
import BlogList from "../components/BlogList";
import {isMobile} from "react-device-detect";

const Blog = () => {
    return (
        <div>
            { isMobile ? (null) : (<><br/><br/></>) }
            <BlogList />
        </div>
    );
}

export default Blog;
