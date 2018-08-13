import React, { Component } from 'react';
import Textdisplay from "./Textdisplay";
import './App.css';
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faQuoteRight, faQuoteLeft, faSyncAlt} from '@fortawesome/free-solid-svg-icons'
import {faTwitter} from "@fortawesome/fontawesome-free-brands";

library.add(faQuoteRight,faQuoteLeft, faTwitter, faSyncAlt);
class App extends Component {
  constructor(props){
    super(props)
    this.state= {
      theQuote: "",
      author: "",
      loading: false,
    }
  }
  fetchData(){
    this.setState({
      loading: true,
    })
    fetch(this.props.quoteURL)
    .then(resp => resp.json())
    .then(data => {
      this.setState({
        theQuote: data.value.joke,
        loading: false,
        author: `Chuck Norris Joke DB #${data.value.id}`
      })
    }
    )
  }

  componentDidMount(){
      this.fetchData();
  }

  render() {
    if(this.state.loading){
      return (
        <div className="loading">
        </div>
      )
    }
    else {
      return (
        <div id="quote-box">
          <FontAwesomeIcon icon="quote-right" style={{alignText:"right"}} />
            <Textdisplay content ={this.state.theQuote}
                         id="text"/>
          <FontAwesomeIcon icon="quote-left"/>  
            <Textdisplay content = {`Authored by: ${this.state.author}`} id="author" />
            <div className="container" style={{"display":"flex",
                                              justifyContent:"space-between"}}>
            <a id="tweet-quote" href={this.props.tweetURL} target="_blank">Tweet Quote
            <FontAwesomeIcon icon={['fab', 'twitter']} className="tweet"/>
            </a>
            <a id="new-quote" onClick = {() => {this.fetchData()}}>Fetch New Quote
            <FontAwesomeIcon icon = "sync-alt" className = "sync"/>
              </a>
            </div>
       </div>
      );
    }
  }
}

export default App;
