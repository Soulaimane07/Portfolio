import {AiFillGithub} from 'react-icons/ai'
import {AiFillInstagram} from 'react-icons/ai'
import {AiOutlineTwitter} from 'react-icons/ai'
import {AiFillLinkedin} from 'react-icons/ai'

function Social() {

  const socials = [
    {'title':'linkedin', 'icon':<AiFillLinkedin />, 'link':'https://www.linkedin.com/in/soulaimane-ouhmida-42a636242/'},
    {'title':'github', 'icon':<AiFillGithub />, 'link':'https://github.com/Soulaimane07'},
    {'title':'instagram', 'icon':<AiFillInstagram />, 'link':'https://www.instagram.com/thats_soulaimane/'},
    {'title':'twitter', 'icon':<AiOutlineTwitter />, 'link':'https://twitter.com/'},
  ]

  return (
    <>
        <div className='social'>
            {socials.map((social, key)=>(
              <a className='social-item' target='_blank' key={key} href={social.link}> 
                {social.icon} 
              </a>
            ))}
            <div className='vl'>
            </div>
        </div>   

        <div className='email'>
          <a href = "mailto: ouhmidasoulaimane2@gmail.com">ouhmidasoulaimane2@gmail.com</a>
          <div className='vl'>
          </div>
        </div>
    </>
  )
}

export default Social