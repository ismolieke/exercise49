var React = require('react');

var WeatherForecastItem = React.createClass({

  render : function() {

    var rowStyle = {

    };
    var imgStyle = {
      height: 30,
      width: 30
    };

    var weathericon = "http://openweathermap.org/img/w/" + this.props.icon + ".png";

    return (
      <tr>
        <td style={rowStyle}>
          {this.props.date}
        </td>
        <td style={rowStyle}>
          <img src={weathericon} style={imgStyle}></img>
        </td>
        <td style={rowStyle}>
          {Math.round(this.props.temp)} C
        </td>
      </tr>
    );
  }
});

module.exports = WeatherForecastItem;
