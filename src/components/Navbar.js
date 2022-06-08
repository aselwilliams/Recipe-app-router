import React from "react";
import { Nav, NavLink, NavItem } from "reactstrap";
import {Link} from 'react-router-dom';
import {useParams} from 'react-router-dom';
import {useState, useEffect} from 'react'

function Navbar({loggedIn, checkLoggedIn}) {

  return (
    <div>
      <div>
        <Nav pills style={{background:'teal',color:'white',padding:'10px',fontSize:'1.5rem'}}>
          <NavItem>
            <NavLink active>
                <Link to='/' style={{color:'white'}}>
                Home
                </Link></NavLink>
          </NavItem>

          <NavItem>
            <NavLink>
                <Link to='/about' style={{color:'white'}}>
                About
                </Link>
                </NavLink>
          </NavItem>
          <NavItem>
            <NavLink>
                <Link to='/details' style={{color:'white'}}>
                Details
                </Link>
                </NavLink>
          </NavItem>
          <NavItem>
            <NavLink>
                {
                    loggedIn ?  <Link to='/login' style={{color:'white'}}>
                    Log Out
                    </Link> :  <Link to='/login' onClick={()=>checkLoggedIn(false)} style={{color:'white'}}>
                Login
                </Link>
                }
               
                
                </NavLink>
          </NavItem>
          
        </Nav>
      </div>
    </div>
  );
}

export default Navbar;
