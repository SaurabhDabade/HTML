

import React, { useState } from 'react';

function Component1() {
    const cities = ['New York', 'London', 'Paris', 'Tokyo', 'Sydney'];
    const [selectedCity, setSelectedCity] = useState('');

    const handleCityChange = (event) => {
        setSelectedCity(event.target.value);
    };

    return (
        <div>
            <label htmlFor="city">Select a city:</label>
            <select id="city" value={selectedCity} onChange={handleCityChange}>
                <option value="">Select</option>
                {cities.map((city, index) => (
                    <option key={index} value={city}>
                        {city}
                    </option>
                ))}
            </select>

            {selectedCity && <Component2 city={selectedCity} />}
        </div>
    );
}

function Component2({ city }) {
    const reversedCity = city.split('').reverse().join('');

    return (
        <p style={{ color: 'red' }}>{reversedCity}</p>
    );
}

export default Component1;
