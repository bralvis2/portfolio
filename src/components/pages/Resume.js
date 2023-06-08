import React, { Component } from 'react';
import Decor1 from '../site-images/decor-1.png'
import Decor2 from '../site-images/decor-2.png'
import Decor3 from '../site-images/decor-3.png'

import Html from '../SVG-icons/html.svg'
import Css from '../SVG-icons/css.svg'
import Sass from '../SVG-icons/sass.svg'
import JS from '../SVG-icons/js.svg'
import Re from '../SVG-icons/react.svg'
import Node from '../SVG-icons/node-js.svg'
import Mongo from '../SVG-icons/mongo.svg'
import Mysql from '../SVG-icons/mysql.svg'
import Npm from '../SVG-icons/npm.svg'
import Figma from '../SVG-icons/figma.svg'
import Bootstrap from '../SVG-icons/bootstrap.svg'
import Github from '../SVG-icons/github.svg'
import Vscode from '../SVG-icons/vs-code.svg'
import Grad from '../SVG-icons/grad.svg'
import Cert from '../SVG-icons/certificate.svg'

import '../pages/Resume.css'

class Resume extends Component {
    render() {
        return (
            <div className='resume' id='resume'>
                <div className='resume-intro'>
                    <h1>Check out my resume</h1>
                    <p>As a web developer, I am thrilled to present my resume showcasing my
                        skills, work experience, education, and interests in the world of web development.
                        With a solid foundation in HTML, CSS, and JavaScript, I have a passion for creating
                        visually appealing and user-friendly websites. My recent work experience has allowed
                        me to apply my knowledge in a practical setting, collaborating with teams and
                        contributing to the development of engaging web applications</p>
                </div>
                <div className='resume-content-container'>
                    <div className='resume-sections skills-container'>
                        <div className='skills'>
                            <h2>Skills</h2>
                            <hr />
                            <h3>Programming Languages & Tools</h3>
                            <ul className='skills-list'>
                                <li>
                                    <img src={Html} alt='Html' />
                                </li>
                                <li>
                                    <img src={Css} alt='CSS' />
                                </li>
                                <li>
                                    <img src={Sass} alt='Sass' />
                                </li>
                                <li>
                                    <img src={JS} alt='Javascript' />
                                </li>
                                <li>
                                    <img src={Re} alt='React' />
                                </li>
                                <li>
                                    <img src={Node} alt='Node.js' />
                                </li>
                                <li>
                                    <img src={Mongo} alt='MongoDB' />
                                </li>
                                <li>
                                    <img src={Mysql} alt='mySQL' />
                                </li>
                                <li>
                                    <img src={Npm} alt='npm' />
                                </li>
                                <li>
                                    <img src={Figma} alt='npm' />
                                </li>
                                <li>
                                    <img src={Bootstrap} alt='Bootstrap' />
                                </li>
                                <li>
                                    <img src={Github} alt='Github' />
                                </li>
                                <li>
                                    <img src={Vscode} alt='VS Code' />
                                </li>
                            </ul>
                            <ul className='non-technical-skills'>
                                <li>Problem Sovling</li>
                                <li>Mobile Responisve Design</li>
                                <li>Attention to Detail</li>
                            </ul>
                        </div>
                        <div className='decor-img'>
                            <img src={Decor1} />
                        </div>
                    </div>
                    <div className='resume-sections experience-container'>
                        {/* <div className='decor-img decor-img-2'>
                            <img src={Decor2} />
                        </div> */}
                        <div className='experience'>
                            <h2>Experience</h2>
                            <hr />
                            <div className='work-experience'>
                                <div className='work-details'>
                                    <h3>Science Teacher</h3>
                                    <h4>COMAL ISD</h4>
                                    <p>As a secondary science teacher, I was responsible for the creation and implementation of
                                        curriculum aligned with the state learning standards. Over the course of three years, I
                                        taught and developed a curriculum for biology and chemistry for freshmen and sophomores.
                                        During that time, I created learning materials and activities for learners
                                        online and in person. I routinely learned how to use various software applications to input
                                        student data such as grades, learning targets and goals. As well as various software
                                        applications to communicate with students and parents. Additionally, I created assessments
                                        following state learning standards. After analyzing the data from assessments,
                                        I identified areas for growth and adjusted the curriculum as needed. </p>
                                </div>
                                <div className='work-dates'>
                                    <p>Aug 2019 - May 2022</p>
                                </div>
                            </div>
                            <div className='work-experience'>
                                <div className='work-details'>
                                    <h3>Graduate Research Assistant</h3>
                                    <h4>UNIVERSITY OF COLORADO - BOULDER</h4>
                                    <p>As a graduate research assistant,  I worked in a team on the research project titled “Building
                                        on parent/caregiver skills and cultivating a welcoming school culture to better support the
                                        academic and social-emotional development of early learner Latino/a students.” My duties
                                        included conducting eligibility screenings in English and Spanish. Communicating with
                                        participants via phone, text, and email regarding session details such as dates, locations,
                                        and times. I was responsible for scheduling participants to sessions and communicating that
                                        with the project lead. I attended sessions and took notes over the topics covered.
                                        Additionally, I collected and entered participant data as well as translated documents and
                                        audio transcripts from the sessions.</p>
                                </div>
                                <div className='work-dates'>
                                    <p>Jan 2018 - April 2019</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='resume-sections edu-container'>
                        <div className='education'>
                            <h2>Education</h2>
                            <hr />
                            <div className='education-container'>
                                <div className='education-details'>
                                    <img src={Cert} alt='graduation cap'/>
                                    <h3>Full Stack Coding Certificate</h3>
                                    <h4>University of Texas</h4>
                                    <p>2022</p>
                                </div>
                                <div className='education-details'>
                                <img src={Grad} alt='graduation cap'/>
                                    <h3>Master of Education</h3>
                                    <h4>University of Colorado</h4>
                                    <p>2019</p>
                                </div>
                                <div className='education-details'>
                                <img src={Grad} alt='graduation cap'/>
                                    <h3>Bachelor of Science</h3>
                                    <h4>University of Nebraska</h4>
                                    <p>2016</p>
                                </div>
                            </div>
                        </div>
                        <div className='decor-img-3'>
                            <img src={Decor2} />
                        </div>
                    </div>
                    <div className='interests'>
                        <h2>Interests</h2>
                        <hr />
                        <p>
                        Web design has always captivated my interest, with its ability to fuse creativity and 
                        functionality to create engaging online experiences. I am particularly drawn to the clean 
                        and modern aesthetic that has become increasingly popular in today's digital landscape. 
                        The sleek lines, minimalist layouts, and thoughtful use of whitespace all contribute to a 
                        visually pleasing and intuitive user interface. Inspired by this aesthetic, I am driven to 
                        refine my skills in web design, continuously exploring new design trends, color palettes, 
                        and typography choices. By staying updated with the latest design principles and tools, I 
                        aspire to create websites that not only provide seamless navigation but also leave a lasting 
                        impression on users. The pursuit of mastering this clean and modern design style fuels my 
                        passion for web design and pushes me to push the boundaries of my creativity with each project.
                        </p>
                    </div>
                </div>
            </div>
        )
    }
}

export default Resume