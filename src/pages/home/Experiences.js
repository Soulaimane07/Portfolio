import React, { useState } from 'react'
import HomeHeader from '../../extentions/HomeHeader'
import {Link} from 'react-router-dom'

function Experiences() {

    const experiences = [
        {
            'title':'Stage',
            'company':'Google',
            'link':'https://www.google.com/',
            'time':'July 10 2020',
            'text':'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using, making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).',
        },
        {
            'title':'Stage',
            'company':'Meta',
            'link':'https://www.meta.com/',
            'time':'July 10 2020',
            'text':'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using, making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).',
        },
        {
            'title':'Stage',
            'company':'Amazon',
            'link':'https://www.amazon.com/',
            'time':'July 10 2020',
            'text':'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using, making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).',
        },
        {
            'title':'Stage',
            'company':'Uber',
            'link':'https://www.uber.com/ma/en/',
            'time':'July 10 2020',
            'text':'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using, making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).',
        }
    ]

    const [exp, setexp] = useState(0)

  return (
    <div id='experiences' className='box experiences'>
        <HomeHeader index={'02'} title={'Experiences'} />

        <div className='box-details'>
            <div className='list'>
                {experiences.map((experience, key)=>(
                    <button className={`button ${exp == key && 'active'}`} onClick={()=>setexp(key)}> {experience.company} </button>
                ))}
            </div>
            <div className='details'>
                <h1> {experiences[exp].title} at <Link to={experiences[exp].link} className='company'> @ {experiences[exp].company} </Link> </h1>
                <span className='time'> {experiences[exp].time} </span>
                <p> {experiences[exp].text} </p>
            </div>
        </div>
    </div>
  )
}

export default Experiences