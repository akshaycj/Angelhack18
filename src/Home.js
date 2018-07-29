import React from 'react';
import a from './pic/BG.png';
import './App.css';
import { Input,Button} from 'antd';
import b from './pic/2.png';
import c from './pic/1.svg';

import Transit from './Transit';

class Home extends React.Component{
  constructor(props){
    super(props);
    this.state={
      ubid:'UB123',
      open:false,
      val:'',
      flight:'1234555',
      pass:'', from:'ABC',to:'CDE'

    }
  }
  componentDidMount(){
    this.setState({pass:this.props.pass,flight:this.props.flight,from:this.props.from,to:this.props.to})
  }
  onChangeSearch(e){
    this.setState({
      val:e.target.value
    })
  }
  onClick(){

    if(this.state.val==this.state.ubid){
      this.setState({
        open:true
      })
    }
  }
  render(){
    return(
      <div className="Home" style={{backgroundImage:'url('+require('./pic/BG_1.png')+')',backgroundRepeat:'no-repeat',backgroundSize:'cover'}}>

        <img src={b} style={{width:'30%',height:'20%'}}></img>
        <div className="search">
        <Input placeholder="Enter your UBID (UB123)" onChange={this.onChangeSearch.bind(this)}></Input>
        <Button onClick={this.onClick.bind(this)}>Get Info</Button>
        </div>
        {
          this.state.open ? <Transit ubid={this.state.ubid} flight={this.state.flight} pass={this.state.pass} from={this.state.from} to={this.state.to}/> :null
        }
        <div className='base'>
          <ul>
            <li>Terms </li>
            <li>About</li>
            <li>Settings</li>
          </ul>
          <img src={c}></img>
        </div>


      </div>
    )
  }
}
export default Home;
