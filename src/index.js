import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
const QUOTEURL = "http://api.icndb.com/jokes/random?escape=javascript";
const TWEETURL = "https://twitter.com/intent/tweet";
ReactDOM.render(<App quoteURL = {QUOTEURL} tweetURL = {TWEETURL} />, document.getElementById('root'));
registerServiceWorker();
