import React, { Component } from 'react';
import Header from './header.js';
import Izq from './izq.js';
import HeaderBajo from './headerbajo.js';
import Body from './body.js';
import Body2 from './body2.js';
import Body3 from './body3.js';


class App extends Component {
    constructor(props){
    super(props)
    
    }  
  
  render() {
    return (
      <div className="App">
        <Header/>
        <Izq/>
        <HeaderBajo/>
        <Body/>
        <Body2/>
        <Body3/>
      </div>
    );
    }
}

export default App;