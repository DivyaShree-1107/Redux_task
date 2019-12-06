import React, { Component } from 'react';
import './Navbar.css';

class Navbar extends Component {
    
    render() {
        return (
            <div className="navbar_cont">
               <a className="nv_content" href='/'>Two Components</a>
               <a className="nv_content" href='/task3'>Four Components</a>
               <a className="nv_content" href='/task4'>Even Increment</a>
               
            </div>
        );
    }
}

export default Navbar;