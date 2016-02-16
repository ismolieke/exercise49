var React = require('react');
var WeatherForecastItem = require('./WeatherForecastItem.jsx');

var WeatherForecast = React.createClass({

  render : function() {

    var rowStyle = {

    };

    var weatherForecastItem = this.props.itemlist.map(function(item, key) {
      if (item.dt_txt.substring(11,13) == "12") {   // forecast at noon of each day
        return (
          <WeatherForecastItem
            key={key}
            date={item.dt_txt.substring(8,10) + "." + item.dt_txt.substring(5,7) + "."}
            temp={item.main.temp}
            icon={item.weather[0].icon}
          />
        );
      }
    });

    return (
      <div className="row">
        <div className="col-xs-12" style={rowStyle}>
          <table className="table">
            <tbody>
              {weatherForecastItem}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
});

module.exports = WeatherForecast;
