import React from 'react'
import HomeHeader from '../../extentions/HomeHeader'

function About() {
  return (
    <div className='box' id='about'>
        <HomeHeader index={'01'} title={'About Me'} />
        <div class="box-details flex flex-col md:flex-row">
            <div class="details flex flex-col p-4 leading-normal">
                <p>Hello! My name is Brittany and I enjoy creating things that live on the internet. My interest in web development started back in 2012 when I decided to try editing custom Tumblr themes — turns out hacking together a custom reblog button taught me a lot about HTML & CSS!</p>
                <p>Fast-forward to today, and I’ve had the privilege of working at an advertising agency, a start-up, a huge corporation, and a student-led design studio. My main focus these days is building accessible, inclusive products and digital experiences at Upstatement for a variety of clients.</p>
            </div>
            <div className='image'>
                <img class="object-cover w-full h-96 rounded-t-lg md:h-auto md:w-48 md:rounded-none md:rounded-l-lg" src="/images/person.jpg" alt="" />
            </div>
        </div>
    </div>
  )
}

export default About