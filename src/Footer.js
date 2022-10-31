import React from 'react';
import './Button.css';
import zuri from './assets/zuri.png';
import footer_text from './assets/footer_text.png';
import i4g from './assets/I4G.png';

const Footer = () => {
  return (
    <div>
      <hr></hr>
      <div className="footer">
        <img src={zuri} alt="zuri" />
        <img src={footer_text} alt="footer_text" />
        <img src={i4g} alt="i4g" />
      </div>
    </div>
  );
};

export default Footer;
