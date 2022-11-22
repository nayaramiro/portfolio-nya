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
        }
    })



}