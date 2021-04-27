import React from  'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay';
import Spinner from './Spinner'

// const App = () => {   
//     return (
//     <div>Laitide :</div>
//     );
// };

class App extends React.Component{
    // constructor(props) {
    //     super(props);

    //     this.state = {lat: null , errorMessage : ''};
    // }
    
    state = {lat : null , errorMessage : ''};

    componentDidMount() {
        window.navigator.geolocation.getCurrentPosition(
            position => this.setState({lat : position.coords.latitude}),
            err => this.setState({errorMessage :err.message })
          );
    }
   
    // render () {
        //   return (
        //      <div> 
        //       Latitude :{this.state.lat} 
        //       <br/>
        //       Error : {this.state.error}  
        //     </div>
        //   );
    renderContent() {
        if (this.state.errorMessage && !this.state.lat) {
            return <div>Error : {this.state.errorMessage}</div>
        }

        if (!this.state.errorMessage && this.state.lat){
            // return <div>Latitude : {this.state.lat}</div>
            return <SeasonDisplay lat = {this.state.lat}/>           
         }

            return <Spinner message = "Please accept location request"/>;
    //
    }
    
    render () {
            return (
                <div className ="border red">
                    {this.renderContent()}
                </div>
            );
    }
};


ReactDOM.render(
    <App/>, document.querySelector('#root')
);