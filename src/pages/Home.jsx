import React, { useState } from 'react';
import { motion } from 'framer-motion';
import logo from '../img/logo-nya.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowDownLong } from '@fortawesome/free-solid-svg-icons';
import { faArrowRightLong } from '@fortawesome/free-solid-svg-icons';
import styled from 'styled-components';
import { useEffect, useRef } from 'react';
import nay from '../img/nay.jpeg';
import Arrow from '../component/Arrow';
import { Link } from 'react-router-dom';
import Letter from '../component/Letter';
import Footer from '../component/Footer';
import { Animation } from '../component/Animation';
import DevVideo from "../videos/FireShot Capture 015 - Ocean's Trash - ocean-trash-six.vercel.app.mp4";
import HoverVideoPlayer from 'react-hover-video-player';
import Development from '../img/development.png';







const Home = () => {



    //animation when enter into a page
    const AnimationSettings = {
        transition: { duration: .8 },
        initial: { opacity: 0, y: 20 },
        animate: { opacity: 1, y: 0 },
        exit: { opacity: 0, y: -20 }
      };




       //aniation background and arrow
      const [Background, setBackground] = useState("#1F1F1F");
      const [Rotation, setRotation] = useState(0)

      const divRef = useRef();
      const [ ShowArrow, setShowArrow ] = useState(false)
      
      useEffect(() => {
        const handleScroll = () => {
            
            //current div
            const div = divRef.current;

            //get height
            // const { y } = (div.getBoundingClientRect());


            
                var total =  ((document.documentElement.scrollTop + document.body.scrollTop) / (document.documentElement.scrollHeight - document.documentElement.clientHeight) * 100);
                var percent = Math.floor(total);

            //rotate arrow
            const Rotation = percent >= 15 ? '180deg' : '0deg';
            const ShowArrow = percent >= 15 ? true : false;
            //change bck

            const Background = percent >= 15 && percent <= 80 ? 'whitesmoke' : '#1F1F1F';
            
            
            
            setBackground(Background);
            setRotation(Rotation);
            setShowArrow(ShowArrow)
        }
        window.addEventListener('scroll', handleScroll)
        
        return() => {
            window.removeEventListener('scroll', handleScroll)
        }
      }, [])
      //



    const letterDev = useRef(null);
    useEffect(() => {
        Animation()
    }, [])
    
    

    return (
        <motion.div
        {...AnimationSettings}
        ref={divRef}
        className="home"
        style={{background : Background, transition: 'all 1s ease-in-out'}}
        >

        <img src={logo} alt='nay' className='position-absolute' style={{rotate: '-90deg', right: -200, top : 0}} />
            <div  className="container position-relative">
                <header id="header" className='d-flex align-items-end'>
                    <div className="text d-flex flex-column justify-content-around">
                        <img src={logo} alt="logo" />
                        <p>Hello developers, my name is Nayara Miro and I am a young web developer. Here is a bit of my story and my background. I hope you will like it.</p>

                    </div>
                </header>
                
            </div>
            <Arrow style={{rotate: Rotation}} Class={`arrow position-fixed align-items-center justify-content-center d-${ShowArrow ? 'flex' : 'none'}`}  />



            <div id="bio" className="bio py-3 py-lg-0 d-flex align-items-center">
                <div className="container">
                    <div className="m-0 d-flex flex-column row flex-lg-row justify-content-between">
                        <div className="col-lg-5 col-12 pb-5 pb-lg-0 pt-5 pt-lg-0 col-text position-relative d-flex flex-column justify-content-center">
                            <h1 className='position-absolute'>About me :</h1>
                            <p>Recently graduated in sciences of computer at the High School Francisco Ferrer in Brussels, Belgium, I am a young developer and web designer looking for an opportunity. Very creative, I'm able to work in both programming (front end) and graphic . Whether it is logos, posters, motion design and many others. Do not hesitate to contact me for more information.</p>
                            <Link className='text-decoration-none d-flex align-items-center ' to="/Contact">Contact me
                                <FontAwesomeIcon className='ps-5' icon={faArrowRightLong}/>
                            </Link>
                        </div>
                        <div className="col-img col-lg-7 col-12 d-flex justify-content-lg-end justify-content-center">
                            <img src={nay} alt="nay" />
                        </div>
                    </div>
                </div>
            </div>





            <div id="letters-dev" ref={letterDev} className="letters py-lg-5 py-2 overflowX-hidden">
                <div className="block d-flex flex-nowrap" style={{width : '100%'}}>
                    {[...Array(10)].map((x, i) =>
                        <Letter text={'development'}/>
                    )}
                </div>
            </div>




            <div className="development d-flex align-items-center">
                <div className="container px-lg-5">
                    {/* autostart autoPlay */}
                        <Link to='Development'>
                        <HoverVideoPlayer 
                            videoSrc={DevVideo}
                            pausedOverlay={
                                <img 
                                    src={Development}
                                    alt='development'
                                    style={{
                                        height : '100%',
                                        width : '100%',
                                        objectFit : 'cover',
                                    }}
                                />
                            }
                        />
                        </Link>
                </div>
            </div>



            <div className="letters letters-des py-lg-5 py-2 overflowX-hidden">
                <div className="block d-flex flex-nowrap" style={{width : '100%'}}>
                    {[...Array(8)].map((x, i) =>
                        <Letter text={'designer'}/>
                    )}
                </div>
            </div>


            <div className="illustration py-lg-5 py-2 d-flex align-items-center justify-content-lg-start justify-content-center">
                <iframe src="https://www.youtube.com/embed/fCv_uQoYP_Q" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>

            <Footer />


        </motion.div>
    );
};

export default Home;