import React from 'react'


const CurrentWeather = ({ data }) => {

    const { city, weather, main, wind } = data;

    return (
        <>
        <div className='weather-container'>
            <div className='weather-top'>
                <div className='weather-pos'>
                    <h1 className='weather-city'>{city}</h1>
                    <h3 className='weather-desc'>{weather[0].description}</h3>
                    <p className='weather-temperature'>{Math.round(main.temp)}<sup>o</sup>C</p>
                    
                </div>
                <div className='weather-image-pos'>
                    <img src={`http://openweathermap.org/img/wn/${weather[0].icon}.png`} alt="wether" className='weather-image' />
                    
                </div>
            </div>
            <div className='weather-details'>
                        <h2>informations</h2>
            </div>
            <div className="weather-center">
                    
                    <div className='weather-detail-item '>
                    <span>Feels like</span>
                        <span>{Math.round(main.feels_like)}<sup>o</sup>C</span>
                    </div>
                    <div className='weather-detail-item'>
                    <span>Wind</span>
                        <span>{wind.speed} m/s</span>
                    </div>
                    <div className='weather-detail-item'>
                    <span>Humidity</span>
                        <span>{main.humidity}%</span>

                    </div>
                    <div className='weather-detail-item'>
                        <span>Pressure</span>
                        <span>{main.pressure
                        } hPa</span>
                    </div>
            </div>
        </div>
        
      </>
    )
}

export default CurrentWeather