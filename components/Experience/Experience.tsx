'use client'
import {
  Box,
  Chip,
  Divider,
  Grid,
  IconButton,
  Paper,
  Typography
} from '@mui/material'
import styles from './styles.module.scss'
import LinkIcon from '@mui/icons-material/Link'
import Link from 'next/link'
import ControlPointIcon from '@mui/icons-material/ControlPoint'
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline'
import { useState } from 'react'
import { ExperienceProps, Company, ActiveProject } from '../interfaces'
import ProjectCard from '../ProjectCard/ProjectCard'

export default function Experience(props: ExperienceProps) {
  const [openedProjects, setOpenedProjects] = useState<number[]>([])

  const toggleProject = (index: number) => {
    if (openedProjects.includes(index)) {
      setOpenedProjects(openedProjects.filter(i => i !== index))
    } else {
      setOpenedProjects(openedProjects.concat([index]))
    }
  }

  const isProjectsOpened = (index: number) => {
    return openedProjects.includes(index)
  }

  return (
    <Paper elevation={3} className={styles.container} sx={{ mb: 3 }}>
      <Typography variant="h2">Experience</Typography>

      <Divider sx={{ mb: 3, mt: 3 }} />

      {props.data.map((company: Company, ind: number) => (
        <Box key={company.title} mb={5}>
          <Typography variant="h4" sx={{ mb: 1 }}>
            {company.title}
            <Link href={company.url} target="_blank">
              <LinkIcon style={{ position: 'relative', top: 4, left: 5 }} />
            </Link>
          </Typography>
          <Typography variant="h6" sx={{ mb: 1 }}>
            {company.jobTitle}
          </Typography>
          <Typography variant="subtitle1" sx={{ mb: 2 }}>
            <Chip label={company.startDate} /> -{' '}
            <Chip label={company.endDate} />
          </Typography>
          <Typography variant="body1" sx={{ mb: 1 }}>
            {company.description}
          </Typography>

          {company.activeProjects!.length > 0 && (
            <>
              <Typography variant="h6" sx={{ mb: 1 }}>
                Projects{' '}
                <IconButton onClick={() => toggleProject(ind)}>
                  {isProjectsOpened(ind) ? (
                    <RemoveCircleOutlineIcon />
                  ) : (
                    <ControlPointIcon />
                  )}
                </IconButton>
              </Typography>

              <Grid container spacing={2}>
                {isProjectsOpened(ind) &&
                  company.activeProjects!.map((project: ActiveProject) => (
                    <Grid item>
                      <Link
                        href={project.url}
                        className={styles.avoid_underline}
                        target="__blank"
                      >
                        <ProjectCard {...project} />
                      </Link>
                    </Grid>
                  ))}
              </Grid>
            </>
          )}
        </Box>
      ))}
    </Paper>
  )
}
