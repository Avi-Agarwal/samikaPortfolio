import React from 'react';
import BlogList from "../components/BlogList";

const Blog = () => {
    const tstText = 'Hello This is my BlogList';

    // React.useEffect( () => {
    //     const pictures = fetchBlog();
    // }
    // );

    return (
        <div>
            <br/>
            <br/>
            <BlogList/>
        </div>
    );
}

export default Blog;
