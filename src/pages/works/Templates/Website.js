import React from 'react'
import {AiOutlineLink} from 'react-icons/ai'

function Website(props) {
  return (
    <div className='work'> 
        <div className='image'>
            <img src={props.data.image} />
        </div>
        <div className='info'>
            <h1> {props.data.title} </h1>
            <span> <AiOutlineLink /> <a target='_blank' href={props.data.link}> {props.data.link} </a> </span>
            <p> {props.data.text} </p>
            <div className='date'>
                <p> Last published at {props.data.date} </p>
            </div>
            <div className='devs'>
                {props.data.extantions.map((item,key)=>(
                    <div className='dev' key={key}> 
                        <span> <img src={item.icon} /> </span>
                        <h2> {item.title} </h2>
                    </div>
                ))}
            </div>
        </div>
    </div>
  )
}

export default Website