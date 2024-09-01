import { Divider, Paper, Typography } from '@mui/material'
import styles from '@/src/components/Sidebar/styles.module.scss'
import SkillChip, { Skill } from '../Skill/Skill'

interface SkillsProps {
  title: string
  skills: Skill[]
}

export default function Skills(props: SkillsProps) {
  return (
    <Paper elevation={3} className={styles.sidebar} sx={{ mb: 3 }}>
      <Typography variant="h4">{props.title}</Typography>

      <Divider sx={{ mb: 2, mt: 2 }} />

      {props.skills.map((skill: Skill) => (
        <SkillChip {...skill} />
      ))}
    </Paper>
  )
}
