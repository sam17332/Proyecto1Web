import React, { Component } from 'react';
import './App.css';

export default class Body3 extends Component {
  
  constructor(props){
    super(props)
  }
  
  render() {
    return (
      <div className="body3">
          <div className="rules">Stream Rules:</div>
          <div className="fotoFormal"></div>
          <div className="textoFormal2">Hey guys! Thanks for checking out the stream! Not many rules in here, just try not to spam, say too many vulgar things, and I don't like chat arguments. The only things that get you banned are ALL CAPS, spamming, posting other stream links, or personally attacking others. Enjoy the stream!</div>
          <div className="fotoSubs"></div>
          <div className="fotoscuf"></div>
          <div className="fototwitch"></div>
          <div className="textoFollow">Follow & Subscribe:</div>
          <div className="textoBenefits">Subscription benefits?</div>
          <div className="fotoYT"></div>
          <div className="fotoF"></div>
          <div className="donations">Donations!</div>
          <div className="fotoDonate"></div>
          <div className="textoDonations">Also, if you enjoy the stream or want to support me in any way you can, donate! Any donation is greatly appreciated and will go towards making my stream even better </div>
          <div className="fotolg"></div>
          <div className="textoEquipment">Stream Equipment:</div>
          <div className="textoBenefits2">
                <p>You get an awesome icon (Which I think looks awesome and hopefully you do too)</p> 
                <p>You are eligible for giveaways</p> 
                <p>I want you to sub because you want to, don't ever feel forced to. Much love</p> 
            </div>
            <div className="textoSetUp">
                <p>My set up is pretty basic.</p> 
            </div>
            <div className="textoSetUp2">
                <p>AVERMedia Capture Card</p>
                <p>Asus Monitor</p>
                <p>Astro Gaming Headset</p>
                <p>Scuf Controller</p> 
            </div>
            <div className="textoTwitter">Follow my Twitter!</div>
            <div className="fotoTwitter"></div>
            <div className="textoFrequently">Frequently Asked Questions?!</div>
            <div className="fotoFAQ"></div>
            <div className="textoFAQ">
                <p>Here are some of the questions that I see the most!</p>
                <p><div>What are you doing with your bottle?</div>I'm either sniffing it or taking really small sips of water, what else would I be doing?</p>
                <p><div>Why do you always wear a hat?</div>My hair is a bit too long to be seen without one currently, it would just look stupid.</p>
                <p><div>What sensitivity do you use?</div>I play on 10-10 .25 (try it) (don't actually try it this was just a weird gimick at the start of the game and I've been rolling with it, I play 6-6 .75)</p>
                <p><div>f I subscribe will you follow me on Twitter?</div>No, I do not follow all subs, I don't want you to basically pay for a twitter follow, I want you to subscribe because you want to!</p>
            </div>
      </div>
    )
  }
}