import React from 'react';

class Weather extends React.Component{
	      
        render(){

            return(
            	
            	<div>

 

                {this.props.longitude && this.props.latitude && <p> Latitude: {this.props.latitude} Longitude:{this.props.longitude}</p>}
                { this.props.place && <p> place:{this.props.place}</p>}
                { this.props.temperature && <p> temperature:{this.props.temperature}</p>}
                { this.props.humidity &&  <p>humidity: {this.props.humidity}</p>}
                { this.props.pressure && <p>Pressure: {this.props.pressure }</p>}
                { this.props.windspeed && <p> Windspeed:{this.props.windspeed} </p>}
                { this.props.description && <p>Description: {this.props.description} </p>}
                { this.props.error && <p> Error Occured : {this.props.error}</p>}



            	</div>

            );
      
        }


};

export default Weather;