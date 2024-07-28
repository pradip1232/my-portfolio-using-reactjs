import React from 'react';

export default function Home() {
  return (
    <div className="container home-container">
      <div className="row align-items-center">
        <div className="col-md-6">
          <h1 className="animate__animated animate__fadeInLeft">Welcome to my website</h1>
          <p className="animate__animated animate__fadeInLeft">Beast developer</p>
        </div>
        <div className="col-md-6 text-center">
          <img
            src="https://via.placeholder.com/300" // Replace with your image URL
            alt="Developer"
            className="img-fluid animate__animated animate__fadeInRight"
          />
        </div>
      </div>
    </div>
  );
}
