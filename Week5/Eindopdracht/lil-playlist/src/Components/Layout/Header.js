import React from 'react';
import {Link} from 'react-router-dom';

const Header = () => {
    return (
        <header>
            <h1>WincAcademy Lil' Playlist</h1>
            <Link style={linkStyle} to="/">Home</Link> | <Link style={linkStyle} to="/About">About</Link>
        </header>
    )
}
export default Header

const linkStyle={
    fontSize: "24px"
}