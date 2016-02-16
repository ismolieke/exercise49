var React = require('react');
var HTTP = require('../services/httpservice');

var WeatherToday = require('./WeatherToday.jsx');
var WeatherForecast = require('./WeatherForecast.jsx');

var Weather = React.createClass({
  getInitialState: function() {
    return {weatherdata: [] };
  },
  componentWillMount: function() {
    HTTP.get(this.props.city)
    .then(function(data) {
      this.setState({ weatherdata: [data] });
    }.bind(this));
  },

  render: function() {

    var divStyle = {
      marginTop: 10
    };
    var boxStyle = {
      color: 'white',
      background: 'CornflowerBlue'
    };

    if (this.props.boxColor) {
      boxStyle.background = this.props.boxColor;
    };

    var weatherToday = this.state.weatherdata.map(function(item,key) {
      return (
        <WeatherToday
          key={key}
          city={item.city.name}
          country={item.city.country}
          date={item.list[0].dt_txt}
          temp={item.list[0].main.temp}
          windspeed={item.list[0].wind.speed}
          windangle={item.list[0].wind.deg}
          icon={item.list[0].weather[0].icon}
          maindesc={item.list[0].weather[0].main}
          subdesc={item.list[0].weather[0].description}
        />
      );
    });
    var weatherForecast = this.state.weatherdata.map(function(item,key) {
      return (
        <WeatherForecast
          key={key}
          itemlist={item.list}
          icon={item.list}
        />
      )
    });

    return (
      <div style={divStyle} className="col-sm-4">
        <div className="panel">
          <div style={boxStyle} className="panel-heading">
            {weatherToday}
          </div>
          <div style={boxStyle} className="panel-body">
            {weatherForecast}
          </div>
        </div>
      </div>
    );
  }
});

module.exports = Weather;
