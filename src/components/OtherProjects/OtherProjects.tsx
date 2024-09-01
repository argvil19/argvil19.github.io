'use client'
import { Divider, Paper, Typography } from '@mui/material'
import styles from './styles.module.scss'
import { ExperienceProps } from '../interfaces'
import PortfolioItem from '../PortfolioItem/PortfolioItem'

export default function OtherProjects(props: ExperienceProps) {
  return (
    <Paper elevation={3} className={styles.container}>
      <Typography variant="h2">Side Projects</Typography>

      <Divider sx={{ mb: 3, mt: 3 }} />

      {props.data.map(project => (
        <PortfolioItem {...project} />
      ))}
    </Paper>
  )
}
