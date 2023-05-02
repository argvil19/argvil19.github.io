'use client'
import { Divider, Paper, Typography } from '@mui/material'
import styles from './styles.module.scss'

export default function OtherProjects() {
  return (
    <Paper elevation={3} className={styles.container}>
      <Typography variant="h2">Personal Projects</Typography>

      <Divider sx={{ mb: 3, mt: 3 }} />
    </Paper>
  )
}
