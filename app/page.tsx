import AboutMe from '@/components/AboutMe/AboutMe'
import Experience from '@/components/Experience/Experience'
import FloatingDownload from '@/components/FloatingDownload/FloatingDownload'
import OtherProjects from '@/components/OtherProjects/OtherProjects'
import experienceData from '@/public/experience.json'
import projectsData from '@/public/projects.json'

export default function Home() {
  return (
    <>
      <AboutMe />
      <FloatingDownload url={'/argvil19-resume.pdf'} />
      <Experience data={experienceData} />
      <OtherProjects data={projectsData} />
    </>
  )
}
