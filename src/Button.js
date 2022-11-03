import React from 'react';
import './Button.css';

const Button = () => {
  return (
    <div>
      <a href="https://twitter.com/olurhantee"> Twitter Link </a>
      <a id="btn__zuri" href="https://training.zuri.team/">
        Zuri Team
      </a>
      <a
        id="books"
        href="http://books.zuri.team/"
        title="this is where you find books about design and coding"
      >
        Zuri Books
      </a>
      <a
        id="book__python"
        href="https://books.zuri.team/python-for-beginners?ref_id=Folarinde"
        title="Get resources to kick off your tech careers"
      >
        Python Books
      </a>
      <a
        id="pitch"
        href="https://background.zuri.team/"
        title="Validate your codes affordably"
      >
        Background Check for Coders
      </a>
      <a
        id="book__design"
        href="https://books.zuri.team/design-rules"
        title="Get the free design rule book by Zuri"
      >
        Design Books
      </a>
      <a id="contact" href="/contact">
        Contact Me
      </a>
    </div>
  );
};

export default Button;
