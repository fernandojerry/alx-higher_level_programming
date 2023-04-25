#!/usr/bin/node

let request = require('request');
let episodeNum = process.argv[2];
let API_URL = 'https://swapi-api.alx-tools.com/api/films/:id';

request(API_URL + episodeNum, function (err, response, body) {
  if (err) {
    console.log(err);
  } else if (response.statusCode === 200) {
    const responseJSON = JSON.parse(body);
    console.log(responseJSON.title);
  } else {
    console.log('Error code: ' + response.statusCode);
  }
});
