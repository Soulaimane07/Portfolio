import React, { useState } from 'react'
import {AiOutlineClose} from 'react-icons/ai'

function Contact() {
  return (
    <div id='contact' className='contact box'>
        <h1>Entrer En Contact</h1>
        <p>Bien que je ne sois pas actuellement à la recherche de nouvelles opportunités, ma boîte de réception est toujours ouverte. Que vous ayez une question ou que vous souhaitiez simplement dire bonjour, je ferai de mon mieux pour vous répondre !</p>
        <a href = "mailto: ouhmidasoulaimane2@gmail.com" className='open'> Dis Bonjour </a>
    </div>
  )
}

export default Contact