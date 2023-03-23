import {AiFillGithub} from 'react-icons/ai'
import {AiFillInstagram} from 'react-icons/ai'
import {AiOutlineTwitter} from 'react-icons/ai'
import {AiFillLinkedin} from 'react-icons/ai'

function Social() {

  const socials = [
    {'title':'github', 'icon':<AiFillGithub />, 'link':'https://github.com/'},
    {'title':'instagram', 'icon':<AiFillInstagram />, 'link':'https://www.instagram.com/'},
    {'title':'twitter', 'icon':<AiOutlineTwitter />, 'link':'https://twitter.com/'},
    {'title':'linkedin', 'icon':<AiFillLinkedin />, 'link':'https://linkedin.com/'},
  ]

  return (
    <>
        <div className='social'>
            {socials.map((social, key)=>(
              <a className='social-item' key={key} href={social.link}> 
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