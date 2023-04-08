import React from 'react';
import './Footer.css'

import Insta from '@iconscout/react-unicons/icons/uil-instagram'
import LinkedIn from '@iconscout/react-unicons/icons/uil-linkedin'
import Github from '@iconscout/react-unicons/icons/uil-github'
import {themeContext} from '../../Context';
import { useContext } from 'react';

const Footer = () => {
    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;
    const iconColor = darkMode ? 'white' : 'black';

    return (
        <div className="footer">
            <div className="f-content">
                <span style = {{color: darkMode? 'white': ''}}>koczorwioletta@gmail.com</span>
                <div className="f-icons">
                    <a href="https://www.instagram.com/wiolettakoczor/" target="_blank" rel="noopener noreferrer">
                        <Insta color={iconColor} size='3rem'/>
                    </a>
                    <a href="https://www.linkedin.com/in/wioletta-koczor-3b8a02265/" target="_blank" rel="noopener noreferrer">
                        <LinkedIn color={iconColor} size='3rem'/>
                    </a>
                    <a href="https://github.com/Wajola55" target="_blank" rel="noopener noreferrer">
                        <Github color={iconColor} size='3rem'/>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Footer;

