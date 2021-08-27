import React, { useState } from 'react';
import getWeather from '../../utils/mainApi';
import Preloader from '../Preloader/Preloader';
import './Weather.css';

export default function Weather() {
  const [apiData, setApiData] = useState({ temp: '', source: '' });
  const [loading, setLoading] = useState(false);
  const buttonStyle = `weather__btn ${
    loading ? 'weather__btn_type_disabled' : 'weather__btn_type_inabled'
  }`;
  const handleButtonClick = () => {
    setLoading(true);
    getWeather().then((res) => {
      setApiData(res);
      setTimeout(() => setLoading(false), 1000);
    });
  };
  console.log(apiData);
  return (
    <>
      <div className='weather'>
        {loading ? <Preloader /> : <WeatherInfo data={apiData} />}
        <button
          className={buttonStyle}
          onClick={handleButtonClick}
          disabled={loading}
        >
          Узнать погоду
        </button>
      </div>
    </>
  );
}

function WeatherInfo({ data }) {
  const { temp, source } = data;
  return (
    <>
      <p className='weather__temp'>
        {temp && `В Москве сейчас ${temp} градусов`}
      </p>
      <p className='weather__source'>
        {source && `Информация предоставлена сайтом  ${source}`}
      </p>
    </>
  );
}
