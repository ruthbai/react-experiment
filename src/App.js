import React from "react";
import Titles from "./components/Titles";
import Form from "./components/Form";
import Weather from "./components/Weather";

const API_KEY = "0732a0e505d94621762381e39a11559a";


class App extends React.Component {

    state= {
     temperature: undefined,
     city: undefined,
     country: undefined,
     humidity: undefined,
     description: undefined,
     error: undefined
    }


    getWeather = async (e) => { //need to call event (e) in order to use in underneath
        e.preventDefault(); //prevents from refreshing the page
        const city = e.target.elements.city.value;
        const country = e.target.elements.country.value;
        const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}&units=metric`);
    const data = await api_call.json();
    console.log(data);
    }
    render() {
        return (
            <div>
                <Titles />
                <Form getWeather={this.getWeather}/>
                <Weather />
            </div>
        );
    }
}

export default App;