import React, { Component } from 'react';
import './App.css';

export default class Body2 extends Component {
  
  constructor(props){
    super(props)
  }
  
  render() {
    return (
      <div className="body2">
          <div className="textoBest">Best POV Worldwide!</div>
          <div className="foto3"></div>
          <div className="textoCategory">Category: </div>
          <div className="textoCOD">Call of Duty: Black Ops 4 </div>
          <div className="punto">.</div>
          <div className="textoTeam">Team: </div>
          <div className="lg">Luminosity Gaming </div>
          <div className="english">English </div>
          <div className="fps">FPS </div>
          <div className="shooter">Shooter </div>
          <i className="fas fa-eye eye"></i>
          <div className="views">6,691,703 </div>
          <div className="puntos">...</div>
          <i class="fas fa-upload upload"></i>
          <div className="mensaje">
            <i className="far fa-comment-alt fa-cs mensajeIcono"></i>
          </div>
      </div>
    )
  }
}