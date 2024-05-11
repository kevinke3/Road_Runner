import React, { useState, useEffect } from 'react';
import './App.css';
import AboutUs from './AboutUs';
import Home from './Home';
import Services from './Services';
import CarDetails from './CarDetails';

function App() {
  const [cars, setCars] = useState([]);

  useEffect(() => {
    fetch('db.json')
      .then(response => response.json())
      .then(data => setCars(data.cars))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <h1>Road Runner Motors</h1>
      </header>
      <main>
        <Home />
        <AboutUs />
        <Services cars={cars} />
      </main>
      <footer>
        <p>&copy; 2024 Road Runner Motors. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
