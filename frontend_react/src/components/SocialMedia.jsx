import React from 'react'
import { BsTwitter, BsInstagram, BsGithub, BsLinkedin } from 'react-icons/bs'
import { FaFacebookF } from 'react-icons/fa'

const SocialMedia = () => (
  <div className='app__social'>
    <div>
      <a href='https://www.linkedin.com/in/james-sarafraz-b78907167/'>
        <BsGithub />
      </a>
    </div>

    <div>
      <a href='https://github.com/jasem66'>   <BsLinkedin /></a>
   
    </div>
  </div>
)

export default SocialMedia
