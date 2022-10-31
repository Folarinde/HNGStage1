import React from 'react';
import slack from './assets/slack.png';
import github from './assets/github.png';
import './Button.css';

const Social = () => {
  return (
    <div className="social">
      <img src={slack} alt="slack" />
      <img src={github} alt="github" />
    </div>
  );
};

export default Social;
