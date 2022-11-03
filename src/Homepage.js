import React from 'react';
import Button from './Button';
import Social from './Social';
import Footer from './Footer';
import Profile from './Profile';

const Homepage = () => {
  return (
    <div>
      <Profile />
      <Button />
      <Social />
      <Footer />
    </div>
  );
};

export default Homepage;
