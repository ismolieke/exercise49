var React = require('react');
var ReactDOM = require('react-dom');
var Weather = require('./components/Weather.jsx');

ReactDOM.render(<Weather city="London,uk" boxColor="orange"/>, document.getElementById('weather1'));
ReactDOM.render(<Weather  city="Hamburg,de"/>, document.getElementById('weather2'));
ReactDOM.render(<Weather city="Paris,fr" boxColor="red"/>, document.getElementById('weather3'));
ReactDOM.render(<Weather  city="New York,us"/>, document.getElementById('weather4'));
ReactDOM.render(<Weather  city="Helsinki,fi" boxColor="green"/>, document.getElementById('weather5'));
