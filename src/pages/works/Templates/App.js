import React from 'react'
import {AiOutlineLink} from 'react-icons/ai'

export default function App(props) {
  return (
    <div className='work app'> 
        <div className='image' style={{backgroundColor: "white", borderRadius: 8, justifyContent: 'center'}}>
            <img src={props.data.image} style={{width: "50%"}} />
        </div>
        <div className='info'>
            <h1 style={{marginBottom: 10}}> {props.data.title} </h1>
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
            <div className='download'>
                <a href='/apps/HM.apk' className='link' download> Download apk</a>
            </div>
        </div>
    </div>
  )
}
