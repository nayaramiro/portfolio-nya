import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../img/logo-nya.png';




const Footer = () => {
    return (
        <footer>
            <div className="container">
                <div className="row">
                    <div className="col-12 footer-logo">
                        <Link><img style={{width: '70px' , heght: 'auto'}} src={logo} alt="logo" /></Link>
                    </div>
                    <div className="col-12">
                        <div className="d-flex flex-column flex-lg-row">
                            <div className="col-lg-6">
                                <ul className='d-flex flex-column'>
                                    <Link className='text-decoration-none' to="/Development"> Development</Link>
                                    <Link className='text-decoration-none' to="/Designer" >Designer</Link>
                                    <Link className='text-decoration-none' to="/Contact">Contact </Link>
                                </ul>
                            </div>
                            <div className="col-lg-6">
                                <p>© 2022, NAYARA WEB DEVELOPMENT®</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;