import React from 'react';

const year = new Date().getFullYear();
// console.log(year);

const Footer = () => {
    return (
        <footer>
            <p>copyright @ {year}</p>
        </footer>
    );
};

export default Footer;