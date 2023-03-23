import React from 'react'
import HomeHeader from '../../extentions/HomeHeader'
import {AiOutlineArrowRight} from 'react-icons/ai'
import { Link } from 'react-router-dom'
import Works from '../data/Data.json'

function Work() {
  return (
    <div id='work' className='box work'>
        <HomeHeader index={'03'} title={"Certaines choses que j'ai construites"} />

        <div className='box-details'>
            {Works.works.map((work,key)=>(
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
            <Link to='works' className='button'>
                    Voir Tout
            </Link>
        </div>
    </div>
  )
}

export default Work