import React from 'react'
import HomeHeader from '../../extentions/HomeHeader'
import {AiOutlineArrowRight} from 'react-icons/ai'
import { Link } from 'react-router-dom'

function Work() {

    const works = [
        {
            'title':'Hulu App',
            'text':'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.',
            'extantions':['VS Code', 'Sublime', 'Atom', 'Hyper'],
            'image':'/images/Netflix.jpg',
            'link':'',
        },
        {
            'title':'Hulu App',
            'text':'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.',
            'extantions':['VS Code', 'Sublime', 'Atom', 'Hyper'],
            'image':'/images/Netflix.jpg',
            'link':'',
        },
        {
            'title':'Hulu App',
            'text':'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.',
            'extantions':['VS Code', 'Sublime', 'Atom', 'Hyper'],
            'image':'/images/Netflix.jpg',
            'link':'',
        },
        {
            'title':'Hulu App',
            'text':'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.',
            'extantions':['VS Code', 'Sublime', 'Atom', 'Hyper'],
            'image':'/images/Netflix.jpg',
            'link':'',
        }
    ]

  return (
    <div id='work' className='box work'>
        <HomeHeader index={'03'} title={'Some Things I’ve Built'} />

        <div className='box-details'>
            {works.map((work,key)=>(
                key < 3 && (
                key % 2 == 0 ?
                <div key={key} className='right work-item'>
                    <div className='preview' style={{backgroundImage: `url(${work.image})`}}></div>
                    <div className='details'>
                        <h1>{work.title}</h1>
                        <p> {work.text} </p>
                        <a href={work.link}> Live Preview <AiOutlineArrowRight /> </a>
                    </div>
                </div>
                :
                <div key={key} className='left work-item'>
                    <div className='details'>
                        <h1>{work.title}</h1>
                        <p> {work.text} </p>
                        <a href={work.link}> Live Preview <AiOutlineArrowRight /> </a>
                    </div>
                    <div className='preview' style={{backgroundImage: `url(${work.image})`}} ></div>
                </div>
                )
            ))}
        </div>
        <div className='showmore'>
            <Link to='work' className='button'>
                See All
            </Link>
        </div>
    </div>
  )
}

export default Work