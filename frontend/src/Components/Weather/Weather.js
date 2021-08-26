import './Weather.css';
import React from 'react';
// import Preloader from '../Preloader/Preloader';

export default function Weather() {
  return (
    <div className='weather'>
      <p className='weather__temp'>20 градусов</p>
      <p className='weather__source'>weather.com</p>
      <button type='button' className='weather__btn'>
        Узнать погоду
      </button>
    </div>
  );
}
