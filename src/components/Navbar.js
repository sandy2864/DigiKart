import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import logo from '../logo.png';
import kart from '../cart.png';
import styled from 'styled-components'
import {ButtonContainer} from './Button';
export default class Navbar extends Component {
    render() {
        return (
            <NavWrapper className="navbar navbar-expand-sm navbar-dark px-sm-5">
             <Link to='/'>
                 <img src={logo} alt="store" className="navbar-brand"></img>
             </Link>
            <ul className ="navbar-nav align-items-center">
                <li className="nav-item ml-5 ">
                <Link to="/" className="nav-link">
                    our products
                </Link>
                </li>
            </ul>
            <Link to="/cart" className="ml-auto">
                <ButtonContainer>
                    <span>
                <img src={kart} alt="store" className="navbar-brand"></img>
                </span>
                Cart
                   
                    </ButtonContainer>
            </Link>
            </NavWrapper>
           
  
        );
    }
}

const NavWrapper=styled.nav`
background:var(--mainBlue);
.nav-link{
    color: var(--mainWhite)!important;
    font-size=1.3rem;
    text-transform:capitalize;
}
`;

