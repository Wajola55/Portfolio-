import React from 'react';
import './intro.css'
import Github from '../../img/github.png';
import LinkedIn from '../../img/linkedin.png';
import Instagram from '../../img/instagram.png';
import Wiola from '../../img/Wiola.png';
import codes from '../../img/codes.png';
import FloatingDiv from '../FloatingDiv/FloatingDiv';
import Binary from '../../img/binary_code.png';
import {themeContext} from '../../Context';
import { useContext } from 'react';



const Intro = () => {



    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;
    return (
        <div className="intro">
            <div className="i-left">
            <div className="i-name">
            
                <span style = {{color: darkMode? 'white': ''}}>Hi there! I am</span>
                <span>Wioletta Koczor</span>
                <div class="narrow-text">
                <span>A Python fan, diving into the digital pool, splashing around with code, and having a blast one line at a time. With an insatiable appetite for knowledge, I'm constantly exploring new realms of programming, perfecting my craft, and staying on the cutting edge of industry trends. I believe that learning should be fun, so I mix amusement with ambition as I build an ever-growing arsenal of programming skills.
                    <br />
                    Join me on this epic journey as we tackle coding conundrums, debug dilemmas, unravel the mysteries of algorithms, and master the art of software sorcery. As we navigate the vast seas of syntax and sail through the swirling storms of software development, we'll share a few laughs, learn some valuable lessons, and grow together as we conquer each challenge.
                    <br />
                    <br />
                    Step into the wild world of Wioletta's wacky web dev wonderland, where code comes to life, and the digital adventure never ends! Welcome aboard, fellow coding enthusiasts - let's make some magic together!
                </span>
            </div>
        </div>
            <button className="button i-button">Hire me</button>
            <div className="i-icons">

                <a href="https://github.com/Wajola55" target="_blank" rel="noopener noreferrer">
                <img src={Github} alt="" />
                </a>
                <a href="https://www.linkedin.com/in/wioletta-koczor-3b8a02265/" target="_blank" rel="noopener noreferrer">
                <img src={LinkedIn} alt="" />
                </a>

                <a href="https://www.instagram.com/wiolettakoczor/" target="_blank" rel="noopener noreferrer">
                <img src={Instagram} alt="" />
                </a>
            </div>

            </div>
            <div className="i-right">
                <FloatingDiv image={Binary} txt1="Code" txt2="Adventurer" className="floating-div-left" />
                <img src={Wiola} alt="" style={{ marginLeft: '10px' }}/>
                <div style={{top: '-4%', left: '68%'}}>
                    <FloatingDiv image={codes} txt1='Function' txt2='Fanatic'/>
                </div>
    </div>
        </div>
    )
}

export default Intro