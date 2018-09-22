import React from 'react';

class Forms extends React.Component{
	      
        render(){

            return(
            	
            	<form onSubmit={this.props.getWeather}>
                    <input name="latitude" type="text" placeholder="latitude.."/>
                    <input name="longitude" type="text" placeholder="longitude..."/>
                    <button>Submit</button>
            	</form>

            );
      
        }


};

export default Forms;