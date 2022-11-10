import React from 'react';
import { NavLink } from 'react-bootstrap';
import logo from '../img/logo-nya.png';

import { useState } from 'react';
import styled from 'styled-components';


const Navbar = () => {

    const [burger, setBurger] = useState(false);

    const Burger = styled.div`
    height: 100%;
    min-width: 70px;
    position: relative;
    
    cursor: pointer;
        &:before {
            position: absolute;
            height: 8px;
            width: 80%;
            background: black;
            right: 0;
            top: 15px;
            content: '';
        }
        &:after {
            position: absolute;
            height: 8px;
            width: 40px;
            rotate : ${(props) => props.rotate}deg;
            background: black;
            right: ${(props) => props.right}px;
            bottom: ${(props) => props.bottom}px;
            content: '';
            
        }
    `;
    //right : 17px;
    //bottom : 30px
    //deg 90

    console.log(burger);
    return (
        <>
            <nav>
                <div className="container">
                    <div className="row  d-flex justify-content-between">
                        <div className="col-2 d-flex align-items-center justify-content-center logo">
                            <NavLink to="/" className="d-flex align-items-center justfy-content-center">
                                <img src={logo} alt="logo" />
                            </NavLink>
                        </div>
                        <div className="col-2 menu d-flex justify-content-end">
                            <Burger className="burger" rotate={burger ? 90 : 0} right={burger ? -17 : 0} bottom={burger ? 30 : 15} onClick={(e) => setBurger(!burger)}></Burger>
                        </div>
                    </div>
                </div>
            </nav>
            <div className="wrapped"style={{ display : burger ? 'block' : 'none'}}>
                
            </div>
        </>
        
    );
};

export default Navbar;