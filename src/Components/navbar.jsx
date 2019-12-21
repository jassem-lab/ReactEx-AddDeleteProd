import React, { Component } from 'react'

//Stateless Functional Component
    const NavBar = ({totalCounters}) =>  {
    return ( <nav className="navbar navbar-light bg-light">
    <p className="navbar-brand">Navbar <span className="badge badge-pill badge-secondary">
        {totalCounters}
          </span>
         </p>
        </nav> ); 
}; 

export default NavBar ; 