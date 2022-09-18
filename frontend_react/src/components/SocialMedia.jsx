import React from 'react'
import {BsGithub, BsLinkedin } from 'react-icons/bs'


const SocialMedia = () => (
  <div className='app__social'>
    <div>
      <a href='https://www.linkedin.com/in/james-sarafraz-b78907167/'>
        <BsLinkedin />
      </a>
    </div>

    <div>
      <a href='https://github.com/jasem66'>

        <BsGithub />
      </a>
    </div>
  </div>
)

export default SocialMedia
