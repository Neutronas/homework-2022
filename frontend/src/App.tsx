import React, { useEffect, useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import InputField from "./components/InputField";
import City from "./components/City";

const fetchCities = async (title: string) => {
    let response = await fetch(
        `http://localhost:3001/autocomplete?title=${title}`
    );
    let cities = await response.json();
    return cities.data;
};

function App() {
    const [cities, setCities] = useState([]);
    const handleSearchChange = (text: string): void => {
        fetchCities(text).then((returnedCities) => setCities(returnedCities));
    };

    useEffect(() => {
        fetchCities("").then((returnedCities) => setCities(returnedCities));
    }, []);

    return (
        <div className="App">
            <InputField
                name="city"
                onChange={handleSearchChange}
                placeholder="Search..."
            />
            {cities.length > 0 &&
                cities.map((city: any, index: number) => {
                    return (
                        <City
                            key={index}
                            name={city.displayname}
                            timezone={city.timezone}
                            country={city.country}
                            image={city.destination_images.image_jpeg}
                        ></City>
                    );
                })}
        </div>
    );
}

export default App;
