import React from 'react';
import ReactDOM from 'react-dom';

function Car() {
  
    return <h2>I am a {this.props.brand.model}!</h2>;
  
}

function Garage () {
  
    const carinfo = {name: "Ford", model: "Mustang"};
    return (
      <div>
      <h1>Who lives in my garage?</h1>
      <Car brand={carinfo} />
      </div>
    );
  }
ReactDOM.render(<Garage />, document.getElementById('root'));