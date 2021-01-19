import React from 'react';

const Blog = (props) => {
    const tstText = 'Hello This is my Blog';

    // React.useEffect( () => {
    //     const pictures = fetchBlog();
    // }
    // );

    return (
        <div>
            <h1>
                {tstText}
            </h1>
            <p>
                Hello from Ubunto
            </p>
        </div>
    );
}

export default Blog;
