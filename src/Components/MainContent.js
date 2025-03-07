import React from 'react'
import HeroSec from './HeroSec'
import SkillSec from './SkillSec'
import ProjectCon from './ProjectCon'
function MainContent() {
  return (
    <div className='pt-28'>
      <HeroSec></HeroSec>
      <SkillSec></SkillSec>
      <ProjectCon></ProjectCon>
    </div>
  )
}

export default MainContent
