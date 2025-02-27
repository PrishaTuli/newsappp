// import React, { Component } from 'react'
import React from 'react'
// import {a} from "react-router-dom";

// export class Navbar extends Component {
 const Navbar=() =>{

  // render() {
    return (
      <div>
        <nav className="navbar fixed-top navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <a className="navbar-brand" href="/">News-Monkey</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0 ">
        <li className="nav-item ">
          <a className="nav-a text-decoration-none d-inline-block" aria-current="page" href="/">Home|</a>
        </li>
        {/* <li className="nav-item"> */}
        {/* <aclassName="nav-a" href="/About">About</aclassName=></li> */}
        <li className="nav-item "> <a className="nav-a text-decoration-none d-inline-block" aria-current="page" href="/business"> Business| </a></li>
        <li className="nav-item "><a className="nav-a text-decoration-none d-inline-block" aria-current="page" href="/entertainment">Entertainment| </a></li>
        <li className="nav-item "><a className="nav-a text-decoration-none d-inline-block" aria-current="page" href="/general">General| </a></li>
        <li className="nav-item "><a className="nav-a text-decoration-none d-inline-block" aria-current="page" href="/health">Health| </a></li>
        <li className="nav-item"><a className="nav-a text-decoration-none d-inline-block" aria-current="page" href="/science">Science| </a></li>
        <li className="nav-item"><a className="nav-a text-decoration-none d-inline-block" aria-current="page" href="/sports">Sports| </a></li>
        <li className="nav-item"><a className="nav-a text-decoration-none d-inline-block" aria-current="page" href="/technology">Technology </a></li>
        
      </ul>
      <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>
      </div>
    )
  }
// }

export default Navbar
