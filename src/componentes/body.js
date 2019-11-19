import React, { Component } from 'react';
import './App.css';

export default class Body extends Component {
  
  constructor(props){
    super(props)
  }
  
  render() {
    return (
      <div className="body">
          <i className="fas fa-cog cog"></i>
          <i className="fas fa-play play"></i>
          <i className="fas fa-volume-up sound"></i>
          <div className="rectangulo2">
            <div className="linea4"></div>
          </div>
          <i className="fas fa-expand expand"></i>
          <div className="foto2">
            <div className="textoWatch"> Watch Now </div>
            <div className="rectangulo">
            </div>
            <i className="fas fa-times equis"></i>
          </div>
      </div>
    )
  }
}