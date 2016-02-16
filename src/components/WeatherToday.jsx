var React = require('react');

var WeatherToday = React.createClass({

  render : function() {

    var imgStyle = {
      height: 100,
      width: 100
    };
    var iconStyle = {
      fontSize: 40,
      color: 'white'
    };

    var windIconClass = "wi wi-wind from-" + Math.round(this.props.windangle) + "-deg";
    var weatherimage = "http://openweathermap.org/img/w/" + this.props.icon + ".png";

    return (
      <div className="row">
        <div className="col-xs-12">
          <div className="row">
            <div className="col-xs-12">
              <h4>{this.props.city}, {this.props.country}</h4>
              <div>
                TODAY {this.props.date.substring(8,10)}.{this.props.date.substring(5,7)}.{this.props.date.substring(0,4)}
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-xs-4 col-xs-offset-2 text-center">
              <img src={weatherimage} style={imgStyle}></img>
            </div>
            <div className="col-xs-5 text-center">
              <h2>{Math.round(this.props.temp)} C</h2>
            </div>
          </div>
          <div className="row">
            <div className="col-xs-8">
              {(this.props.maindesc)} / {(this.props.subdesc)}
            </div>
            <div className="col-xs-4" >
              <i className={windIconClass} style={iconStyle} ></i>
            </div>
          </div>
          <div className="row">
            <div className="col-xs-4">
              Wind {Math.round(this.props.windspeed)} m/s
            </div>
            <div className="col-xs-4">
            </div>
            <div className="col-xs-4">
            </div>
          </div>
        </div>
      </div>

    );
  }
});

module.exports = WeatherToday;
