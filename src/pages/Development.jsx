import React, {useRef , useEffect} from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import ImageEffect from 'react-image-effects'
import { ScrollSmoother } from "gsap-trial/ScrollSmoother";
import {ScrollTrigger} from 'gsap/ScrollTrigger';
import webworld from '../img/15.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRightLong } from '@fortawesome/free-solid-svg-icons';
import { Animation } from '../component/Animation';
import Ocean from '../img/Ocean.png'
import Footer from '../component/Footer';
import { TweenMax, TimelineMax, Power3, Power4 } from "gsap";



const Development = () => {

    gsap.registerPlugin(ScrollTrigger,ScrollSmoother)
    let smoother = ScrollSmoother.create({
        wrapper : ".smooth-wrapper",
        content : '#smooth-content',
        smooth : 1.5,
        effects: true
    })

    useEffect(() => {
        Animation()
    }, [])
    const divRef = useRef()

    let screen = useRef(null);
    let body = useRef(null);
    useEffect(() => {
        var tl = new TimelineMax();
        tl.to(screen, {
        duration: 1.2,
        height: "100%",
        ease: Power3.easeInOut,
        });
        tl.to(screen, {
        duration: 1,
        top: "100%",
        ease: Power3.easeInOut,
        delay: 0.3,
        });
        tl.set(screen, { left: "-100%" });
        TweenMax.to(body, .3, {css: {
        opacity: "1",
        pointerEvents: "auto",
        ease: Power4.easeInOut
        }}).delay(2);
        return () => {
        TweenMax.to(body, 1, {css: {
            opacity: "0",
            pointerEvents: 'none'
        }});
    }
    });


 //animation when enter into a page
 const AnimationSettings = {
    transition: { duration: .8 },
    initial: {  x : -100 },
    animate: { x: 100 },
    exit: {  x: -100 }
  };

    return (
        <>
            <React.Fragment >
            <div className="load-container">
                <div className="load-screen1" ref={(el) => (screen = el)} ></div>
            </div>
            <div data-barba className="Test">
                <div ref={(el) => (body = el)} className="Head" />
                 
                
            </div>

            
        </React.Fragment>

            <div className="development-page" id="smooth-wrapper">
                <div id="smooth-content">
                    <section className="content">


                        <div className="web-world">
                            <div className="container d-flex">
                                <div className="row position-relative d-flex flex-column justify-content-between">
                                    
                                    <div className='position-absolute image'>
                                        <ImageEffect url={webworld} effect="chalkboard" height={'100%'} width={'100%'}/>
                                    </div>


                                    <div className="col-12 title">
                                        <h1 className='title-webworld'>WEB WORLD</h1>
                                    </div>
                                    <div className="col-12 description-webworld d-flex flex-column align-items-end">
                                        <p className='py-lg-2'>Web world is a web design agency located in Braine-l'alleud in Belgium. It is the agency where I was able to do my end of year internship for 3 months. After having accomplished the tasks requested, I received a mention: "Nayara is a rare pearl". Here is their logo and all the graphic identity I had the opportunity to recreate.</p>
                                        <a className='py-lg-2 text-decoration-none' href="https://webworld.be">Visit Site Web <FontAwesomeIcon className="ps-4" icon={faArrowRightLong}/> </a>
                                    </div>
                                </div>
                            </div>
                        </div>



                        <div className="ocean-strash">
                            <div className="container">
                                <div className="row position-relative d-flex flex-column justify-content-between">
                                    <div className="position-absolute image">
                                        <ImageEffect url={Ocean} effect="chalkboard" height={'100%'} width={'100%'} />
                                    </div>


                                    <div className="col-12 title d-flex justify-content-lg-end">
                                        <h1 className='title-ocean'>Ocean's trash</h1>
                                    </div>
                                    <div className="col-12 description-ocean d-flex flex-column align-items-start">
                                        <p className='py-lg-2'>Ocean's Trash is an end of year work I designed in ReactJs. ReactJs is a JavaScript library. This project was designed for children from 6 to 10 years old to alert them against pollution in the oceans.</p>
                                        <a className='text-decoration-none py-lg-2' href="https://ocean-trash-six.vercel.app/">Visit Site Web <FontAwesomeIcon className='ps-4' icon={faArrowRightLong}/> </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>


                </div>
                <Footer/>
            </div>
        </>
    );
};

export default Development;