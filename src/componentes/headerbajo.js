import React, { Component } from 'react';
import './App.css';

export default class HeaderBajo extends Component {
  
  constructor(props){
    super(props)
  }
  
  render() {
    return (
      <div className="headerbajo">
        <div className="formal"></div>
        <div className="textoFormal"> FORMAL</div>
        <div className="circuloMorado">
          <i className="fas fa-check fa-xs check"></i>
        </div>
        <div className="textoHome"> Home
        <div className="linea2"></div>
        </div>
        <div className="textoVideos"> Videos</div>
        <div className="textoClips"> Clips</div>
        <div className="textoEvents"> Events</div>
        <div className="textoFollowers"> Followers</div>
        <div className="botonCorazon">
          <i className="fas fa-heart corazon2"></i>
        </div>
        <div className="botonCampana">
          <i className="fas fa-bell campana2"></i>
        </div>
        <div className="botonSub">
        <div className="resubscribe"> Resubscribe
          <i className="far fa-star star"></i>
          <i className="fas fa-chevron-down fa-sm flecha"></i>
          <i className="fas fa-arrow-left fa-sm rightt"></i>
          <div className="linea3"></div>
        </div>
        </div>
      </div>
    )
  }
}