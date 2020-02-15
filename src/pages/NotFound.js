import React from 'react';
import NavBar from '../components/NavBar';

const NotFound = () => {
  return (
    <>
    <NavBar />
    <div className="wrapper">
      <h2>404 - Not Found</h2>

      <div className="wrapper-status">
        The page you seek cannot be found :(
      </div>
    </div>
    </>
  )
}

export default NotFound;
