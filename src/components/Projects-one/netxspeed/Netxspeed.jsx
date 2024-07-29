// src/components/GitHubLink.js

import React from 'react';
import "./netxspeed.css"

const Netxspeed = ({ url }) => {
    return (
        <div className="netxspeed-container">
            <iframe
                src={url}
                title="Netxspeed GitHub Page"

            ></iframe>
        </div>
    );
};

export default Netxspeed;
