import { Avatar, Paper, Typography } from '@mui/material'
import SocialIcons from '../SocialIcons/SocialIcons'
import styles from '@/components/Sidebar/styles.module.scss'

interface PersonalProps {
  name: string
  title: string
  avatarSrc: string
}

export default function Personal(props: PersonalProps) {
  const { name, title, avatarSrc } = props
  return (
    <Paper elevation={3} className={styles.sidebar} sx={{ mb: 3 }}>
      <div className={styles.avatar_title_section}>
        <Avatar
          src={avatarSrc}
          className={styles.avatar}
          sx={{ height: 175, width: 175 }}
        ></Avatar>
        <Typography variant="h4" className={styles.title}>
          {name}
        </Typography>
        <Typography variant="subtitle1" className={styles.title}>
          {title}
        </Typography>

        <SocialIcons />
      </div>
    </Paper>
  )
}
