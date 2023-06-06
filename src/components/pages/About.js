import React, { Component } from 'react';
import Me from '../site-images/brenda.png'

import '../pages/About.css'

class About extends Component {
    render() {
        return (
            <div className='about'
                id='about'>
                <div className='about-img-container'>
                    <img src={Me} />
                </div>
                <div className='about-content'>
                    <h1>Hi, I'm Brenda!</h1>
                    <p> I'm a full stack web developer with three years of experience in secondary science education personalizing the
                        learning experience for students. Now looking to create esthetically pleasing and tailored experiences for users
                        on the web. Earned a certificate in full stack development from the University of Texas in Austin, with newly
                        developed skills in JavaScript, CSS, React.js, and responsive web design. Creative thinker and problem solver,
                        ardent about web development. Ready for a new challenge and opportunity for growth personalizing user
                        experience on the web.</p>
                </div>
            </div>
        )
    }
}

export default About;