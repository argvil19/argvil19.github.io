'use client'
import Skills from '../Skills/Skills'
import Personal from '../Personal/Personal'
import programmingAndFrameworks from '@/public/programming_frameworks.json'
import languages from '@/public/languages.json'

export default function Sidebar() {
  return (
    <>
      <Personal
        name="Argenis Villasmil"
        title="Full Stack JavaScript Developer"
        avatarSrc="./me.jpg"
      />
      <Skills
        title="Programming Languages & Frameworks"
        skills={programmingAndFrameworks}
      />
      <Skills title="Languages" skills={languages} />
    </>
  )
}
