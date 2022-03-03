import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Navbar extends Component {
  render() {
    return (
      <div style={{diaplay:'inline-flex'}}>
          <Link to="/" style={{textDecoration:'none'}}><h1 style={{display:'inline'}}>Movies App</h1></Link>
          <Link to="/favourites" style={{textDecoration:'none'}}><h2 style={{marginLeft:'2rem',marginTop:'1.5rem',display:'inline'}}>Favourites</h2></Link>
      </div>
    )
  }
}
