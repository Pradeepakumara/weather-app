
import { useState } from 'react';
import { weatherApiKey, WeatherApiUrl } from './api/api';
import './App.css';
import CurrentWeather from './components/currentWeather/CurrentWeather';
import Footer from './components/Footer';
import Forecast from './components/forecast/Forecast';
import Header from './components/Header';
import Search from './components/search/Search';

function App() {

  const [status, setStatus] = useState(false)

  const [currentWeather, setCurrentWeather] = useState(null);
  const [forecast, setForecast] = useState(null)

  const handleOnSearch = (searchData) => {
    console.log(searchData);
    const [lat, lon] = searchData.value.split(' ');

    const currentWeatherFetch = fetch(`${WeatherApiUrl}/weather?lat=${lat}&lon=${lon}&appid=${weatherApiKey}&units=metric`)

    const forecastFetch = fetch(`${WeatherApiUrl}/forecast?lat=${lat}&lon=${lon}&appid=${weatherApiKey}&units=metric`)

    Promise.all([currentWeatherFetch, forecastFetch])
      .then(async (response) => {
        const weatherResponse = await response[0].json();
        const forecastResponse = await response[1].json();

        setCurrentWeather({ city: searchData.label, ...weatherResponse });
        setForecast({ city: searchData.label, ...forecastResponse });
      })
      .catch((err) => console.log(err));
  }

  console.log(currentWeather);
  console.log(forecast);
  console.log(status);

  return (
    <>
    <div className='navbar-main'>
        <div className='navbar-brand'>
          <h1>Weather Api</h1>
        </div>
        <div className='navbar-search'>
        <Search onSearchChange={handleOnSearch} />
        </div>
      </div>
      <Header />
    <div className="container">
      
      {/* <Search onSearchChange={handleOnSearch} /> */}
      {/* <CurrentWeather data={currentWeather} /> */}
      {currentWeather && <CurrentWeather data={currentWeather} />}
      {currentWeather && <div className='button-container'>
            <h2>Would you like to see the next 5 days complete weather details please click below button</h2>
            <button onClick={() => setStatus(!status)} className='btn'>Click Here</button>
        </div>}
      {/* <button onClick={() => setStatus(!status)}>click me</button> */}
      { forecast && status && <Forecast data={forecast} />}
      {currentWeather && <Footer />}
    </div>
    </>
  );
}

export default App;
