import React from 'react';
import ReactDOM from 'react-dom';

const Car = () =>(
     <h2>I am a {this.props.brand.model}!</h2>
);

const Garage =()=>(
      <div>
      <h1>Who lives in my garage?</h1>
      <Car brand={carinfo} />
      </div>
);
ReactDOM.render(<Garage />, document.getElementById('root'));