import React from 'react'
import HomeHeader from '../../extentions/HomeHeader'

function About() {
  return (
    <div className='box' id='about'>
        <HomeHeader index={'01'} title={'À propos de moi'} />
        <div class="box-details flex flex-col md:flex-row">
            <div class="details flex flex-col p-4 leading-normal">
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type.</p>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five.</p>
            </div>
            <div className='image'>
                <img class="object-cover w-full h-96 rounded-t-lg md:h-auto md:w-48 md:rounded-none md:rounded-l-lg" src="/images/person.jpg" alt="" />
            </div>
        </div>
    </div>
  )
}

export default About