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
          <Textdisplay content = "Very impressive and philosophical quote" 
                       id="text" styling={{"gridColumn": "1/5"}}/>
          <Textdisplay content = "Authored by:" id="author" 
                       styling={{"gridColumn": "3/5"}}/>
          <Button text="Retweet this" id="tweet-quote" styling={{"gridColumn":"1/2", "alignSelf":"center", "justifySelf":"start" }} />
          <Button text="Get new quote" id="new-quote" styling={{"gridColumn":"4/5", "alignSelf":"center", "justifySelf":"end"}} />
      </div>
    );
  }
}

export default App;
