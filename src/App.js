import React, { Component } from 'react';
import Button from "./Button";
import Textdisplay from "./Textdisplay";
import './App.css';

class App extends Component {
  constructor(props){
    super(props)
    this.state= {
      theQuote: "",
      author: "",
      loading: true,
      quoteUrl: "https://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1",
    }
  }

  componentDidMount(){
    fetch(this.state.quoteUrl)
    .then(resp => resp.json())
    .then(data => 
      {
        let tmp = new DOMParser().parseFromString(data[0].content, "text/html")
        this.setState({ 
          theQuote: tmp.body.textContent,
          author: data[0].title,
          loading: false
        })
      }
    )
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
            <Textdisplay content ={this.state.theQuote}
                         id="text"/>
            <Textdisplay content = {`Authored by: ${this.state.author}`} id="author" />
            <div className="container" style={{"display":"flex",
                                              justifyContent:"space-between"}}>
            <Button text="Retweet this" id="tweet-quote" />
            <Button text="Get new quote" id="new-quote" />
            </div>
       </div>
      );
    }
  }
}

export default App;
