import React from 'react';
import {
    Link
} from "react-router-dom";

const Portfolio = (props) => {
    const tstText = 'Hello This is my Portfolio';

    // React.useEffect( () => {
    //     const pictures = fetchArtWork();
    // }
    // );

    return (
        <div>
            <h1>
                {tstText}
            </h1>
            <Link to="/">{'Home '}</Link>
            <Link to="/blog">{'Blog '}</Link>
            <Link to="/contact">{'Contact '}</Link>
            <Link to="/about">{'About '}</Link>
        </div>
    );
}

export default Portfolio;
