import React, { Component } from 'react';
import ContactForm from '../pages/Form/Form'
import Wave3 from '../site-images/wave-3.png'

import '../pages/Contact.css'

class Contact extends Component {
    render() {
        return (
            <div className='contact'>
                {/* <div className='wave-3'>
                    <img src={Wave3} alt='wave decoration'/>
                </div> */}
                <h1 id='contact'>Let's Connect!</h1>
                <ContactForm />
            </div>
        )
    }
}

export default Contact