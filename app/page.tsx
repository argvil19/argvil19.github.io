import AboutMe from '@/components/AboutMe/AboutMe'
import Experience from '@/components/Experience/Experience'
import OtherProjects from '@/components/OtherProjects/OtherProjects'
import experienceData from '@/public/experience.json'
import projectsData from '@/public/projects.json'

export default function Home() {
  return (
    <>
      <AboutMe />
      <Experience data={experienceData} />
      <OtherProjects data={projectsData} />
    </>
  )
}
