import React, { useState } from 'react'
import HomeHeader from '../../extentions/HomeHeader'
import {Link} from 'react-router-dom'

function Experiences() {

    const experiences = [
        {
            'title':'Stage',
            'company':'BZ SOFT',
            'link':'https://bz-soft.com/en/accueil-english/',
            'time':'July 10 2020',
            'text':"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        },
    ]

    const [exp, setexp] = useState(0)

  return (
    <div id='experiences' className='box experiences'>
        <HomeHeader index={'02'} title={'Expériences'} />

        <div className='box-details'>
            <div className='list'>
                {experiences.map((experience, key)=>(
                    <button className={`button ${exp == key && 'active'}`} onClick={()=>setexp(key)}> {experience.company} </button>
                ))}
            </div>
            <div className='details'>
                <h1> {experiences[exp].title} at <a target={'_blank'} href={experiences[exp].link} className='company'> @ {experiences[exp].company} </a> </h1>
                <span className='time'> {experiences[exp].time} </span>
                <p> {experiences[exp].text} </p>
            </div>
        </div>
    </div>
  )
}

export default Experiences