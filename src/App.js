import React, { Component } from 'react';
import Button from "./Button";
import Textdisplay from "./Textdisplay";
import './App.css';

class App extends Component {
  constructor(props){
    super(props)
    this.state= {
      theQuote: ""
    }
  }
  
  render() {
    return (
      <div id="quote-box">
          <Textdisplay content = "Very impressive and philosophical quote" id="text"/>
          <Textdisplay content = "Authored by:" id="author"/>
          <Button />
          <Button />
          <Button id="new-quote"/>
      </div>
    );
  }
}

export default App;
