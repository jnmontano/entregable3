import React from 'react'
import "./styles/Pagination.css"

const Pagination = ({numbersPage, setPage, location, RESIDENT_PERPAGE}) => {
  return (

    <ul className='pagination'>
      {
        numbersPage(location, RESIDENT_PERPAGE).map(numberPage => <li className='pagination-lista' onClick={() => setPage(numberPage)} key={numberPage}>{numberPage}</li>)
      }
    </ul>

  )
}

export default Pagination
