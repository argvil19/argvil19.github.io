'use client'
import Skills from '../Skills/Skills'
import Personal from '../Personal/Personal'
import programmingAndFrameworks from '@/src/static/programming_frameworks.json'
import languages from '@/src/static/languages.json'
import GroupedSkills from '../GroupedSkills/GroupedSkills'
import learnings from '@/src/static/learning.json'

export default function Sidebar() {
  return (
    <>
      <Personal
        name="Argenis Villasmil"
        title="Full Stack JavaScript Developer"
        avatarSrc="./me.jpg"
      />
      <GroupedSkills
        title="Skills & Technologies"
        groupedSkills={programmingAndFrameworks}
      />
      <Skills title="Languages" skills={languages} />
    </>
  )
}
