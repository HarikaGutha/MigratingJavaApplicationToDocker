import React from 'react';
import MoviePage from './MoviePage';
import MoviePreview from './MoviePreview';


var HOST = process.env.API_HOST; 		 
var REQ_URL = `http://${HOST}/movieplex7/webresources/movie/`;
var Xml = require('xmljson').to_json;

console.log(process.env);
console.log(REQ_URL);

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
  var movielist = [];
  Xml(response, function (error, data){
    for (var key in data.movies.movie){
      movielist.push(data.movies.movie[key]);
    }
  });
  return(movielist);
}

export default class IndexPage extends React.Component {

  constructor(props, context) {
    super(props, context);
    this.state = { 
      movies : null 
    };
  }

  componentDidMount() {
      if (HOST === null && window.location.host.indexOf('play') > 0) {
        REQ_URL = "http://" + window.location.host.replace("-80", "-8080")+"/movieplex7/webresources/movie/";
      };
      console.log(REQ_URL);
      fetch(REQ_URL, {mode: 'cors'})
    .then(status)
    .then(clone)
    .then(text)
    .then(parseToJson)
    .then((movies) => {this.setState({ movies });
    });
  }  

  render() {
    if(!this.state.movies){
      return <div>Loading ... </div>
    }
    return (
      <div className="home">
        <div className="movies-selector">
          {this.state.movies.map(movieData => <MoviePreview key={movieData.id} {...movieData} />)}
        </div>
      </div>
    );
  }
}

