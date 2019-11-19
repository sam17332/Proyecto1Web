import React, { Component } from 'react';
import './App.css';

export default class Izq extends Component {
  
  constructor(props){
    super(props)
  }
  
  render() {
    return (
      <div className="izq">
        <div className="cuadro">
          <i className="fab fa-twitch fa-lg imagen"></i>
        </div>
        <div className="cuadro1">
          <div className="linea"></div>
          <i className="fas fa-arrow-right fa-sm leftt"></i>
          <i className="far fa-heart corazon"></i>
        </div>
        <div className="cuadro2">
          <div className="twitch1"></div>
          <div className="twitch2"></div>
          <div className="twitch3"></div>
          <div className="twitch4"></div>
          <div className="twitch5"></div>
          <div className="twitch6"></div>
          <div className="twitch7"></div>
          <div className="twitch8"></div>
          <i className="fas fa-video video"></i>
        </div>
        <div className="cuadro3">
          <div className="twitch9"></div>
          <div className="twitch10"></div>
          <div className="twitch11"></div>
          <i className="fas fa-user-friends friends"></i>
          <div className="twitch12"></div>
        </div>
      </div>
    )
  }
}