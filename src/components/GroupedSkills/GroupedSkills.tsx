import { Box, Divider, Paper, Typography } from '@mui/material'
import styles from '@/src/components/Sidebar/styles.module.scss'
import SkillChip, { Skill } from '../Skill/Skill'

interface GroupedSkills {
  title: string
  skills: Skill[]
}

interface GroupedSkillsProps {
  title: string
  groupedSkills: GroupedSkills[]
}

const GroupedSkill = ({ title, skills }: GroupedSkills) => (
  <Box key={title} sx={{ mb: 2 }}>
    <Typography variant="h5" sx={{ mb: 1 }}>
      {title}
    </Typography>
    {skills.map((skill: Skill) => (
      <SkillChip {...skill} />
    ))}
  </Box>
)

export default function GroupedSkills(props: GroupedSkillsProps) {
  return (
    <Paper elevation={3} className={styles.sidebar} sx={{ mb: 3 }}>
      <Typography variant="h4">{props.title}</Typography>

      <Divider sx={{ mb: 2, mt: 2 }} />

      {props.groupedSkills.map((groupedSkill: GroupedSkills) => (
        <GroupedSkill {...groupedSkill} />
      ))}
    </Paper>
  )
}
