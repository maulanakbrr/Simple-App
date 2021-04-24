import React from 'react';
import { Spinner } from 'react-bootstrap';

import './Loader.css';

const Loader = () => {
  return (
    <div className='loader-container'>
      <Spinner animation='border' role='status' className='loader-item'>
        <span className='sr-only'>Loading...</span>
      </Spinner>
    </div>
  )
}

export default Loader