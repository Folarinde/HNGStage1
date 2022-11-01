import React from 'react';
import './Button.css';
import share from './assets/share.png';

const Profile = () => {
  return (
    <div className="profile">
      <img id="share" src={share} alt="share" />
      <div id="profile__img"></div>
      <h3 id="twitter">Olurhantee</h3>
      <h4 id="slack">Folarinde</h4>
    </div>
  );
};

export default Profile;
