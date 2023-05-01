export interface Company {
  title: string
  jobTitle: string
  companyUrl: string
  startDate: string
  endDate: string
  description: string
  activeProjects: ActiveProject[]
}

export interface ActiveProject {
  title: string
  url: string
  description: string
  img: string
}

export interface ExperienceProps {
  data: Company[]
}
