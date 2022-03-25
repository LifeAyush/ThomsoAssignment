import React, { Component } from 'react'

import img from './images/rec.png'
import img2 from './images/back2.png'
import img3 from './images/unknown.png'
export class Main extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         key:1,
         keyy:1
      }
    }
    changeOne=()=>{
        console.log("chal gya")
        this.state.key==1?this.setState({key:2}):this.setState({key:1})
    }
    changeTwo=()=>{
        console.log("chal gya")
        this.state.keyy==1?this.setState({keyy:2}):this.setState({keyy:1})
    }
  render() {
    return (
      <div className='bdaDiv'>
          <p id="infra">INFRASTRUCUTRE</p>
    <p id="ssy">{this.state.key==1?"Surakshit Sadak Yojana":"Vande Bharat Express"}</p>
    <p id="paraText">
        {this.state.key==1?<div>In may 2016 the PM Surakshit Sadak Yojana earmarked Rs 2000 cr to
      eliminate the danger zones on highways that were death traps for vehicals;
      India has the highest number of road fatalities in the world, then the
      estimated at more than 231,000 by the World Health Organzation.
    </div>:<div id="para2">Railways, long-neglected, went through a similar makeover, with some remarkable indigenisation. The Vande Bharat Express, India’s first high-tech, energy-efficient train, designed and built in 18 months by Integral Coach Factory at Chennai fulfilled the task set by  Narendra Modi’s signature “Make in India” initiative, at a cost estimated to be 40% cheaper than the equivalent built in Europe. It was flagged off by the Prime Minister at the New Delhi railway station on 15 February 2019. The semi-high speed Tejas Express between Mumbai and Karmali in Goa started in May 2017, covered 551.7 km in 8 hours and 30 minutes.ays</div>}
      </p>
    <div className="container">
      <div className="sym">
        <button id="moveLeft" onClick={this.changeTwo}><i className="fa-solid fa-angle-left" id="left"></i></button>
        <i className="fa-solid fa-pipe" id="pipe"></i>
         {/* pipe nahi ara  */}     
        <button id="moveRight" onClick={this.changeTwo}><i className="fa-solid fa-angle-right" id="right"></i></button>
      </div>
      </div>
      <p id="paraImg">
        The Prime Minister, Shri Narendra Modi flagging off the train between<br />
        Maduadih and Patna, at Maduadih, in Varanasi, Uttar Pradesh on March 12,
        2018.
      </p>
    <img src={this.state.keyy==1?img:img2} id="clipImg" />
     {/* <img src="/images/Group 87.png" alt="" id="animation">  */}
    <button id="nextBut" onClick={this.changeOne}>
      <span id="next"
        >Next
        <i className="fa-solid fa-angles-right"></i>
      </span>
      <br />
      <span id="VBE">{this.state.key==1?"Vande Bharat Express":"Bullet Train"}</span>
    </button>
    <button id="buttonHome">
      <span id="home">
        <i className="fa-solid fa-house"></i>
        Home
      </span>
    </button>
    <button id="buttonLang">
      <span id="lang">
        <i className="fa-solid fa-language"></i>
        Language
      </span>
    </button>
    <img className='circle' src={img3} id="ani" />
      </div>
    )
  }
}

export default Main