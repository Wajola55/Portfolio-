import React from 'react';
import './Projects.css';
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import Sales from '../../img/sales.png';
import Calculator from '../../img/mainpage.png';
import Chat from '../../img/1.lobbypage.png';
import App from '../../img/stock_price.png';
import Bitcoin from '../../img/bitcoin.png';
import 'swiper/swiper-bundle.css';

import {themeContext} from '../../Context';
import { useContext } from 'react';

// Install Swiper modules
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

const Projects = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="projects" id='Projects'>
      {/*heading*/}
      <span style = {{color: darkMode? 'white': ''}}>Recent Projects</span>
      <span>Portfolio</span>

      {/* slider */}
      <Swiper
      
        // navigation
        // pagination={{ clickable: true }}
        // scrollbar={{ draggable: true }}
        spaceBetween={10}
        slidesPerView={3}
        grabCursor={true}
        className='projects-slider'
      >
        <SwiperSlide>
        <a href="https://github.com/Wajola55/Bitcoin-Price" target="_blank" rel="noopener noreferrer">
          <img src={Bitcoin} alt="" />
        </a>  
          <div className="slide-title" style={{color: darkMode ? 'white' : 'black'}}>Bitcoin Price App </div>
        </SwiperSlide>


        <SwiperSlide>
        <a href="https://github.com/Wajola55/Sales-Dashboard-App" target="_blank" rel="noopener noreferrer">
          <img src={Sales} alt="" />
        </a>  
          <div className="slide-title" style={{color: darkMode ? 'white' : 'black'}}>Sales Dashboard </div>
        </SwiperSlide>

        <SwiperSlide>
        <a href="https://github.com/Wajola55/Stock-Price-App" target="_blank" rel="noopener noreferrer">
          <img src={App} alt="" />
        </a>  
          <div className="slide-title" style={{color: darkMode ? 'white' : 'black'}}>Stock Price</div>
        </SwiperSlide>

        <SwiperSlide>
          <a href="https://github.com/Wajola55/Food_calorie_calculator" target="_blank" rel="noopener noreferrer">
          <img src={Calculator} alt="" />
          </a>
          <div className="slide-title" style={{color: darkMode ? 'white' : 'black'}}>Food Calculator</div>
        </SwiperSlide>

        <SwiperSlide>
        <a href="https://github.com/Wajola55/videochat" target="_blank" rel="noopener noreferrer">
          <img src={Chat} alt="" />
        </a>  
          <div className="slide-title" style={{color: darkMode ? 'white' : 'black'}}>Video Chat</div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Projects;
