import * as React from 'react';
import logo from '../Assets/logo.svg'
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';

export const Nav = ()=>{
    return (
        <nav>
            <Link to="/" style={{ textDecoration: 'none' }}><img className="logo" src={logo} alt="logo image"/></Link>
            <div className="navLinks">
                <Link to="/about" style={{ textDecoration: 'none' }}><span className="navLink">About</span></Link>       
                <HashLink to="/#works" style={{ textDecoration: 'none' }}><span className="navLink">Works</span></HashLink> 
            </div>       
        </nav>
    )
}