var Fetch = require('whatwg-fetch');
var baseUrl = 'http://api.openweathermap.org/data/2.5/forecast?q=';
var params = '&units=metric&appid=630e1d55ba48d71ab6175bff695f97f6';

var service = {
  get: function(url) {

    console.log("Request " + baseUrl + url + params);

    return fetch(baseUrl + url + params)
    .then(function(response) {
      return response.json();
    });
  }
};

module.exports = service;
