import React, { Component } from 'react';
import { Steps, Timeline,Card } from 'antd';
import './App.css';
import Home from './Home';
import b from './pic/2.png';
const Step = Steps.Step;

class Transit extends Component {
  render() {
    return (
          <div className="transit1" style={{backgroundImage:'url('+require('./pic/BG_1.png')+')',backgroundRepeat:'no-repeat',backgroundSize:'cover'}}>
            <img src={b} style={{width:'10%',height:'7%',margin:'1%'}}></img>

              <div className='transit2'>
                <div className='details'>
                  <div className="single" style={{padding:20}}>
                    <h1>#U354353453</h1>
                      <h3>Flight No: {this.props.flight}</h3>
                      <h3>passenger: {this.props.pass}</h3>
                      <h3>From: {this.props.from}</h3>
                      <h3>To: {this.props.to}</h3>
                  </div>

                  <h3 style={{marginTop:10,marginRight:5}}>Baggage details:</h3>
                  <div className="double" style={{marginTop:10}}>
                    <div className='double1' style={{padding:20}}>
                      <h4>Baggage1</h4>
                      <h4>Baggage Type:Trolly</h4>
                      <h4>Baggage weight:200lbs</h4>
                      <h4>Baggage color:green</h4>
                    </div>

                  </div>
                </div>
                <div style={{padding:12,marginRight:50,display:'flex',flexDirection:'column',justifyContent:'space-between'}}>
                  <h1 style={{opacity:.7}}>Timeline:</h1>
                  <Timeline style={{marginTop:20}}>
                   <Timeline.Item color="green">Reached ABC

                   </Timeline.Item>
                   <Timeline.Item color="green">Reached C</Timeline.Item>
                   <Timeline.Item color="red">
                     In transit with D
                   </Timeline.Item>
                   <Timeline.Item>
                     Final Destination CDE
                   </Timeline.Item>
                 </Timeline>
                </div>
              </div>


      </div>
    );
  }
}

export default Transit;
