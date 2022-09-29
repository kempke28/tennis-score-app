import React from 'react';
import './Style/backgroundFrame.css';

export default function Background() {
  const images = [];

  images[1] = './images/1.jpg';
  images[2] = './images/2.jpg';
  images[3] = './images/3.jpg';
  images[4] = './images/4.jpg';
  images[5] = './images/5.jpg';
  images[6] = './images/6.jpg';
  images[7] = './images/7.jpg';
  images[8] = './images/8.jpg';
  images[9] = './images/9.jpg';
  images[10] = './images/10.jpg';
  images[11] = './images/11.jpg';
  images[12] = './images/12.jpg';
  images[13] = './images/13.jpg';
  images[14] = './images/14.jpg';
  images[15] = './images/15.jpg';
  images[16] = './images/16.jpg';
  images[0] = './images/17.jpg';

  const randomImg = Math.floor(Math.random() * images.length);

  return (
    <div>
      <img
        className="backgroundFrame"
        style={{ backgroundImage: `url(${images[randomImg]})` }}></img>
    </div>
  );
}
