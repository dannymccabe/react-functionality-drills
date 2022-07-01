import React from 'react'
import { BrowserRouter, Route, Link } from "react-router-dom"
import "../App.css"

const Nav = () => {
  return (
    <nav>
        <ul>
            <li> 
                <Link to="/home">HOME</Link>
            </li>
            <li>
                <Link to="/about">ABOUT</Link>
            </li>
            <li>
                <Link to="/contact">CONTACT</Link>
            </li>
        </ul>
    </nav>
  )
}

export default Nav