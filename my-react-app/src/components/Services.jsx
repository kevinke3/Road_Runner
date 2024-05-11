import React from 'react';
import CarDetails from './CarDetails';

function Services({ cars }) {
  return (
    <section>
      <h2>Our Vehicles</h2>
      <div className="vehicle-list">
        {cars.map(car => (
          <CarDetails key={car.id} car={car} />
        ))}
      </div>
    </section>
  );
}

export default Services;
