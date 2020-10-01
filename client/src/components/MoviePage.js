import React from 'react';
import NotFoundPage from './NotFoundPage';
import MoviesMenu from './MoviesMenu';
import { Link } from 'react-router';


var HOST = process.env.API_HOST; 	
var REQ_URL = `http://${HOST}/movieplex7/webresources/movie/`;
var Xml = require('xmljson').to_json;

function status(response) {  
  if (response.ok) {  
    return Promise.resolve(response)  
  } else {  
    return Promise.reject(new Error('fail')).then(function(error){
      console.log(error);
    }, function(error){
      console.log(error);
    });  
  }  
}

function clone(response) {
  return response.clone();
}

function text(response) {  
  return response.text()  
}

function parseToJson(response) {
  console.log('MoviePage response to JSON');
  var movielist = [];
  Xml(response, function (error, data){
    console.log(data);
    for (var key in data.movies.movie){
      movielist.push(data.movies.movie[key]);
    }
    console.log("list: ", movielist.toString());
  });
  
  return(movielist);
}
