import React, {useEffect, useCallback, useRef} from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../img/logo-nya.png';
import { motion } from 'framer-motion';
import { useState } from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

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
            width: 70%;
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
    
    const AnimationSettings = {
        transition: { duration: .8 },
        initial: { opacity: 0, y: 20 },
        animate: { opacity: 1, y: 0 },
        exit: { opacity: 0, y: -20 }
      };
      
    

      //show navbar
        const [show , setShow] = useState(false);
        const prevPosition = useRef(window.scrollY);
        const [scrollDirection, setScrollDirection] = useState(false);
      
        const handleScroll = () => {
          const currentPos = window.scrollY;
          const prevPos = prevPosition.current;
      
          if (currentPos > prevPos) setScrollDirection(false);
          if (currentPos < prevPos) setScrollDirection(true);
      
          prevPosition.current = currentPos;

        };
      
        useEffect(() => {
          window.addEventListener("scroll", handleScroll);
          return () => window.removeEventListener('scroll', handleScroll);
        }, []);
      

        console.log(burger);
      
    return (
        <>

            <nav className={`${scrollDirection ? 'active' : 'hidden'}`}>
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
            <motion.div
                {...AnimationSettings}
                
            className=" justify-content-center align-items-center wrapped"style={{ display : burger ? 'flex' : 'none'}}>
                <img style={{zIndex : -1}} className='position-absolute logo-background' src={logo} alt='logo'/>
                <ul className='d-flex flex-column'>


                    <li className='d-flex align-items-center'>
                        <NavLink onClick={(e) => setBurger(!burger)} className="p-2 text-center text-decoration-none text-uppercase fs-3 position-relative p-lg-4" to="/">
                            Home
                            
                        </NavLink>
                        <FontAwesomeIcon className='fs-5' icon={faArrowRight}/>
                    </li>

                    <li className='d-flex align-items-center'>
                        <NavLink onClick={(e) => setBurger(!burger)} className="p-2 text-center text-decoration-none text-uppercase fs-3 position-relative p-lg-4" to="/Development">
                            Development
                        </NavLink>
                        <FontAwesomeIcon className='fs-5' icon={faArrowRight}/>
                    </li>

                    <li className='d-flex align-items-center'>
                        <NavLink onClick={(e) => setBurger(!burger)}  className="p-2 text-center text-decoration-none text-uppercase fs-3 position-relative p-lg-4" to="/Designer">
                            Designer
                        </NavLink>
                        <FontAwesomeIcon className='fs-5' icon={faArrowRight}/>
                    </li>


                    <li className='d-flex align-items-center'>
                        <NavLink onClick={(e) => setBurger(!burger)}  className="p-2 text-center text-decoration-none text-uppercase fs-3 position-relative p-lg-4" to='/Contact'>
                            Contact
                        </NavLink>
                        <FontAwesomeIcon className='fs-5' icon={faArrowRight}/>
                    </li>
                    
                </ul>
            </motion.div>
        </>
        
    );
};

export default Navbar;