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
