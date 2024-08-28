import React from 'react'
import Spinner from 'react-bootstrap/Spinner';
const Loader = () => {
  return (
    <div className='loader'>
    <Spinner animation="border" role="status" variant="success" >
    <span className="visually-hidden">Loading...</span>
    </Spinner>
    </div>
  )
}

export default Loader