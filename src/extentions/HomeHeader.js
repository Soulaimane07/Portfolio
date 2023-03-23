import React from 'react'

function HomeHeader(props) {
  return (
    <div className='boxheader'>
      <div className='title'>
      <h2> {props.index}. </h2>
      <h1> {props.title} </h1>
      </div>
      <hr></hr>
    </div>
  )
}

export default HomeHeader