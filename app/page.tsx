import AboutMe from '@/src/components/AboutMe/AboutMe'
import Experience from '@/src/components/Experience/Experience'
import FloatingDownload from '@/src/components/FloatingDownload/FloatingDownload'
import OtherProjects from '@/src/components/OtherProjects/OtherProjects'
import experienceData from '@/src/static/experience.json'
import projectsData from '@/src/static/projects.json'

export default function Home() {
  return (
    <>
      <AboutMe />
      <Experience data={experienceData} />
      <OtherProjects data={projectsData} />
      <FloatingDownload url={'/argvil19-resume.pdf'} />
    </>
  )
}
