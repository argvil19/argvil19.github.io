import { Chip, Divider, Paper, Typography } from '@mui/material'
import styles from '@/components/Sidebar/styles.module.scss'
import StarIcon from '@mui/icons-material/Star'

interface Skill {
  name: string
  isFeatured: boolean
}

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
        <Chip
          label={skill.name}
          key={skill.name}
          sx={{ mb: 1, mr: 1 }}
          onDelete={() => {}}
          deleteIcon={
            skill.isFeatured ? (
              <StarIcon style={{ width: 16, height: 16 }} />
            ) : (
              <></>
            )
          }
        />
      ))}
    </Paper>
  )
}
