import React from 'react';
import './Button.css';
import share from './assets/shareicon.svg';

const Profile = () => {
  return (
    <div className="profile">
      <img id="share" title="Share Link" src={share} alt="share" />
      <div id="profile__img"></div>
      <h3 id="twitter">Olurhantee</h3>
      <h4 id="slack">Folarinde</h4>
    </div>
  );
};

export default Profile;
