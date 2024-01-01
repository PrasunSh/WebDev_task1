import React from 'react';
import './styles.css';
import 'animate.css';

const WalkingMan = () => {
  return (
    <div className="Feat animate__animated animate__bounceInDown animate__delay-1s">
      <div className="walking">
        <div className="head"></div>
        <div className="body"></div>
        <div className="firstLeg"></div>
        <div className="secondLeg"></div>
        <div className="shadow"></div>
      </div>
    </div>
  );
};

export default WalkingMan;