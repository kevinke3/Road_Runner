import React from 'react';

function CarDetails({ car }) {
  return (
    <div className="car">
      <h3>{car.name}</h3>
      <p>{car.description}</p>
    </div>
  );
}

export default CarDetails;
