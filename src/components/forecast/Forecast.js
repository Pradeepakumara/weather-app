import React from 'react'
import ForecastData from './ForecastData'

const Forecast = ({data}) => {
  return (
    <div className='forecast-section'>
      <div className='forecast-container'>
        {data.list.map((item, idx) => 
          <ForecastData key={idx} item={item} id={idx} />
        )}
      </div>
    </div>
  )
}

export default Forecast