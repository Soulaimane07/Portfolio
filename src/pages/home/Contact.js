import React, { useState } from 'react'
import {AiOutlineClose} from 'react-icons/ai'

function Contact() {
  return (
    <div id='contact' className='contact box'>
        <h1>Get In Touch</h1>
        <p>Although I’m not currently looking for any new opportunities, my inbox is always open. Whether you have a question or just want to say hi, I’ll try my best to get back to you!</p>
        <a href = "mailto: ouhmidasoulaimane2@gmail.com" className='open'> Say Hello </a>
    </div>
  )
}

export default Contact