import React, { useState, useEffect } from 'react'
import { AiFillEye, AiFillGithub } from 'react-icons/ai'
import { motion } from 'framer-motion'

import { AppWrap, MotionWrap } from '../../wrapper'
import { urlFor, client } from '../../client'
import { RactTooltip } from 'react-tooltip'
import './Skills.scss'
function Skills() {
  const [exprience, setExperience] = useState([])
  const [skills, setSkills] = useState([])

  useEffect(() => {
    const query = '*[_type == "experiences"]'
        const skillsQuery = '*[_type == "skills"]'

    client.fetch(query).then((data) => {
      setExperience(data)
   
    })
      client.fetch(skillsQuery).then((data) => {
        setSkills(data)
 
      })
  }, [])
  return (
    <>
      <h2 className='head-text'></h2>
      <div className="app__skills-container">
        <motion.div className='app__skills-list'>
{
  skills.map((skill)=>{
    return <motion.div
    whileInView={{opacity:[0,1]}}
    transition={{duration:0.5}}
    className="app__skills-item app__flex"
    key={skill.name}
    >
      <div className="app___flex" style={{backgrounColor:skill.bgColor}} >
        <img src={urlFor(skill.icon)} alt={skill.name} />
      </div>
      <p className="p-tex">{skill.name}</p>

    </motion.div>

  })
}
        </motion.div>
      </div>
    </>
  )
}

export default Skills
