import React, { Component } from 'react'
import {  Outlet, Link } from "react-router-dom";

export default class Navbar extends Component {

   render() {
    const {categories}=this.props;
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light px-3">
    <Link className="navbar-brand" to="/">News Today News</Link>
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto">
      <li className="nav-item active">
        <Link className="nav-link" to="/">Home </Link>
      </li>
   {categories.map((category, idx)=>{
    return <li key={idx} className={`nav-item news-category-${category} ${category}`}>
    <Link className="nav-link" to={`/${category}`}>{category} </Link>
    </li>
   })}
    </ul>
   <Outlet/>
  </div>
</nav>
    )
  }
}
