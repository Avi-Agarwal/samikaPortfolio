import React from 'react';

const Blog = (props) => {
    const tstText = 'Hello This is my Blog';

    // React.useEffect( () => {
    //     const pictures = fetchBlog();
    // }
    // );

    return (
        <h1>
            {tstText}
        </h1>
    );
}

export default Blog;
