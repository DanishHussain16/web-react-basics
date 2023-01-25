import React from 'react';
import propTypes from 'prop-types';

export default function Navbar(props){
    return(
           <div className="container-fluid">
           <ul className="nav">
          <li className="nav-item">
            <a className="nav-link" href="#">Home</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">about us</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Contact us</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Applications</a>
          </li>
        </ul>
      
        </div>
    );
};

