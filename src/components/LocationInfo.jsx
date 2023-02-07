import React from 'react'
import "./styles/LocalInfo.css"

const LocationInfo = ({location}) => {
  return (
    <section className='localInfo'>
      <h2 className='localInfo_name'>{location?.name}</h2>
      <ul className='localInfo_lista'>
        <li><span>Type: </span>{location?.type}</li>
        <li><span>Dimension: </span>{location?.dimension}</li>
        <li><span>Population: </span>{location?.residents.length}</li>
      </ul>
    </section> 
  )
}

export default LocationInfo
