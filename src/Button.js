import React from 'react';
import './Button.css';

const Button = () => {
  return (
    <div>
      <a href="https://twitter.com/olurhantee"> Twitter Link </a>
      <a id="btn_zuri" href="https://training.zuri.team/">
        {' '}
        Zuri Team{' '}
      </a>
      <a id="books" href="http://books.zuri.team/">
        {' '}
        Zuri Books{' '}
      </a>
      <a
        id="book_python"
        href="https://books.zuri.team/python-for-beginners?ref_id=Folarinde"
      >
        {' '}
        Python Books{' '}
      </a>
      <a id="pitch" href="https://background.zuri.team/">
        {' '}
        Background Check for Coders{' '}
      </a>
      <a id="book_design" href="https://books.zuri.team/design-rules">
        {' '}
        Design Books{' '}
      </a>
    </div>
  );
};

export default Button;
