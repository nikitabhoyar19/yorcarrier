import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Link} from "react-router-dom";
import './Navbar.css';

export default class Navbar extends Component {
    static propTypes = {
        prop: PropTypes
    }

    render() {
        return (
            <>
         <nav className="Navbar Home_nav">
            <img
              src={"../logointern.png"}
              className="logo"
              alt="logo"
            />

          <ul className="navlist">
          <Link to="/" className= "mutex">ONLINE TRIANINGS</Link>
            <Link to="/" className= "mutex"><span>Login</span></Link>
          </ul>

        </nav>
    
            </>
        )
    }
}
