import React from 'react';
import './Header.css'

const Header = () => {
    return (
        <div className="header">
            <h1>
                This is a visual respresentation of <span>Game Of Thrones</span> characters!
            </h1>
            <h2>
                Choose your favourite characters from here!
            </h2>
            <h5>
                Series Estimated Budget: <span className="budget"> $1500 Million </span>
            </h5>
        </div>
    );
};

export default Header;