import React from 'react'
import "./components/styles/ResidentForm.css"

const ResidentForm = ({handleSubmit}) => {
  return (
    <form className='residentForm' onSubmit={handleSubmit}>
      <input className='residentForm-input' type="text" id='idLocation' placeholder='Type a Location id' />
      <button className='residentForm-search'>SEARCH</button>
    </form>
  )
}

export default ResidentForm
