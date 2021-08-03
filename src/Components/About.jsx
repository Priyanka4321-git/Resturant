import React from 'react';
import aboutimage from '../images/about.png';

function About(){
    return(
        <div id='about'>
            <div className='about-text'>
            <h1>UPCOMING EVENTS</h1>
            <p>Lorem ipsum dodlor amet consectetur adipisicing elit. Ipsa eum cum expedite. Voluptas ratione beatae sunt incidunt, in delectus doloremque aliquid, iure tempora ad nobis.</p>
            <button>Read More</button>
            </div>
            <div className='about-image'>
                <img src= {aboutimage} alt='' />
            </div>
        </div>
    )
}

export default About;