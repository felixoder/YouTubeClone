import React, { Component } from "react";
import {Link } from 'react-router-dom';

export class Main extends Component {
  render() {
          
    const { title, description, image, videoId  } = this.props;

    return (
      <div className="container">
        <div className="card my-3">
          <img src={image} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}</p>

            <button type="button" className="btn btn-sm btn-dark"><Link to={`https://www.youtube.com/watch?v=${videoId}`} target="_blank" rel="noopener noreferrer" style={{color: 'white', textDecoration:'none'}}>
              See the Video
            </Link></button>
          </div>
        </div>
        
      </div>
    );
  }
}

export default Main;
