import React from 'react';

const year = new Date().getFullYear();
function Footer() {
    return (
        <footer>
            <p>&copy; {year} Jonathan Spurling. All rights reserved.</p>
        </footer>
    )
}

export default Footer;