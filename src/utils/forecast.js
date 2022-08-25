const request = require("request");

const forecast = (latitude, longitude, callback) => {
  const url =
    "http://api.weatherstack.com/current?access_key=aa28da542b6cc5f14cb54827dc6a6e76&query=" +
    latitude +
    "," +
    longitude +
    "&units=s";

  request({ url, json: true }, (error, { body }) => {
    if (error) {
      callback("Unable to connect to weather service!", undefined);
    } else if (body.error) {
      callback("Unable to find location", undefined);
    } else {
      callback(
        undefined,
        body.current.weather_descriptions[0] +
          " It is currently " +
          body.current.temperature +
          " degress out. There is a " +
          body.current.feelslike +
          "% chance of rain."
      );
    }
  });
};

module.exports = forecast;
