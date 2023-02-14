import React from 'react'

const ForecastData = ({item, id}) => {

    let weekdays = new Array(7);
        weekdays[0] = "Sunday";
        weekdays[1] = "Monday";
        weekdays[2] = "Tuesday";
        weekdays[3] = "Wednesday";
        weekdays[4] = "Thursday";
        weekdays[5] = "Friday";
        weekdays[6] = "Saturday";

    const { weather, main, wind,  dt_txt} = item

    let bla = new Date(dt_txt)
    // console.log(weekdays[bla.getDay()]);
    


  return (
    <div className='forecast-item'>
          <div className="forecast-item-top">
              <div>
              <h1>{weekdays[bla.getDay()]}</h1>
                  <img src={`http://openweathermap.org/img/wn/${weather[0].icon}.png`} alt="forecast" />
                  <p className='bla'>{weather[0].description}</p>
                  
              </div>
              <div>
                  
                  <p style={{textDecoration: 'underline'}}>{dt_txt}</p>
                  <h3>{Math.round(main.temp)}<sup>o</sup>C</h3>
                  
                  <p>Min Temp:  {Math.round(main.temp_min)}<sup>o</sup>C</p>
                  <p>Max Temp:  {Math.round(main.temp_max)}<sup>o</sup>C</p>
              </div>
          </div>
          <div className='forecast-item-bottom'>
            <h1>Informations</h1>
            <div className='forecast-bottom-item'>
                <div>
                    <span>Feel like</span>
                    <span>{Math.round(main.feels_like)}<sup>o</sup>C</span>
                </div>
                <div>
                <span>Wind</span>
                    <span>{wind.speed} m/s</span>
                </div>
                <div>
                <span>Humidity</span>
                    <span>{main.humidity}%</span>
                </div>
                <div>
                <span>Pressure</span>
                    <span>{main.pressure} hPa</span>
                </div>
            </div>
          </div>
        {/* <p>{dt_txt}</p>
        <p>{weekdays[bla.getDay()]}</p>
        <p>{weather[0].description}</p>
        <p>{main.feels_like}</p>
        <p>{main.temp}</p>
        <p>{main.temp_max}</p>
        <p>{main.temp_min}</p>
        <p>{main.humidity}</p>
        <p>{main.pressure}</p>
        <p>{wind.speed}</p> */}
    </div>
  )
}

export default ForecastData