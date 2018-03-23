import React, { Component } from 'react';
import './App.css';
import Body from './components/Body';
import {Toolbar, ToolbarTitle} from 'material-ui/Toolbar';


class App extends Component {
  constructor (props){
    super (props);
    this.state = {
      connectivity: navigator.onLine,
      
    }
  }
  KnowState () {
    return setInterval(this.state.connectivity ? "online" : "offline", 1000);
    
  }
  render() {
    return (
      <div> 
      <div >
      <TitleBar data = {this.state.connectivity}/>
      
      
      <Body />
      </div>
      
      </div>
    );
  }
}

class TitleBar extends Component {
  render () {
    
    
    return (
      
      <Toolbar  >
        <ToolbarTitle  text= "MICC store" />
        <div className= "">{this.props.data}</div>
      </Toolbar>

    );
  }
}



export default App;
