import React, { Component } from 'react';
import Uplift from '../site-images/uplift.png'
import Beauty from '../site-images/ajbeauty.png'

import '../pages/Portfolio.css'

class Portfolio extends Component {
    render() {
        return (
            <div className='portfolio' id='portfolio'>
                <div className='portfolio-intro'>
                    <h1>Welome to my portfolio!</h1>
                    <p> Here you will find a showcase of my skills, experience, and passion for
                        crafting stunning and functional websites. With a strong foundation in
                        web development and a commitment to staying up-to-date with the latest
                        trends and technologies, I take pride in creating engaging online
                        experiences that leave a lasting impression. Each project has been
                        meticulously designed and executed to meet the unique needs and objectives
                        of the client, demonstrating my ability to translate ideas into fully
                        functional websites.</p>
                </div>
                <div className='project-container'>
                    <div className='projects'>
                        <div className='p-img-container'>
                            <a href='https://uplifttherapy.org/'
                                target='_blank'>
                                <img src={Uplift}
                                    alt='home page of Uplift Therapy website' />
                            </a>
                        </div>
                        <h2>Uplift Therapy</h2>
                        <div className='project-links'>
                            <a href='https://uplifttherapy.org/'
                                target='_blank'>
                                view it live</a>
                            <p>//</p>
                            <a href='https://github.com/bralvis2/uplift-therapy'
                                target='_blank'>
                                view the code</a>
                        </div>
                    </div>
                    <div className='projects'>
                        <div className='p-img-container'>
                            <a href='https://bralvis2.github.io/avielle-jay-beauty/#home'
                                target='_blank'>
                                <img src={Beauty}
                                    alt='home page of avielle jay beauty website' />
                            </a>
                        </div>
                        <h2>Avielle Jay Beauty</h2>
                        <div className='project-links'>
                            <a href='https://bralvis2.github.io/avielle-jay-beauty/#home'
                                target='_blank'>
                                view it live</a>
                            <p>//</p>
                            <a href='https://github.com/bralvis2/avielle-jay-beauty'
                                target='_blank'>
                                view the code</a>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Portfolio;