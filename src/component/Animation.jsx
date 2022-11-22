import React, {useEffect} from 'react';
import gsap from 'gsap';
import {ScrollTrigger} from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);
export let Animation = () => {


    ScrollTrigger.matchMedia({
        '(min-width : 992px)' : function(){
            gsap.fromTo('#letters-dev', {
                x : -1200
            },{
                x : 100,
                scrollTrigger : {
                    trigger : '#letters-dev',
                    start: 'top-=600',
                    end : 'bottom+=150',
                    
                    scrub : 8
                }
            })

            gsap.fromTo('.letters-des', {
                x : 0
            },{
                x : -800,
                scrollTrigger : {
                    trigger : '.development',
                    start: 'top+=300',
                    end : 'bottom+=150',
                    
                    scrub : 8
                }
            })

            gsap.fromTo('.title-webworld', {
                y : 50
            }, {
                y: -50,
                scrollTrigger : {
                    trigger: '.web-world',
                    start : 'top top',
                    end : 'bottom center',
                    scrub: 8,
                    
                }
            })

            gsap.fromTo('.description-webworld', {
                y : -100
            }, {
                y: 50,
                scrollTrigger : {
                    trigger: '.web-world',
                    start : 'top top',
                    end : 'bottom center',
                    scrub: 8,
                    
                }
            })

            gsap.fromTo('.title-ocean', {
                y : 50
            }, {
                y: -20,
                scrollTrigger : {
                    trigger: '.ocean-strash',
                    start : 'top top',
                    end : 'bottom center',
                    scrub: 8,
                    
                }
            })

            gsap.fromTo('.description-ocean', {
                y : 10
            }, {
                y: -70,
                scrollTrigger : {
                    trigger: '.ocean-strash',
                    start : 'top top',
                    end : 'bottom center',
                    scrub: 8,
                    
                }
            })
        }
    })



}