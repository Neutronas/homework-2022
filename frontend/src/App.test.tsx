import React from "react";
import { render, screen } from "@testing-library/react";
import City from "./components/City";
import InputField from "./components/InputField";

test("City component renders given name", () => {
    render(
        <City
            name="CityName"
            country="CountryName"
            timezone="TimeZone"
            image="test"
        />
    );
    const linkElement = screen.getByText(/CityName/);
    expect(linkElement).toBeInTheDocument();
});

test("Search component renders input field", () => {
    render(<InputField name="CityName" onChange={() => console.log("test")} />);
    const linkElement = screen.getByRole("textbox");
    expect(linkElement).toBeInTheDocument();
});
