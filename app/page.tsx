import AboutMe from '@/components/AboutMe/AboutMe'
import Experience from '@/components/Experience/Experience'
import experienceData from '@/public/experience.json'

export default function Home() {
  return (
    <>
      <AboutMe />
      <Experience data={experienceData} />
    </>
  )
}
