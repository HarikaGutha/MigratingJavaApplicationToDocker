import React from 'react';
import { Link } from 'react-router';

export default class Layout extends React.Component {
  render() {
    return (
      <div className="app-container">
        <header>
            <Link to="/">
              <div className="container">
                <img src="/img/banner.jpg"/>
                <div className="centered">MOVIEPLEX Example</div>
              </div>
            </Link>
        </header>
        <div className="app-content">{this.props.children}</div>
        <footer>
          <p>
           An example Client application for JavaEE Movieplex 
          </p>
        </footer>
      </div>
    );
  }
}
