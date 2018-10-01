import React, { Component } from 'react';
import './App.css';
import Nav from './component/nav';
import Carousal from './component/carausal';

const images=[
  1,2,3,
  <img src="https://images.pexels.com/photos/206673/pexels-photo-206673.jpeg?auto=compress&cs=tinysrgb&h=350" alt="scenery" width="1000px" height="400px" />,
];

var carousalstyle = {
  margin:'50px auto',
}

const menu = {
  left:[
    'Brand-logo',
  ],
  right:[
    <a href="https://www.google.com">login</a>,
    'signup'
  ],
  style:{
    backgroundColor:'rgba(222,0,0,0.6)',
    boxShadow:'0px 5px 10px -2px #000'
  }
  // responsivness:{

  // }
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <Nav pos='navbar sticky' menu={menu} />
        <Carousal items={images} style={carousalstyle}/>
      </div>
    );
  }
}

export default App;
