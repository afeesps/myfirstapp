import React from  "react";
import Titles from "./components/Titles";
import Forms from  "./components/Forms";
import Weather from "./components/Weather";
const API_KEY = "dcf579ca4ffd077667205711e0c20546";


class App extends React.Component {

   state = {

       temperature: undefined,
       place:undefined,
       humidity: undefined,
       pressure: undefined,
       city: undefined,
       windspeed: undefined,
       description: undefined,
       error: undefined

   }

   getWeather = async(e) => {

     e.preventDefault();
     const latitude = e.target.elements.latitude.value;
     const longitude = e.target.elements.longitude.value;

     const api_call = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}`);
     const data = await api_call.json();
     

     if(latitude && longitude)
     {

     	console.log(data);
    
     this.setState({
        temperature: data.main.temp,
        place:data.name,
        humidity: data.main.humidity,
        pressure: data.main.pressure,
        windspeed:data.wind.speed,
        description:data.weather[0].description,
        error:""
     });
     
     }
     else{
      this.setState({
       temperature: undefined,
       place:undefined,
       humidity: undefined,
       pressure: undefined,
       windspeed: undefined,
       description: undefined,
       error:"latitude or longitude empty"
      });

     }

   }

    render() {

        return (

            <div>
             <Titles/>
             <Forms getWeather={this.getWeather}/>
             <Weather 
                
                place={this.state.place}
                temperature={this.state.temperature}
                humidity={this.state.humidity}
                pressure={this.state.pressure}
                windspeed={this.state.windspeed}
                description={this.state.description}
                error={this.state.error}
             />
            </div>	

    	);

    }
};

export default App;