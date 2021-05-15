import main from './main.css'
import { useState } from 'react';
import Nav_bar from './navbar'
import Carousil from './carousil/main'
import Carousil2 from './carousil/main2'
import Carousil3 from './carousil/main3'
import Carousil4 from './carousil/main4'
import Carousil5 from './carousil/main5'
import Cybertruck from './carousil/cybertruck'
import Roadster from './carousil/roadster'
import {gsap, TweenMax, Power3, TimelineLite} from 'gsap'
import scrollTrigger from 'gsap/ScrollTrigger'
import React,{Component, useEffect, useRef} from 'react'

gsap.registerPlugin(scrollTrigger)

function Tesla() { 
    
    let tl=new TimelineLite({delay: 0.5})

    useEffect(() => {

        gsap.from('.img_div_x', {
            duration: 1.5,
            x:'100%',
            opacity:0,
            ease: Power3.easeInOut,
            scrollTrigger: {
                trigger: '.head_x',
                start:'bottom 100%',
            }
        })
        gsap.from(['.head_x', '.x_info'], {
            duration: 1.5,
            x:'-100%',
            opacity:0,
            ease: Power3.easeInOut,
            scrollTrigger: {
                trigger: '.head_x',
                start:'bottom 100%',
            }
        })
        gsap.from('.img_div_y', {
            duration: 1.5,
            x:'-100%',
            opacity:0,
            ease: Power3.easeInOut,
            scrollTrigger: {
                trigger: '.head_y',
                start:'bottom 80%',
            }
        })
        gsap.from(['.head_y', '.y_info'], {
            duration: 1.5,
            x:'100%',
            opacity:0,
            ease: Power3.easeInOut,
            scrollTrigger: {
                trigger: '.head_y',
                start:'bottom 80%',
            }
        })
        gsap.from('.img_div_s', {
            duration: 1.5,
            x:'100%',
            opacity:0,
            ease: Power3.easeInOut,
            scrollTrigger: {
                trigger: '.head_s',
                start:'bottom 100%',
            }
        })
        gsap.from(['.head_s', '.s_info'], {
            duration: 1.5,
            x:'-100%',
            opacity:0,
            ease: Power3.easeInOut,
            scrollTrigger: {
                trigger: '.head_s',
                start:'bottom 100%',
            }
        })
        gsap.from('.img_div_3', {
            duration: 1.5,
            x:'-100%',
            opacity:0,
            ease: Power3.easeInOut,
            scrollTrigger: {
                trigger: '.head_3',
                start:'bottom 80%',
            }
        })
        gsap.from(['.head_3', '.t_info'], {
            duration: 1.5,
            x:'100%',
            opacity:0,
            ease: Power3.easeInOut,
            scrollTrigger: {
                trigger: '.head_3',
                start:'bottom 80%',
            }
        })
        gsap.from('.img_div_ct', {
            duration: 1.5,
            y:'50%',
            opacity:0,
            ease: Power3.easeInOut,
            scrollTrigger: {
                trigger: '.head_ct',
                start:'bottom 80%',
            }
        })
        gsap.from(['.head_ct', '.ct_info'], {
            duration: 1.5,
            y:'100%',
            opacity:0,
            ease: Power3.easeInOut,
            scrollTrigger: {
                trigger: '.head_ct',
                start:'bottom 80%',
            }
        })
        gsap.from('.img_div_road', {
            duration: 1.5,
            y:'100%',
            opacity:0,
            ease: Power3.easeInOut,
            scrollTrigger: {
                trigger: '.head_road',
                start:'bottom 80%',
            }
        })
        gsap.from(['.head_road', '.road_info'], {
            duration: 1.5,
            y:'50%',
            opacity:0,
            ease: Power3.easeInOut,
            scrollTrigger: {
                trigger: '.head_road',
                start:'bottom 80%',
            }
        })
    })

    return(
        <>
        <Nav_bar/>
        <Carousil/>

        <div>
            <div>
            <div className='model_x'>
                <div className='img_div_x'><Carousil2/></div>
                <h1 className='head_x'>MODEL X</h1>
                <div className='x_info'>
                    <h5>
                    Tesla offers the international-spec Model X in two electric powertrains: Long Range and Plaid. 
                    While the Long Range variant gets a dual-motor setup with a claimed range of 579km, the Plaid 
                    variant gets a tri-motor setup but has a claimed range of 547km. Both variants get an all-wheel-drive system. 
                    The former can complete the 0-96kmph (0-60mph) sprint in 3.8 seconds whereas the latter takes 2.5 seconds.
                     </h5>
                </div>
            </div>

            <div className='model_y'>
            <h1 className='head_y'>MODEL Y</h1>
                <div className='y_info' >
                    <h5>
                    Model Y lineup includes a Standard Range cost-leader trim which is essentially a rear-wheel-drive version of the Long Range model. 
                    The more compelling options are the all-wheel-drive Long Range and Performance models. Thanks to a generous Car and Driver reader, 
                    we were able to test an all-wheel-drive Long Range, which zipped from zero-to-60 mph in just 4.4 seconds, 
                    a mere 0.4 second behind our long-term Model 3 sedan. 
                    While the Model Y offers impressive acceleration, it doesn't deliver the same level of driving satisfaction as the Model 3.
                    </h5>
                </div>
                <div className='img_div_y'><Carousil3/></div>
            </div>

            <div className='model_s'>
                <div className='img_div_s'><Carousil4/></div>
                <h1 className='head_s'>MODEL S</h1>
                <div className='s_info'>
                    <h5>
                    Tesla offers the international-spec Model S in three electric powertrain options: Long Range, 
                    Plaid and Plaid+. While the Long Range variant gets a dual-motor setup with a claimed range of over 660km, 
                    the Plaid and Plaid+ variants get a tri-motor setup with claimed range figures of 627km and 837km respectively. 
                    All variants get all-wheel-drive. 
                    Each variant can complete the 0-96kmph (0-60mph) sprint in 3.1 seconds, 1.99 seconds and less than 1.99 seconds respectively.
                    </h5>
                </div>
            </div>

            <div className='model_3'>
            <h1 className='head_3'>MODEL 3</h1>
                <div className='t_info'>
                    <h5>The Model 3 sedan is offered in three electric powertrain options: Standard Plus, Long Range and Performance. 
                    The Standard Plus utilises a rear-wheel drivetrain, while the Long Range and Performance variants are powered by a dual-motor all-wheel-drive setup. 
                    Tesla claims an efficiency of 423km, 568km and 507km for the three variants of the Model 3, respectively. 
                    The top-spec Performance variant does a 0-97 kmph sprint in 3.1 seconds with a top speed of 261 kmph.
                     The Indian model is likely to be offered in Standard Plus variant, while the other two could be introduced later.
                     </h5>
                </div>
                <div className='img_div_3'><Carousil5/></div>
            </div>

            <div className='cybertruck'>
                <div className="img_div_ct"><Cybertruck/></div>
                <h1 className="head_ct" >CYBERTRUCK</h1>
                <div className="ct_info" >
                The Cybertruck is available with not just one, not just two, but three electric motors. 
                While the single-motor truck has rear-wheel drive, the two- and three-motor models have all-wheel drive. 
                Tesla claims it'll go from zero to 60 mph in 6.5 seconds and top out at 110 mph. 
                The dual-motor Cybertruck will reportedly reach 60 mph in just 4.5 ticks and have a top speed of 120 mph. 
                Those looking for the ultimate performance will appreciate the three-motor model, 
                which Tesla says will essentially teleport from zero to 60 mph in 2.9 seconds (!) with a top speed of 130 mph.
                </div>
            </div>

            <div className='roadster'>
                <div className="img_div_road"><Roadster/></div>
                <h1 className="head_road" >ROADSTER</h1>
                <div className="road_info" >
                The 2021 Tesla Roadster was unveiled as a concept in November 2017, Musk touted some pie-in-the-sky performance numbers for this car, 
                including a 60-mph time of 1.9 seconds, a top speed of more than 250 mph, and a quarter-mile time of just 8.8 seconds. 
                That's outrageous. For reference, if that 60-mph time holds up, it will mean the Roadster is a full second quicker than its key rival, 
                the gasoline-powered McLaren 570S.
                 Also during this conference, Musk noted that the Roadster will come with standard all-wheel drive. 
                </div>
            </div>
            </div>
        </div>
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta3/dist/js/bootstrap.bundle.min.js" integrity="sha384-JEW9xMcG8R+pH31jmWH6WWP0WintQrMb4s7ZOdauHnUtxwoG2vI5DkLtS3qm9Ekf" crossorigin="anonymous"></script>
        </>
    )
}
export default Tesla