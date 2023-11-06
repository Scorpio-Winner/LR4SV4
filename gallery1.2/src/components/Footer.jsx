import React from 'react'

import '../styles/Footer.css';

class Footer extends React.Component {
    render() {
        return (
            <footer className='Footer'>
                <a href="https://github.com/Scorpio-Winner" target="_blank" rel='noreferrer'>GitHub</a>
                <span>&copy; 2023</span>
            </footer>
        )
    }
}

export default Footer;