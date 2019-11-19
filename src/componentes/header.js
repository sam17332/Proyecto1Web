import React, { Component } from 'react';
import './App.css';

export default class Header extends Component {
  
  constructor(props){
    super(props)
  }
  
  render() {
    return (
      <div className="header">
          <div className="header1">
            <p className="textoDiscover">Discover</p>
            <p className="textoFollowing">Following</p>
            <p className="textoBrowse">Browse</p>
            <p className="textoTryPrime">Try Prime</p>
            <i className="fas fa-ellipsis-h textoPuntos"></i>
          </div>
          <div className="header2">
            <input className="input" placeholder="Search" autoCapitalize="off" autoCorrect="off" spellCheck="false"></input>
            <div className="div2">
              <i className="fas fa-search fa-lg search"></i>
            </div>
          </div>
          <div className="header3">
            <i className="fas fa-crown corona"></i>
            <i className="far fa-bell campana"></i>
            <div className="div">
              <i className="fas fa-sort bits" ></i>
              <p className="textoBits">Get Bits</p>
            </div>
            <div className="foto">
              <div className="circulo"></div>
            </div>
          </div>
      </div>
    )
  }
}